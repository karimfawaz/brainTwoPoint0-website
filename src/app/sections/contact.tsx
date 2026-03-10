'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Reveal } from './reveal'

type Status = 'pending' | 'ok' | 'error'

const helpOptions = ['General', 'Enterprise', 'Gotcha', 'PLAYBACK', 'Content', 'CoPilot']

export default function Contact() {
  const [status, setStatus] = useState<Status | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [helpType, setHelpType] = useState('General')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      setStatus('pending')
      setError(null)
      const formData = new FormData(event.currentTarget)
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      })
      if (res.status === 200) {
        setStatus('ok')
      } else {
        setStatus('error')
        setError(`${res.status} ${res.statusText}`)
      }
    } catch (e) {
      setStatus('error')
      setError(`${e}`)
    }
  }

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-b2-teal/20 to-transparent" />

      <div className="max-w-2xl mx-auto">
        <Reveal>
          <p className="text-b2-teal/60 text-xs tracking-[0.4em] uppercase mb-4 text-center">
            Get in Touch
          </p>
          <p className="text-b2-muted text-center mb-12">
            Reach out and let us know how we can help.
          </p>
        </Reveal>

        {/* Status messages */}
        {status === 'ok' && (
          <div className="mb-8 p-4 rounded-lg bg-b2-teal/10 border border-b2-teal/20 text-center">
            <p className="text-b2-teal text-sm">
              Thank you for reaching out. We&rsquo;ll be in touch soon.
            </p>
          </div>
        )}
        {status === 'error' && (
          <div className="mb-8 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-center">
            <p className="text-red-400 text-sm">Something went wrong. {error}</p>
          </div>
        )}

        <Reveal delay={0.2}>
          <form
            netlify-honeypot="bot-field"
            name="contact"
            onSubmit={handleSubmit}
            action="/"
            className="space-y-6"
          >
            <p className="hidden">
              <label>
                Don&rsquo;t fill this out if you&rsquo;re human: <input name="bot-field" />
              </label>
            </p>
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-b2-muted text-xs tracking-wider uppercase block mb-2"
                >
                  Name
                </label>
                <Input
                  required
                  type="text"
                  name="name"
                  id="name"
                  className="bg-b2-dark/50 border-white/10 text-b2-light placeholder:text-b2-muted/40 focus:border-b2-teal/40"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-b2-muted text-xs tracking-wider uppercase block mb-2"
                >
                  Email
                </label>
                <Input
                  required
                  type="email"
                  name="email"
                  id="email"
                  className="bg-b2-dark/50 border-white/10 text-b2-light placeholder:text-b2-muted/40 focus:border-b2-teal/40"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label className="text-b2-muted text-xs tracking-wider uppercase block mb-2">
                How can we help?
              </label>
              <input type="hidden" name="helpType" value={helpType} />
              <Select value={helpType} onValueChange={(v) => v && setHelpType(v)}>
                <SelectTrigger className="w-full h-10 bg-b2-dark/50 border-white/10 text-b2-light focus:border-b2-teal/40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-b2-dark border-white/10 text-b2-light">
                  {helpOptions.map((option) => (
                    <SelectItem
                      key={option}
                      value={option}
                      className="!text-b2-light focus:!bg-white/10 focus:!text-b2-light"
                    >
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-b2-muted text-xs tracking-wider uppercase block mb-2"
              >
                Message
              </label>
              <Textarea
                name="message"
                id="message"
                rows={4}
                className="bg-b2-dark/50 border-white/10 text-b2-light placeholder:text-b2-muted/40 focus:border-b2-teal/40 resize-y"
                placeholder="Tell us about your project..."
              />
            </div>

            <Button
              type="submit"
              disabled={status === 'pending'}
              className="w-full bg-b2-teal text-b2-black hover:bg-b2-teal/80 tracking-wider uppercase text-sm py-6 font-semibold transition-all duration-300"
            >
              {status === 'pending' ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
