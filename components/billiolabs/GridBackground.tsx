export default function GridBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-espresso" />

      <div className="absolute inset-[-40%] h-[180%] w-[180%] grid-bg-pattern grid-bg-drift opacity-70" />

      <div className="absolute inset-0 grid-bg-vignette" />
    </div>
  );
}
