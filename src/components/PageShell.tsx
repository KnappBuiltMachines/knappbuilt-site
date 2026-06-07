import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageShell({
  kicker,
  title,
  intro,
  logo = "machines",
  footer = "machines",
  children,
}: {
  kicker: string;
  title: React.ReactNode;
  intro?: string;
  logo?: "machines" | "stack";
  footer?: "machines" | "stack";
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar logo={logo} />
      <main className="flex-1 bg-blueprint">
        <section className="border-b border-ink-700 px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">{kicker}</p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">{title}</h1>
            {intro && <p className="mt-4 max-w-2xl text-zinc-400">{intro}</p>}
          </div>
        </section>
        <section className="px-5 py-14">
          <div className="mx-auto max-w-6xl">{children}</div>
        </section>
      </main>
      <Footer variant={footer} />
    </>
  );
}
