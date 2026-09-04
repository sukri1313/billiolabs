export default function Hero() {
  return (
    <section className="relative px-6 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 left-[15%] h-[28rem] w-[28rem] rounded-full bg-copper opacity-20 blur-3xl blob-float-1" />
        <div className="absolute top-1/4 -right-16 h-80 w-80 rounded-full bg-copper opacity-[0.15] blur-3xl blob-float-2" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-copper opacity-10 blur-3xl blob-float-3" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-muted">
          AI Automation Agency
        </p>

        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          AI-Powered Efficiency.
          <br />
          <span className="text-muted">Scalable Results.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          We design custom automated workflows that eliminate repetitive work,
          reclaim your team&apos;s time, and accelerate sustainable growth — so
          you can focus on what matters most.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-espresso transition-all duration-200 hover:bg-neutral-200 hover:shadow-lg hover:shadow-copper/20"
          >
            Begin Your Audit
          </a>
          <a
            href="#services"
            className="inline-flex items-center rounded-full border border-border-warm px-8 py-3.5 text-sm font-medium text-muted transition-all duration-200 hover:border-muted hover:text-white"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
