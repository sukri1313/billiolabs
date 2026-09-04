'use client';

import { FormEvent, useState } from 'react';
import { CheckIcon } from './Icons';

type FormState = 'idle' | 'submitting' | 'success';

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState('submitting');

    await new Promise((resolve) => setTimeout(resolve, 800));

    setFormState('success');
    setName('');
    setEmail('');
    setDetails('');
  }

  if (formState === 'success') {
    return (
      <section id="contact" className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-6 inline-flex rounded-full border border-border-warm bg-copper/20 p-4 text-white">
            <CheckIcon />
          </div>
          <h2 className="text-2xl font-semibold text-white">Message Received</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Thank you for reaching out. We&apos;ll review your project details and
            get back to you within one business day.
          </p>
          <button
            type="button"
            onClick={() => setFormState('idle')}
            className="mt-8 text-sm text-muted/70 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Get in Touch
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Start a Conversation
          </h2>
          <p className="mt-4 text-muted">
            Tell us about your operations and we&apos;ll outline how automation
            can help.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              className="w-full rounded-xl border border-border-warm bg-copper/10 px-4 py-3 text-sm text-white placeholder:text-muted/50 transition-colors duration-200 focus:border-muted focus:outline-none focus:ring-1 focus:ring-muted/50"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-xl border border-border-warm bg-copper/10 px-4 py-3 text-sm text-white placeholder:text-muted/50 transition-colors duration-200 focus:border-muted focus:outline-none focus:ring-1 focus:ring-muted/50"
            />
          </div>

          <div>
            <label htmlFor="details" className="mb-2 block text-sm font-medium text-white">
              Project Details
            </label>
            <textarea
              id="details"
              name="details"
              required
              rows={5}
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              placeholder="Describe your workflows, pain points, and goals..."
              className="w-full resize-none rounded-xl border border-border-warm bg-copper/10 px-4 py-3 text-sm text-white placeholder:text-muted/50 transition-colors duration-200 focus:border-muted focus:outline-none focus:ring-1 focus:ring-muted/50"
            />
          </div>

          <button
            type="submit"
            disabled={formState === 'submitting'}
            className="w-full rounded-full bg-white py-3.5 text-sm font-semibold text-espresso transition-all duration-200 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {formState === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
