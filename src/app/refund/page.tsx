import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";

export const metadata = {
  title: "Refund Policy — Jahaji",
  description: "When and how refunds are processed for bookings made on the Jahaji platform.",
};

const sections = [
  { h: "Eligibility", p: "Refunds apply to bookings paid through the Jahaji platform that are cancelled before loading begins, or to services that are not delivered as confirmed." },
  { h: "Cancellation by the cargo owner", p: "Cancellations made more than 48 hours before the scheduled laycan are eligible for a full refund of the platform fee. Within 48 hours, a partial refund applies as shown at the point of booking." },
  { h: "Cancellation by the operator", p: "If the assigned operator cancels for any reason, the cargo owner receives a 100% refund of all amounts paid through the platform." },
  { h: "Service failure", p: "If a voyage is not completed due to a fault attributable to the platform or the operator, the affected amount is refunded in full after review by our operations team." },
  { h: "Processing time", p: "Approved refunds are returned to the original payment method within 7–10 business days through our payment partner SSLCommerz." },
  { h: "How to request", p: "Open the booking in the Jahaji app and tap \"Request refund\", or write to support@jahajibd.com with the booking reference." },
];

export default function RefundPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero kicker="Legal" title={<>Refund <em className="text-ember">policy</em>.</>} subtitle="Last updated April 2026." />
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
