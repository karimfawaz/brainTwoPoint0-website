import { ImageResponse } from 'next/og'

export const alt = 'BRAIN 2.0 — Driven by Values, Powered by Intellect.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          backgroundColor: '#101010',
          backgroundImage:
            'radial-gradient(circle at 85% 15%, rgba(184,204,184,0.14) 0%, rgba(184,204,184,0.04) 30%, transparent 55%)',
          color: '#ebf2eb',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#b8ccb8',
            opacity: 0.7,
            fontSize: 18,
          }}
        >
          BRAIN 2.0
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              color: 'rgba(235,242,235,0.35)',
              fontWeight: 200,
            }}
          >
            DRIVEN BY
          </div>
          <div
            style={{
              fontSize: 132,
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              color: '#ebf2eb',
              fontWeight: 900,
              marginBottom: 24,
            }}
          >
            VALUES
          </div>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              color: 'rgba(235,242,235,0.35)',
              fontWeight: 200,
            }}
          >
            POWERED BY
          </div>
          <div
            style={{
              fontSize: 132,
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              color: '#b8ccb8',
              fontWeight: 900,
            }}
          >
            INTELLECT
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 16,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(154,154,154,0.9)',
          }}
        >
          <span>Est. 2017 · Global</span>
          <span style={{ color: '#b8ccb8' }}>braintwopoint0.com</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
