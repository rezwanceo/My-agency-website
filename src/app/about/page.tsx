import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { Section } from '../../components/Section';
import { services } from '../../lib/site-data';

export default function AboutPage() {
  return (
    <main className="pb-24">
      <section className="bg-slate-950 py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="inline-flex rounded-full bg-teal-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-teal-200">
                About Rezwan Agency
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                We help Bangladeshi SMEs and wholesale businesses compete with premium digital products.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Our agency blends AI, marketing, and modern web engineering to deliver websites, campaigns, and automation that drive measurable growth.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" size="lg">
                  Get Started
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  Explore services
                </Button>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-xl">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.28em] text-teal-300">Our mission</p>
                <p className="text-slate-300">
                  Deliver premium digital experiences with AI-driven efficiency for high-potential businesses in Bangladesh and international markets.
                </p>
                <div className="grid gap-4">
                  <Card title="Built for business" description="Websites and systems designed with growth, trust, and performance in mind." />
                  <Card title="Modern process" description="We combine discovery, design, development, and optimization with clear milestones." />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section title="What we do">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} title={service.title} description={service.description} href={`/services/${service.slug}`} ctaLabel="Read more" />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
