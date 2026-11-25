'use client';

import { useState, type FormEvent } from 'react';

export type ContactFormCopy = {
  name: string;
  email: string;
  phone: string;
  message: string;
  privacy: string;
  privacyLink: string;
  send: string;
  help: string;
  subject: string;
  errorRequired: string;
  errorEmail: string;
  ready: string;
};

export default function ContactForm({
  email,
  privacyHref,
  copy,
}: {
  email: string;
  privacyHref: string;
  copy: ContactFormCopy;
}) {
  const [status, setStatus] = useState<'idle' | 'error' | 'ready'>('idle');
  const [error, setError] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const sender = String(formData.get('email') ?? '').trim();

    if (!form.reportValidity()) {
      setStatus('error');
      setError(copy.errorRequired);
      return;
    }

    // Validación explícita además de la nativa, para navegadores sin soporte.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sender)) {
      setStatus('error');
      setError(copy.errorEmail);
      return;
    }

    const body = [
      `${copy.name}: ${formData.get('name') ?? ''}`,
      `${copy.email}: ${sender}`,
      `${copy.phone}: ${formData.get('phone') ?? ''}`,
      '',
      String(formData.get('message') ?? ''),
    ].join('\n');

    setStatus('ready');
    setError('');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate aria-describedby="contact-form-help">
      <div aria-live="polite" role="status" className="min-h-0">
        {status === 'error' && error ? (
          <p className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-800">{error}</p>
        ) : null}
        {status === 'ready' ? (
          <p className="rounded-lg border border-brand-teal/30 bg-brand-soft p-3 text-sm text-brand-deep">{copy.ready}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-medium">
          {copy.name}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          className="min-h-11 w-full rounded-lg border border-slate-300 bg-white px-4 py-2"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium">
          {copy.email} <span aria-hidden="true">*</span>
          <span className="sr-only">({copy.errorRequired})</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-required="true"
          className="min-h-11 w-full rounded-lg border border-slate-300 bg-white px-4 py-2"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium">
          {copy.phone}
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="min-h-11 w-full rounded-lg border border-slate-300 bg-white px-4 py-2"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium">
          {copy.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2"
        />
      </div>
      <div className="flex items-start gap-2">
        <input
          id="contact-privacy"
          name="privacy"
          type="checkbox"
          required
          aria-required="true"
          className="mt-1 h-5 w-5 rounded border-slate-400 text-brand-teal"
        />
        <label htmlFor="contact-privacy" className="text-sm text-slate-700">
          {copy.privacy}{' '}
          <a href={privacyHref} className="underline hover:text-brand-teal">
            {copy.privacyLink}
          </a>
        </label>
      </div>
      <p id="contact-form-help" className="text-sm text-slate-600">
        {copy.help}
      </p>
      <button
        type="submit"
        className="min-h-11 rounded-full bg-brand-teal px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-deep"
      >
        {copy.send}
      </button>
    </form>
  );
}
