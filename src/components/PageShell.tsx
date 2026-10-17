import Navbar from "./Navbar";
import Footer from "./Footer";
import Reveal from "./Reveal";

// Shared frame for inner pages: header, a centered showcase heading
// (kicker, two-tone title, intro), the page body, and the footer.
export default function PageShell({
  kicker,
  title,
  dim,
  intro,
  children,
}: {
  kicker: string;
  title: React.ReactNode;
  dim?: React.ReactNode;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Reveal />
      <main className="kb flex-1">
        <section className="kb-ph">
          <div className="kb-floor" aria-hidden="true" />
          <div className="kb-container">
            <p className="kb-tag rv">{kicker}</p>
            <h1 className="kb-display rv">
              {title}
              {dim && <span className="kb-dim">{dim}</span>}
            </h1>
            {intro && <p className="kb-sub rv">{intro}</p>}
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </>
  );
}
