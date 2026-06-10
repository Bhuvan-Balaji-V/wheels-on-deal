"use client";
// app/superadmin/blogs/page.tsx
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Edit2, Trash2, ExternalLink, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";
import { formatDate } from "@/lib/utils";

export default function AdminBlogsPage() {
  const [posts, setPosts] = useState(BLOG_POSTS);
  const [showNewForm, setShowNewForm] = useState(false);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0]">
            Blog Management
          </h1>
          <p className="text-[#888880] text-sm mt-1">
            {posts.length} posts · SEO-optimised road trip guides
          </p>
        </div>
        <button
          onClick={() => setShowNewForm(!showNewForm)}
          className="btn-gold flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-widest"
        >
          <Plus size={14} />
          New Post
        </button>
      </div>

      {/* New post form */}
      {showNewForm && (
        <div
          className="mb-8 p-6 rounded-2xl"
          style={{
            background: "#161616",
            border: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          <h2 className="text-lg font-['Cormorant_Garamond',serif] font-semibold text-[#F5F5F0] mb-5">
            New Blog Post
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {[
              { label: "Post Title", placeholder: "Best self-drive cars in Bangalore 2025" },
              { label: "Slug", placeholder: "best-self-drive-cars-bangalore-2025" },
              { label: "SEO Meta Title", placeholder: "SEO title (60 chars max)" },
              { label: "Cover Image URL", placeholder: "https://images.unsplash.com/..." },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-[#888880] text-xs uppercase tracking-wider mb-1.5">
                  {field.label}
                </label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2.5 rounded-lg text-sm text-[#F5F5F0] placeholder-[#444440] focus:outline-none"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className="block text-[#888880] text-xs uppercase tracking-wider mb-1.5">
              Excerpt
            </label>
            <textarea
              rows={2}
              placeholder="Brief summary for blog listing and SEO description..."
              className="w-full px-3 py-2.5 rounded-lg text-sm text-[#F5F5F0] placeholder-[#444440] focus:outline-none resize-none"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#888880] text-xs uppercase tracking-wider mb-1.5">
              Content (Markdown supported)
            </label>
            <textarea
              rows={8}
              placeholder="# Your Blog Title&#10;&#10;## Introduction&#10;&#10;Write your content here using Markdown formatting..."
              className="w-full px-3 py-2.5 rounded-lg text-sm text-[#F5F5F0] placeholder-[#444440] focus:outline-none resize-none font-mono"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#888880] text-xs uppercase tracking-wider mb-1.5">
              Tags (comma separated)
            </label>
            <input
              type="text"
              placeholder="road trip, Bangalore, Thar rental, students"
              className="w-full px-3 py-2.5 rounded-lg text-sm text-[#F5F5F0] placeholder-[#444440] focus:outline-none"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                setShowNewForm(false);
                alert("In production: saves new post to data file or database");
              }}
              className="btn-gold px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-widest"
            >
              Publish Post
            </button>
            <button
              onClick={() => setShowNewForm(false)}
              className="px-6 py-2.5 rounded-lg text-xs text-[#888880] hover:text-[#F5F5F0] transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Posts list */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#161616",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex flex-col md:flex-row gap-0">
              <div className="relative w-full md:w-48 h-36 md:h-auto shrink-0">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
              <div className="flex-1 p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="text-[#F5F5F0] font-['Cormorant_Garamond',serif] text-xl font-semibold leading-snug">
                    {post.title}
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-[#444440] text-xs mb-3">
                  <span>{formatDate(post.publishedAt)}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock size={10} />
                    {post.readTime}
                  </span>
                  <span>·</span>
                  <span className="text-[#888880]">/blog/{post.slug}</span>
                </div>
                <p className="text-[#888880] text-xs leading-relaxed mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-2 py-0.5 text-[10px] rounded-full text-[#888880]"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <Tag size={8} />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setEditingSlug(editingSlug === post.slug ? null : post.slug)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-[#C9A84C] transition-all hover:bg-[#C9A84C10]"
                    style={{ border: "1px solid rgba(201,168,76,0.25)" }}
                  >
                    <Edit2 size={11} />
                    Edit
                  </button>
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-[#888880] hover:text-[#F5F5F0] transition-all"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <ExternalLink size={11} />
                    View
                  </Link>
                  <button
                    onClick={() => {
                      if (confirm(`Delete "${post.title}"?`)) {
                        setPosts(posts.filter((p) => p.slug !== post.slug));
                      }
                    }}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-red-400 transition-all hover:bg-red-400/10"
                    style={{ border: "1px solid rgba(239,68,68,0.2)" }}
                  >
                    <Trash2 size={11} />
                    Delete
                  </button>
                </div>
              </div>
            </div>

            {/* Edit form inline */}
            {editingSlug === post.slug && (
              <div
                className="p-5 border-t space-y-4"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <p className="text-[#C9A84C] text-xs uppercase tracking-widest font-semibold">
                  Edit Post
                </p>
                {[
                  { label: "Title", defaultValue: post.title },
                  { label: "SEO Meta Title", defaultValue: post.seo.title },
                  { label: "SEO Description", defaultValue: post.seo.description },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-[#888880] text-xs uppercase tracking-wider mb-1.5">
                      {field.label}
                    </label>
                    {field.label === "SEO Description" ? (
                      <textarea
                        defaultValue={field.defaultValue}
                        rows={2}
                        className="w-full px-3 py-2 rounded-lg text-sm text-[#F5F5F0] focus:outline-none resize-none"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      />
                    ) : (
                      <input
                        type="text"
                        defaultValue={field.defaultValue}
                        className="w-full px-3 py-2 rounded-lg text-sm text-[#F5F5F0] focus:outline-none"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      />
                    )}
                  </div>
                ))}
                <div className="flex gap-3 pt-1">
                  <button
                    onClick={() => { setEditingSlug(null); alert("In production: saves to backend"); }}
                    className="btn-gold px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-widest"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingSlug(null)}
                    className="px-5 py-2 rounded-lg text-xs text-[#888880] hover:text-[#F5F5F0]"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
