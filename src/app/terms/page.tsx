import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";

export const metadata = {
  title: "Terms of Use — Jahaji",
  description: "The terms governing your use of the Jahaji platform and mobile app.",
};

const sections = [
  { h: "1. Acceptance", p: "By using the Jahaji app or website, you agree to these terms. If you do not agree, please do not use the service." },
  { h: "2. The service", p: "Jahaji provides a digital platform connecting cargo owners, ship operators and crews across inland Bangladesh." },
  { h: "3. Accounts", p: "You are responsible for keeping your credentials secure and for all activity carried out under your account." },
  { h: "4. Bookings", p: "Bookings made through the platform are binding once confirmed. Cancellation terms are shown at the point of booking." },
  { h: "5. Payments", p: "All fees are displayed in BDT and processed through our verified payment partners. Receipts are stored against your account." },
  { h: "6. Liability", p: "Jahaji facilitates connections between parties but is not the carrier. Liability for cargo and voyage operations rests with the contracting parties." },
  { h: "7. Changes", p: "We may update these terms from time to time. Material changes will be communicated through the app." },
];

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero kicker="Legal" title={<>Terms of <em className="text-ember">use</em>.</>} subtitle="Last updated April 2026." />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-2xl md:text-3xl">{s.h}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
