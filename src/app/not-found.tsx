import Link from 'next/link';
import { Button } from '../components/Button';
import { Container } from '../components/Container';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-slate-950 py-24">
      <Container>
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center shadow-soft backdrop-blur-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300">404</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            The page you’re looking for doesn’t exist or may have moved. Let’s get you back to the homepage or our contact page.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/" size="lg">
              Back Home
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
