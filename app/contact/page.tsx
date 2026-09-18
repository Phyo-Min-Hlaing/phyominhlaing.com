import type { Metadata } from "next";
import { ContactForm } from "@/components/portfolio/ContactForm";
import { Reveal } from "@/components/portfolio/Reveal";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Product design roles, consulting engagements, UX audits and design system work. Tell me what you're building and where it's stuck.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <div className="shell page-head">
        <Reveal as="h1" style={{ fontSize: "var(--step-5)", lineHeight: 0.9 }}>
          <span className="mask">
            <span className="ln">Let&apos;s make</span>
          </span>
          <span className="mask mask--d1">
            <span className="ln">something useful.</span>
          </span>
        </Reveal>
      </div>
      <div className="shell section section--tight">
        <div className="contact">
          <Reveal className="contact-aside">
            <p className="hero__status" style={{ margin: 0 }}>
              <b aria-hidden="true" />
              Available for selected opportunities
            </p>
            <p className="body-copy" style={{ fontSize: 15 }}>
              Product design roles, consulting engagements, UX audits and design system work. Tell
              me what you&apos;re building and where it&apos;s stuck.
            </p>
            <div>
              <div className="contact-line">
                <span>Email</span>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
              <div className="contact-line">
                <span>LinkedIn</span>
                <a href={SITE.socials.linkedin} target="_blank" rel="noopener">
                  /in/phyominhlaing
                </a>
              </div>
              <div className="contact-line">
                <span>Behance</span>
                <a href={SITE.socials.behance} target="_blank" rel="noopener">
                  /phyominhlaing
                </a>
              </div>
              <div className="contact-line">
                <span>Pinterest</span>
                <a href={SITE.socials.pinterest} target="_blank" rel="noopener">
                  /phyo1401
                </a>
              </div>
              <div className="contact-line">
                <span>Résumé</span>
                <a href={SITE.socials.resume} target="_blank" rel="noopener">
                  Download PDF
                </a>
              </div>
              <div className="contact-line">
                <span>Based in</span>
                <span style={{ color: "var(--text)" }}>{SITE.location}</span>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </>
  );
}
