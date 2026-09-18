"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const PROJECT_TYPES = [
  "Product design",
  "Mobile app",
  "Web product",
  "UX audit",
  "Design system",
  "Consulting",
  "Other",
];

const BUDGETS = ["Not sure yet", "Under $5k", "$5k — $15k", "$15k — $40k", "$40k+", "Full-time role"];

interface Errors {
  name?: string;
  email?: string;
  type?: string;
  message?: string;
}

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = (form: HTMLFormElement): Errors => {
    const data = new FormData(form);
    const next: Errors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const type = String(data.get("type") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name) next.name = "Add your name so I know who I'm replying to.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Check the email address — it needs an @ and a domain.";
    if (!type) next.type = "Pick the closest match — it helps me scope a reply.";
    if (message.length < 2) next.message = "A sentence or two is enough to start.";
    return next;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSending(true);
    // Demo form: simulate send, then show success (email works today).
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 900);
  };

  if (sent) {
    return (
      <div className="form-success" role="status">
        <svg className="tick-svg" width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
          <circle cx="28" cy="28" r="26" stroke="var(--c3)" strokeWidth="2" />
          <path d="M18 29l7 7 13-15" stroke="var(--c3)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3>Message ready to send</h3>
        <p className="body-copy" style={{ textAlign: "center" }}>
          This demo form doesn&apos;t send anywhere yet — email works today and I reply within a
          couple of days.
        </p>
        <a className="btn btn--primary" href="mailto:phyo1401@gmail.com">
          <span>Email instead</span>
        </a>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <div className={cn("field", errors.name && "is-bad")}>
          <label htmlFor="f-name">Name</label>
          <input id="f-name" name="name" type="text" autoComplete="name" aria-describedby="e-name" />
          <span className="field__err" id="e-name">
            {errors.name ?? "Add your name so I know who I'm replying to."}
          </span>
        </div>
        <div className={cn("field", errors.email && "is-bad")}>
          <label htmlFor="f-email">Email</label>
          <input id="f-email" name="email" type="email" autoComplete="email" aria-describedby="e-email" />
          <span className="field__err" id="e-email">
            {errors.email ?? "Check the email address — it needs an @ and a domain."}
          </span>
        </div>
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="f-company">
            Company <span style={{ textTransform: "none" }}>(optional)</span>
          </label>
          <input id="f-company" name="company" type="text" autoComplete="organization" />
        </div>
        <div className={cn("field", errors.type && "is-bad")}>
          <label htmlFor="f-type">Project type</label>
          <span className="field__select">
            <select id="f-type" name="type" aria-describedby="e-type" defaultValue="">
              <option value="">Select one</option>
              {PROJECT_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M3 5l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="field__err" id="e-type">
            {errors.type ?? "Pick the closest match — it helps me scope a reply."}
          </span>
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-budget">
          Budget range <span style={{ textTransform: "none" }}>(optional)</span>
        </label>
        <span className="field__select">
          <select id="f-budget" name="budget" defaultValue="">
            {BUDGETS.map((b, i) => (
              <option key={b} value={i === 0 ? "" : b}>
                {b}
              </option>
            ))}
          </select>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M3 5l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className={cn("field", errors.message && "is-bad")}>
        <label htmlFor="f-msg">Message</label>
        <textarea
          id="f-msg"
          name="message"
          aria-describedby="e-msg"
          placeholder="What are you building, and what's getting in the way?"
        />
        <span className="field__err" id="e-msg">
          {errors.message ?? "A sentence or two is enough to start."}
        </span>
      </div>
      <button
        className={cn("btn btn--primary submit", sending && "is-sending")}
        type="submit"
        disabled={sending}
        data-magnetic
      >
        <span>{sending ? "Sending…" : "Send message"}</span>
      </button>
      <p className="mono" style={{ fontSize: 11 }}>
        This demo form doesn&apos;t send anywhere yet. Email works today.
      </p>
    </form>
  );
}
