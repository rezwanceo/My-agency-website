import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles, Users } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Container } from '../components/Container';
import {
  blogPosts,
  caseStudies,
  companyHighlights,
  faqs,
  homeStats,
  portfolioProjects,
  processSteps,
  services,
  testimonials,
} from '../lib/site-data';

const navHighlights = [
  'Premium websites for SME growth',
  'AI automation for operations',
  'Google & Meta campaign mastery',
  'SEO that attracts decision-makers',
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 pb-24 pt-24 sm:pt-28">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(15,177,166,0.24),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(255,176,32,0.18),_transparent_24%)]" />
        <Container>
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.25fr_0.9fr] lg:items-center">
            <div className="max-w-2xl space-y-8">
              <p className="inline-flex rounded-full bg-teal-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-teal-200">
                Premium AI Digital Agency
              </p>
              <div className="space-y-6">
                <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Growth-focused digital experiences for Bangladeshi SMEs and wholesale brands.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Building premium websites, AI automations, and campaign engines that convert local and global audiences.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/contact" size="lg">
                  Book a Consultation
                </Button>
                <Button href="/portfolio" variant="secondary" size="lg">
                  View Portfolio
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {navHighlights.map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200">
                    <p className="text-sm leading-6">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl">
              <div className="rounded-3xl bg-slate-900/80 p-6 text-slate-100">
                <p className="text-sm uppercase tracking-[0.28em] text-teal-300">Trusted by businesses</p>
                <div className="mt-6 grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                  <div>Wholesale distribution</div>
                  <div>Manufacturing</div>
                  <div>Retail supply</div>
                  <div>Corporate services</div>
                </div>
              </div>
              <div className="rounded-[1.5rem] bg-slate-950/90 p-6 text-slate-300">
                <p className="text-sm uppercase tracking-[0.28em] text-teal-300">Results in 2026</p>
                <div className="mt-6 space-y-4">
                  {homeStats.map((stat) => (
                    <div key={stat.label} className="rounded-3xl bg-white/5 p-5">
                      <p className="text-3xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section title="Our services">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} title={service.title} description={service.description} href={`/services/${service.slug}`} ctaLabel="Read more" />
            ))}
          </div>
        </Container>
      </Section>

      <Section title="Featured portfolio">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {portfolioProjects.map((project) => (
              <Card key={project.title} title={project.title} description={project.description} href={`/case-studies/${project.caseStudySlug}`} ctaLabel="View case study" />
            ))}
          </div>
        </Container>
      </Section>

      <Section title="How we work">
        <Container>
          <div className="grid gap-6 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-100 backdrop-blur-xl">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-teal-400/10 text-teal-300">
                  <Check size={20} />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-slate-400">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section title="Why choose us">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <Heading
                title="A premium partner for growth-ready businesses"
                subtitle="We combine AI, performance marketing, and polished digital experiences to help brands scale and sustain value."
              />
              <div className="grid gap-4">
                {companyHighlights.map((highlight) => (
                  <div key={highlight} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-slate-200">
                    <p>{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 text-slate-100 shadow-soft">
                  <p className="text-lg leading-8 text-slate-200">“{testimonial.quote}”</p>
                  <div className="mt-5">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section title="Frequently asked">
        <Container>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-200">
                <summary className="cursor-pointer text-lg font-semibold">{faq.question}</summary>
                <p className="mt-4 text-slate-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center">
            <div className="mx-auto max-w-3xl">
              <p className="text-sm uppercase tracking-[0.32em] text-teal-300">Ready to grow?</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Let’s build your next digital advantage.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
                Connect with Rezwan Agency for a custom website, marketing plan, or AI automation roadmap.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact" size="lg">
                  Get Started
                </Button>
                <Button href="/about" variant="ghost" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
