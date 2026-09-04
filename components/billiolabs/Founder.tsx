export default function Founder() {
  return (
    <section id="founder" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Behind Billiolabs
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The Automation Architect
          </h2>
        </div>

        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">
          <div className="relative shrink-0">
            <div className="h-40 w-40 rounded-full border border-border-warm p-1">
              <img
                src="/founder.png"
                alt="Founder of Billiolabs"
                className="object-cover rounded-full w-full h-full"
              />
            </div>
          </div>

          <div className="max-w-xl text-center md:text-left">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Billiolabs was founded on a simple belief: operational excellence
              shouldn&apos;t require operational overhead. With a background in
              scaling high-growth teams, our founder architects automation systems
              that turn complexity into clarity — helping businesses reclaim
              hundreds of hours and redirect that energy toward what truly drives
              growth.
            </p>
            <p className="mt-6 text-sm text-muted/70">
              Every engagement starts with understanding your operations deeply,
              then building systems that work quietly in the background while you
              scale confidently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
