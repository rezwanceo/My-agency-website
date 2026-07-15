import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Container } from '../../components/Container';
import { Section } from '../../components/Section';
import { portfolioProjects } from '../../lib/site-data';

export default function PortfolioPage() {
  return (
    <main className="pb-24">
      <Section title="Portfolio">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {portfolioProjects.map((project) => (
              <Card key={project.title} title={project.title} description={project.description} href={`/case-studies/${project.caseStudySlug}`} ctaLabel="View case study">
                <div className="mt-4 text-sm text-slate-400">{project.outcome}</div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
