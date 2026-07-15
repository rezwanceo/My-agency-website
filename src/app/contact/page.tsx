import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Section } from '../../components/Section';

export default function ContactPage() {
  return (
    <main className="pb-24">
      <Section title="Contact">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-xl">
              <h1 className="text-4xl font-semibold text-white sm:text-5xl">Let’s talk about your next project.</h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                Reach out for a custom website, AI automation plan, campaign strategy, or WordPress support.
              </p>
              <div className="space-y-4 text-slate-300">
                <p>Email: hello@rezwanagency.com</p>
                <p>Phone: +880 1234 567 890</p>
                <p>Location: Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-soft">
              <div className="rounded-3xl bg-white/5 p-6">
                <p className="font-semibold text-white">Book a consultation</p>
                <p className="mt-3 text-slate-300">We’ll review your goals and propose a growth roadmap.</p>
              </div>
              <Button href="mailto:hello@rezwanagency.com" variant="primary" size="lg">
                Contact Us
              </Button>
              <Button href="/" variant="ghost" size="lg">
                Back to homepage
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
