import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { IconCircle } from "@/components/ui/IconCircle";

const PARTNERSHIP_VALUES = [
  {
    title: "01 — Growth built on consistency",
    description: "Sustainable success comes from steady service and earned client loyalty, not shortcuts.",
  },
  {
    title: "02 — Standards that don't bend",
    description: "Every location upholds the professionalism and pet safety that's built our name since 1979.",
  },
  {
    title: "03 — Service before everything",
    description: "Clients stay because they trust us. That has to shape every decision you make.",
  },
  {
    title: "04 — Leadership, not just ownership",
    description: "Franchise ownership means building a team and a culture, not just signing a lease.",
  },
  {
    title: "05 — A real presence in your community",
    description: "Our locations are meant to be respected local businesses, not storefronts.",
  },
  {
    title: "06 — Never standing still",
    description: "We expect our partners to keep learning and improving their operation.",
  },
];

export function FranchisePartnershipSection() {
  return (
    <section className="flex items-center justify-center px-lg py-7xl">
      <div className="flex w-full max-w-[800px] flex-col items-center gap-2xl">
        <div className="flex flex-col items-center gap-lg text-center">
          <Eyebrow>Franchise Partnership</Eyebrow>
          <h2 className="font-serif text-h2 text-text-primary">
            Not everyone is the right fit — and that&rsquo;s the point
          </h2>
          <p className="max-w-[520px] font-sans text-body-default text-text-primary">
            We&rsquo;re not looking for investors who want to buy a business
            and step back. We&rsquo;re looking for partners who want to lead
            one.
          </p>
        </div>
        <div className="flex flex-col items-start gap-sm text-left">
          <h3 className="font-serif text-h4 text-text-primary">Is Franchising Right for You?</h3>
          <p className="font-sans text-body-default text-text-primary">
            We&rsquo;re looking for motivated individuals who are passionate
            about customer service, strong leaders, financially responsible,
            ready to own and operate their own business, and committed to
            building a long-term future. You don&rsquo;t need years of
            grooming experience &mdash; we&rsquo;ll teach you our proven
            systems.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-lg">
          {PARTNERSHIP_VALUES.map((value) => (
            <div key={value.title} className="flex w-full items-center gap-lg rounded-2xl bg-surface-white p-lg">
              <IconCircle variant="star" />
              <div className="flex flex-1 flex-col items-start gap-xxs">
                <h3 className="font-serif text-h5 text-text-primary">{value.title}</h3>
                <p className="font-sans text-body-default text-text-secondary">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-lg text-center">
          <p className="max-w-[600px] font-sans text-body-default text-text-primary">
            &ldquo;Our goal was never the number of locations. It&rsquo;s a
            network of partners who become leaders in their own communities
            — while never losing the standards that got us here.&rdquo;
          </p>
          <p className="font-serif text-h5 text-text-primary">
            If that sounds like you, we&rsquo;d like to talk.
          </p>
          <Button href="/franchise/enquire">Request franchise information</Button>
        </div>
      </div>
    </section>
  );
}
