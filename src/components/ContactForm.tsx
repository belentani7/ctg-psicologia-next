'use client';

import type { FormEvent } from 'react';

export type ContactFormCopy = {
  name: string;
  email: string;
  phone: string;
  message: string;
  privacy: string;
  send: string;
  help: string;
  subject: string;
};

export default function ContactForm({ email, copy }: { email: string; copy: ContactFormCopy }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = [
      `${copy.name}: ${formData.get('name') ?? ''}`,
      `${copy.email}: ${formData.get('email') ?? ''}`,
      `${copy.phone}: ${formData.get('phone') ?? ''}`,
      `${copy.message}: ${formData.get('message') ?? ''}`,
    ].join('\n');

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} aria-describedby="contact-form-help">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium mb-1">{copy.name}</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" className="min-h-11 w-full rounded-lg border border-slate-300 px-4 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal" />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium mb-1">{copy.email} *</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required className="min-h-11 w-full rounded-lg border border-slate-300 px-4 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal" />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium mb-1">{copy.phone}</label>
        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" className="min-h-11 w-full rounded-lg border border-slate-300 px-4 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal" />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium mb-1">{copy.message}</label>
        <textarea id="contact-message" name="message" rows={5} className="w-full rounded-lg border border-slate-300 px-4 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal" />
      </div>
      <label htmlFor="contact-privacy" className="flex min-h-11 items-center gap-2 text-sm text-slate-600">
        <input id="contact-privacy" name="privacy" type="checkbox" required className="h-5 w-5 rounded border-slate-300 text-brand-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal" />
        <span>{copy.privacy}</span>
      </label>
      <p id="contact-form-help" className="text-sm text-slate-500">{copy.help}</p>
      <button type="submit" className="min-h-11 rounded-full bg-brand-teal px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal">
        {copy.send}
      </button>
    </form>
  );
}
