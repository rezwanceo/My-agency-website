import { notFound } from 'next/navigation';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { services } from '../../../lib/site-data';

interface ServiceDetailPageProps {
  params: { slug: string };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="pb-24">
      <section className="bg-slate-950 py-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="inline-flex rounded-full bg-teal-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-teal-200">
              Service
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{service.title}</h1>
            <p className="text-lg leading-8 text-slate-300">{service.overview}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Get Started
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold text-white">What this service includes</h2>
              <p className="mt-4 text-slate-300">{service.description}</p>
              <ul className="mt-6 space-y-3 text-slate-300">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3">
                    <span className="text-teal-300">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8">
              <h2 className="text-2xl font-semibold text-white">Ready for this service?</h2>
              <p className="mt-4 text-slate-300">We can scope a launch plan, build roadmap, and growth strategy around this capability.</p>
              <div className="mt-6">
                <Button href="/contact" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
