import { Card } from '../../components/Card';
import { Container } from '../../components/Container';
import { Section } from '../../components/Section';
import { caseStudies } from '../../lib/site-data';

export default function CaseStudiesPage() {
  return (
    <main className="pb-24">
      <Section title="Case Studies">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <Card key={study.title} title={study.title} description={study.summary} href={`/case-studies/${study.slug}`} ctaLabel="View case study" />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
