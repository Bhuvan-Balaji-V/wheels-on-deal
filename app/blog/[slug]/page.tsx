// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Clock, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { BLOG_POSTS, getBlogBySlug, getAllBlogSlugs } from "@/data/blogs";
import { CARS } from "@/data/cars";
import { SITE_CONFIG } from "@/data/config";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/utils";
import { buildBreadcrumbSchema, formatDate } from "@/lib/utils";
import { WhatsAppCTA } from "@/components/home/WhatsAppCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords.join(", "),
    alternates: { canonical: `${SITE_CONFIG.url}/blog/${slug}` },
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [{ url: post.coverImage, width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const waMsg = WA_MESSAGES.blog(post.title);
  const waUrl = buildWhatsAppUrl(waMsg);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Blog", url: `${SITE_CONFIG.url}/blog` },
    { name: post.title, url: `${SITE_CONFIG.url}/blog/${slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seo.description,
    image: post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    mainEntityOfPage: `${SITE_CONFIG.url}/blog/${slug}`,
  };

  // Related posts (by shared tags, exclude current)
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.slug !== slug && p.tags.some((t) => post.tags.includes(t))
  ).slice(0, 2);

  const relatedCars = CARS.filter((c) => post.relatedCars.includes(c.slug));

  return (
    <>
      <Script
        id="blog-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="blog-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <div className="relative min-h-[60vh] flex items-end overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.1) 100%)",
          }}
        />
        <Link
          href="/blog"
          className="absolute top-24 left-4 md:left-8 flex items-center gap-2 text-[#888880] hover:text-[#C9A84C] transition-colors text-sm z-10"
        >
          <ArrowLeft size={16} />
          All Posts
        </Link>
        <div className="container-luxury relative z-10 pb-12 max-w-3xl">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-[#444440] mb-4"
          >
            <Link href="/" className="hover:text-[#C9A84C] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#C9A84C] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#888880] truncate max-w-[200px]">{post.title}</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-2.5 py-1 text-[10px] uppercase tracking-widest rounded-full font-semibold"
                style={{
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  color: "#C9A84C",
                }}
              >
                <Tag size={8} />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-[#888880] text-xs">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock size={10} />
              {post.readTime} read
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="py-16" role="main">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article body */}
            <article className="lg:col-span-2">
              {/* Excerpt */}
              <p
                className="text-lg text-[#C9A84C] font-['Cormorant_Garamond',serif] font-light italic leading-relaxed mb-8 pb-8"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                {post.excerpt}
              </p>

              {/* Render markdown-ish content */}
              <div className="prose-custom space-y-6">
                {post.content
                  .trim()
                  .split("\n")
                  .map((line, i) => {
                    const trimmed = line.trim();
                    if (!trimmed) return null;

                    if (trimmed.startsWith("# ")) {
                      return (
                        <h2
                          key={i}
                          className="text-3xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mt-10 mb-4 leading-tight"
                        >
                          {trimmed.replace("# ", "")}
                        </h2>
                      );
                    }
                    if (trimmed.startsWith("## ")) {
                      return (
                        <h3
                          key={i}
                          className="text-2xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mt-8 mb-3"
                        >
                          {trimmed.replace("## ", "")}
                        </h3>
                      );
                    }
                    if (trimmed.startsWith("### ")) {
                      return (
                        <h4
                          key={i}
                          className="text-xl font-['Cormorant_Garamond',serif] font-semibold text-[#C9A84C] mt-6 mb-2"
                        >
                          {trimmed.replace("### ", "")}
                        </h4>
                      );
                    }
                    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
                      return (
                        <li
                          key={i}
                          className="text-[#888880] text-sm leading-relaxed ml-4 list-disc marker:text-[#C9A84C]"
                        >
                          {trimmed.replace(/^[-*] /, "")}
                        </li>
                      );
                    }
                    if (/^\d+\. /.test(trimmed)) {
                      return (
                        <li
                          key={i}
                          className="text-[#888880] text-sm leading-relaxed ml-4 list-decimal marker:text-[#C9A84C]"
                        >
                          {trimmed.replace(/^\d+\. /, "")}
                        </li>
                      );
                    }
                    if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                      return (
                        <p
                          key={i}
                          className="text-[#F5F5F0] font-semibold text-sm"
                        >
                          {trimmed.replace(/\*\*/g, "")}
                        </p>
                      );
                    }

                    // Regular paragraph — handle inline bold
                    const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
                    return (
                      <p key={i} className="text-[#888880] text-sm leading-relaxed">
                        {parts.map((part, j) =>
                          part.startsWith("**") && part.endsWith("**") ? (
                            <strong key={j} className="text-[#F5F5F0] font-semibold">
                              {part.replace(/\*\*/g, "")}
                            </strong>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    );
                  })}
              </div>

              {/* CTA within article */}
              <div
                className="mt-12 p-6 rounded-2xl"
                style={{
                  background: "rgba(201,168,76,0.05)",
                  border: "1px solid rgba(201,168,76,0.15)",
                }}
              >
                <p className="text-[#F5F5F0] font-['Cormorant_Garamond',serif] text-2xl font-semibold mb-2">
                  Ready to Book Your Thar?
                </p>
                <p className="text-[#888880] text-sm mb-4">
                  WhatsApp Wheels On Deal and we&apos;ll set you up with a Mahindra Thar or Thar Roxx in Bangalore — fast.
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-widest"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Book Now on WhatsApp
                </a>
              </div>

              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-6">
                    Related Guides
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group flex gap-4 p-4 rounded-xl transition-all hover:border-[#C9A84C40]"
                        style={{
                          background: "rgba(255,255,255,0.02)",
                          border: "1px solid rgba(255,255,255,0.05)",
                        }}
                        aria-label={`Read: ${related.title}`}
                      >
                        <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0">
                          <Image
                            src={related.coverImage}
                            alt={related.title}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[#F5F5F0] text-sm font-semibold leading-snug line-clamp-2 group-hover:text-[#C9A84C] transition-colors">
                            {related.title}
                          </p>
                          <span className="inline-flex items-center gap-1 text-[#C9A84C] text-xs mt-1">
                            Read <ArrowRight size={10} />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside aria-label="Blog sidebar" className="space-y-6">
              <div className="sticky top-28 space-y-5">
                {/* Related cars */}
                {relatedCars.length > 0 && (
                  <div
                    className="p-5 rounded-xl"
                    style={{
                      background: "rgba(201,168,76,0.04)",
                      border: "1px solid rgba(201,168,76,0.15)",
                    }}
                  >
                    <p className="text-[#C9A84C] text-xs uppercase tracking-widest font-semibold mb-4">
                      Featured In This Post
                    </p>
                    <div className="space-y-4">
                      {relatedCars.map((car) => {
                        const carWaMsg =
                          car.slug === "mahindra-thar"
                            ? WA_MESSAGES.thar
                            : WA_MESSAGES.tharRoxx;
                        const carWaUrl = buildWhatsAppUrl(carWaMsg);
                        return (
                          <div key={car.slug}>
                            <div className="relative h-32 rounded-lg overflow-hidden mb-3">
                              <Image
                                src={car.images.thumbnail}
                                alt={car.name}
                                fill
                                className="object-cover"
                                sizes="300px"
                              />
                            </div>
                            <p className="text-[#F5F5F0] font-semibold text-sm mb-1">
                              {car.name}
                            </p>
                            <p className="text-[#888880] text-xs mb-3">{car.tagline}</p>
                            <div className="flex gap-2">
                              <a
                                href={carWaUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp flex-1 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-widest text-center"
                              >
                                Book Now
                              </a>
                              <Link
                                href={`/cars/${car.slug}`}
                                className="px-3 py-2.5 rounded-lg text-xs text-[#C9A84C] border border-[#C9A84C30] hover:bg-[#C9A84C10] transition-all"
                              >
                                Details
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div
                  className="p-5 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <p className="text-[#888880] text-xs uppercase tracking-widest mb-4">
                    Topics
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs rounded-full text-[#888880]"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* All blogs link */}
                <Link
                  href="/blog"
                  className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-[#888880] text-sm hover:text-[#C9A84C] transition-all"
                  style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <ArrowLeft size={14} />
                  All Road Trip Guides
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <WhatsAppCTA
        variant="gold"
        heading="Inspired to Drive?"
        subtext="Rent a Mahindra Thar or Thar Roxx in Bangalore and make your road trip a reality."
        message={waMsg}
      />
    </>
  );
}
