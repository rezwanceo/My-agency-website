import Link from 'next/link';
import { Card } from '../../components/Card';
import { Container } from '../../components/Container';
import { Section } from '../../components/Section';
import { blogPosts } from '../../lib/site-data';

export default function BlogPage() {
  return (
    <main className="pb-24">
      <Section title="Blog">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.title} title={post.title} description={post.excerpt} href={`/blog/${post.slug}`} ctaLabel="Read More">
                <div className="mt-2 text-sm text-slate-400">Practical insights for modern teams.</div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
