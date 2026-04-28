import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";

export const metadata = {
  title: "Delivery Policy — Jahaji",
  description: "How cargo is dispatched, tracked and delivered through the Jahaji platform.",
};

const sections = [
  { h: "Scope", p: "This policy applies to all cargo bookings made through the Jahaji platform between origin and destination ports inside Bangladesh." },
  { h: "Dispatch", p: "Once a booking is confirmed, the assigned vessel is allocated within the agreed laycan window. Cargo owners receive an in-app notification with the vessel name, master's contact and estimated loading time." },
  { h: "Transit & tracking", p: "Every voyage is tracked live on the Jahaji map. Estimated time of arrival is updated continuously based on river conditions, tide and traffic." },
  { h: "Delivery confirmation", p: "Discharge is confirmed in-app by the receiving party with a digital signature and photo evidence. A delivery receipt is then issued automatically against the booking." },
  { h: "Delays", p: "Delays caused by weather, port congestion or force majeure are communicated through the app as soon as they are known. Jahaji facilitates rescheduling between the parties at no extra platform fee." },
  { h: "Disputes", p: "Any dispute about quantity, condition or timing of delivery should be raised in-app within 48 hours of discharge so our operations team can mediate." },
];

export default function DeliveryPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero kicker="Legal" title={<>Delivery <em className="text-ember">policy</em>.</>} subtitle="Last updated April 2026." />
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
