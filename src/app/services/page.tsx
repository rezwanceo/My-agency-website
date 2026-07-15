import { Card } from '../../components/Card';
import { Container } from '../../components/Container';
import { Section } from '../../components/Section';
import { services } from '../../lib/site-data';

export default function ServicesPage() {
  return (
    <main className="pb-24">
      <Section title="Services">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} title={service.title} description={service.description} href={`/services/${service.slug}`} ctaLabel="Read more" />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
