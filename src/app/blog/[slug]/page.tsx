import { notFound } from 'next/navigation';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { blogPosts } from '../../../lib/site-data';

interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="pb-24">
      <section className="bg-slate-950 py-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="inline-flex rounded-full bg-teal-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-teal-200">
              Blog Article
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{post.title}</h1>
            <p className="text-lg leading-8 text-slate-300">{post.excerpt}</p>
            <Button href="/contact" size="lg">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-slate-300">
            <p className="leading-8">{post.content}</p>
          </div>
        </Container>
      </section>
    </main>
  );
}
