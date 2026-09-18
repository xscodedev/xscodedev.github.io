import { useRef, useState, type FormEvent, type MouseEvent } from 'react'
import { ArrowIcon } from './ArrowIcon'

const CONTACT_EMAIL = 'hello@xscodedev.com'
// Static site, no backend: messages post to a hosted form service (Formspree).
// The form id is public, not a secret. Swap for a dedicated xscodedev form when ready.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mwvywobk'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Fields = 'name' | 'email' | 'subject' | 'message'
type Values = Record<Fields, string>

const EMPTY: Values = { name: '', email: '', subject: '', message: '' }

function validate(v: Values): Record<Fields, string> {
  return {
    name: v.name.trim() ? '' : 'Name is required.',
    email: EMAIL_RE.test(v.email.trim()) ? '' : 'Enter a valid email address.',
    subject: v.subject.trim() ? '' : 'Subject is required.',
    message: v.message.trim() ? '' : 'Message is required.',
  }
}

export function Contact() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [values, setValues] = useState<Values>(EMPTY)
  const [touched, setTouched] = useState<Record<Fields, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false,
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const errors = validate(values)

  function reset() {
    setValues(EMPTY)
    setTouched({ name: false, email: false, subject: false, message: false })
    setSuccess('')
    setError('')
  }

  function open() {
    reset()
    dialogRef.current?.showModal()
  }

  function close() {
    if (submitting) return
    dialogRef.current?.close()
  }

  function onBackdropClick(e: MouseEvent<HTMLDialogElement>) {
    if (e.target === dialogRef.current) close()
  }

  function set(field: Fields, value: string) {
    setValues((v) => ({ ...v, [field]: value }))
  }

  function markTouched(field: Fields) {
    setTouched((t) => ({ ...t, [field]: true }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSuccess('')
    setError('')

    const hasError = Object.values(errors).some(Boolean)
    if (hasError) {
      setTouched({ name: true, email: true, subject: true, message: true })
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, _replyto: values.email }),
      })
      if (!res.ok) throw new Error('Request failed')
      setSuccess('Your message was sent. We will get back to you soon.')
      setValues(EMPTY)
      setTouched({ name: false, email: false, subject: false, message: false })
    } catch {
      setError('Something went wrong. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  const showError = (f: Fields) => touched[f] && errors[f]

  return (
    <section className="contact" id="contact">
      <div className="container">
        <span className="eyebrow">
          <span className="dot" />
          ACCEPTING NEW ENGAGEMENTS
        </span>
        <h2 style={{ marginTop: 20 }}>Have a system that needs building?</h2>
        <p>
          Tell us about it. We'll come back with honest scope, real architecture
          notes, and whether we're the right fit.
        </p>
        <div className="contact-actions">
          <button type="button" className="btn btn-primary" onClick={open}>
            Send us a message
            <ArrowIcon />
          </button>
          <a className="btn btn-ghost" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </div>

        <dialog
          ref={dialogRef}
          className="contact-modal"
          aria-labelledby="contact-modal-title"
          onClick={onBackdropClick}
          onCancel={(e) => {
            if (submitting) e.preventDefault()
          }}
        >
          <button
            type="button"
            className="contact-modal-close"
            onClick={close}
            disabled={submitting}
            aria-label="Close contact form"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="contact-modal-head">
            <span className="eyebrow">Contact</span>
            <h2 id="contact-modal-title">Send us a message</h2>
            <p className="contact-modal-lede">
              Have a question, opportunity, collaboration idea, or technical
              discussion in mind? Send us a message and we'll get back to you.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-field">
              <label htmlFor="cf-name">Name</label>
              <input
                id="cf-name"
                type="text"
                autoComplete="name"
                maxLength={100}
                value={values.name}
                onChange={(e) => set('name', e.target.value)}
                onBlur={() => markTouched('name')}
                aria-invalid={showError('name') ? true : undefined}
              />
              {showError('name') && <p className="contact-error">{errors.name}</p>}
            </div>

            <div className="contact-field">
              <label htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                type="email"
                autoComplete="email"
                inputMode="email"
                maxLength={150}
                value={values.email}
                onChange={(e) => set('email', e.target.value)}
                onBlur={() => markTouched('email')}
                aria-invalid={showError('email') ? true : undefined}
              />
              {showError('email') && <p className="contact-error">{errors.email}</p>}
            </div>

            <div className="contact-field">
              <label htmlFor="cf-subject">Subject</label>
              <input
                id="cf-subject"
                type="text"
                maxLength={150}
                value={values.subject}
                onChange={(e) => set('subject', e.target.value)}
                onBlur={() => markTouched('subject')}
                aria-invalid={showError('subject') ? true : undefined}
              />
              {showError('subject') && (
                <p className="contact-error">{errors.subject}</p>
              )}
            </div>

            <div className="contact-field">
              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                rows={4}
                maxLength={2000}
                value={values.message}
                onChange={(e) => set('message', e.target.value)}
                onBlur={() => markTouched('message')}
                aria-invalid={showError('message') ? true : undefined}
              />
              {showError('message') && (
                <p className="contact-error">{errors.message}</p>
              )}
            </div>

            {success && (
              <div className="contact-status contact-status-success" role="status">
                {success}
              </div>
            )}
            {error && (
              <div className="contact-status contact-status-error" role="alert">
                {error}
              </div>
            )}

            <div className="contact-form-actions">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={close}
                disabled={submitting}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? 'Sending…' : 'Send message'}
              </button>
            </div>
          </form>
        </dialog>
      </div>
    </section>
  )
}
