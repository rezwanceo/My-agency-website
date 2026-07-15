import { notFound } from 'next/navigation';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { caseStudies } from '../../../lib/site-data';

interface CaseStudyPageProps {
  params: { slug: string };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = caseStudies.find((item) => item.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="pb-24">
      <section className="bg-slate-950 py-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="inline-flex rounded-full bg-teal-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-teal-200">
              Case Study
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{study.title}</h1>
            <p className="text-lg leading-8 text-slate-300">{study.summary}</p>
            <Button href="/contact" size="lg">
              Book a Consultation
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold text-white">Impact</h2>
              <p className="mt-4 text-slate-300">{study.impact}</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8">
              <h2 className="text-2xl font-semibold text-white">Results</h2>
              <ul className="mt-4 space-y-3 text-slate-300">
                {study.results.map((result) => (
                  <li key={result} className="rounded-2xl bg-white/5 px-4 py-3">{result}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
