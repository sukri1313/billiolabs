const steps = [
  {
    number: '01',
    title: 'Consult & Audit',
    description:
      'We map your current workflows, identify bottlenecks, and define high-impact automation opportunities.',
  },
  {
    number: '02',
    title: 'Build & Integrate',
    description:
      'Our team architects and deploys tailored automations — fully integrated with your existing stack.',
  },
  {
    number: '03',
    title: 'Launch & Scale',
    description:
      'We monitor, refine, and expand your systems as your business grows — ensuring lasting ROI.',
  },
];

export default function Process() {
  return (
    <section id="process" className="border-y border-border-warm/60 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted">
            How It Works
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Simplified Process
          </h2>
        </div>

        <ol className="grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div
                  className="absolute left-8 top-16 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-border-warm to-transparent md:block"
                  aria-hidden="true"
                />
              )}
              <div className="flex flex-col">
                <span className="mb-4 text-sm font-mono text-muted">{step.number}</span>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
