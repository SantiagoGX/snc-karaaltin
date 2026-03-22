import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  meta_description: string;
  keywords: string[];
  cover_image: string | null;
  author: string;
  published_at: string | null;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (!error && data) {
        setPost(data);
      }
      setLoading(false);
    };
    fetchPost();
  }, [slug]);

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} | Dr. Karaaltin Clinic`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", post.meta_description);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = post.meta_description;
      document.head.appendChild(m);
    }
  }, [post]);

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const readingTime = (content: string) => {
    return `${Math.max(3, Math.ceil(content.split(" ").length / 200))} min read`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-20">
          <div className="container mx-auto px-4 max-w-3xl animate-pulse">
            <div className="bg-muted h-10 rounded w-3/4 mb-4" />
            <div className="bg-muted h-4 rounded w-1/2 mb-8" />
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-muted h-4 rounded w-full" />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-20 text-center">
          <h1 className="text-2xl font-serif mb-4">Post not found</h1>
          <Link to="/blog" className="text-accent hover:underline">
            ← Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.meta_description,
    author: { "@type": "Person", name: post.author },
    datePublished: post.published_at,
    image: post.cover_image,
    keywords: post.keywords.join(", "),
    publisher: {
      "@type": "Organization",
      name: "Dr. Karaaltin Clinic",
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero */}
        <section className="bg-foreground text-background py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-background mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" /> {post.author}
              </span>
              {post.published_at && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {formatDate(post.published_at)}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {readingTime(post.content)}
              </span>
            </div>
          </div>
        </section>

        {/* Cover image */}
        {post.cover_image && (
          <div className="container mx-auto px-4 max-w-3xl -mt-8">
            <img
              src={post.cover_image}
              alt={post.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Content */}
        <article className="container mx-auto px-4 max-w-3xl py-12 md:py-16">
          <div
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-light prose-a:text-accent"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.keywords.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
