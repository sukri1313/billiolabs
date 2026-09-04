import { AgentIcon, CrmIcon, RoutingIcon, WorkflowIcon } from './Icons';

const services = [
  {
    icon: CrmIcon,
    title: 'CRM Automation',
    description:
      'Sync pipelines, automate follow-ups, and eliminate manual data entry across your entire customer lifecycle.',
  },
  {
    icon: AgentIcon,
    title: 'Custom LLM Support Agents',
    description:
      'Intelligent agents trained on your knowledge base — handling support, onboarding, and internal queries 24/7.',
  },
  {
    icon: WorkflowIcon,
    title: 'n8n / Make Workflows',
    description:
      'Robust, visual automation orchestration connecting your apps, APIs, and databases into seamless flows.',
  },
  {
    icon: RoutingIcon,
    title: 'Lead Routing',
    description:
      'Smart qualification and instant routing — every lead reaches the right person at the right moment.',
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted">
            What We Build
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Core Services
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Precision-built automation systems designed to integrate cleanly with
            your existing operations.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-border-warm bg-copper/10 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-muted/40 hover:bg-copper/20"
            >
              <div className="mb-5 inline-flex rounded-xl border border-border-warm bg-copper/20 p-3 text-muted transition-colors duration-300 group-hover:border-muted/40 group-hover:text-white">
                <service.icon />
              </div>
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
