import '../styles/globals.css';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'Rezwan Software Agency & Consultancy',
  description:
    'Premium AI digital growth agency for Bangladeshi SMEs, wholesale businesses, and international clients.',
  metadataBase: new URL('https://www.rezwanagency.com'),
  openGraph: {
    title: 'Rezwan Software Agency & Consultancy',
    description:
      'Premium AI digital growth agency for Bangladeshi SMEs, wholesale businesses, and international clients.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,177,166,0.16),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(255,176,32,0.12),_transparent_24%)] pointer-events-none" />
        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
