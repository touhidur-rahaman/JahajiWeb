import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";

export const metadata = {
  title: "Privacy Policy — Jahaji",
  description: "How Jahaji collects, uses and protects your personal and operational data.",
};

const sections = [
  { h: "What we collect", p: "Account details, vessel and voyage data, location pings from tracked ships, and payment metadata necessary to operate the service." },
  { h: "How we use it", p: "To provide bookings, live tracking, settlements and customer support — and to improve the platform over time." },
  { h: "Sharing", p: "We share data with the parties to a transaction (e.g. cargo owner ↔ operator) and with verified payment and SMS partners. We never sell your data." },
  { h: "Retention", p: "Operational records are kept for as long as required by law and for legitimate business purposes. You can request deletion of personal data at any time." },
  { h: "Security", p: "Data is encrypted in transit and at rest. Access is limited to authorised personnel with audit logging." },
  { h: "Your rights", p: "You may access, correct or export your personal data, or ask us to delete it, by writing to privacy@jahajibd.com." },
];

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero kicker="Legal" title={<>Privacy <em className="text-ember">policy</em>.</>} subtitle="Last updated April 2026." />
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
