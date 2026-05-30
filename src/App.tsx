import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

/* ── Animated counter number ── */
function CounterNum({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'scale(1.35)'
    el.style.color = '#D9A273'
    const t = setTimeout(() => {
      el.style.transform = 'scale(1)'
      el.style.color = ''
    }, 200)
    return () => clearTimeout(t)
  }, [value])

  return (
    <span
      ref={ref}
      className="counter-num"
      style={{ transition: 'all 0.2s ease' }}
    >
      {value}
    </span>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* ── Header ── */}
      <header className="site-header" role="banner">
        <span className="logo-mark">Microtronic</span>
        <span className="badge">NEW STANDARD</span>
      </header>

      {/* ── Hero section ── */}
      <main id="main-content">
        <section id="center" aria-label="Hero">
          {/* Hero grid: left text / right image */}
          <div className="hero-grid">
            <div className="hero-left animate-in-1">
              <span className="hero-day-label">Day 25 — 2026.05.30</span>

              <div className="hero-title-block">
                <h1>SOLID<br />FOUNDATION</h1>
                <p className="hero-subtitle">
                  A robust and clear design framework.
                </p>
              </div>

              <div className="hero-actions animate-in-2">
                <button
                  type="button"
                  className="btn-primary"
                  aria-label="View Structure"
                >
                  VIEW STRUCTURE
                </button>

                <button
                  type="button"
                  className="counter"
                  onClick={() => setCount((c) => c + 1)}
                  aria-label={`Counter: ${count}`}
                >
                  COUNT_
                  <CounterNum value={count} />
                </button>
              </div>
            </div>

            <div className="hero-right animate-in-3" aria-hidden="true">
              <div className="hero-image-cluster">
                <img
                  src={heroImg}
                  className="base"
                  width="140"
                  height="147"
                  alt="Concrete Canvas hero illustration"
                />
                <img src={reactLogo} className="framework" alt="React logo" />
                <img src={viteLogo} className="vite" alt="Vite logo" />
              </div>
              <span className="hero-accent-label">Concrete Canvas</span>
            </div>
          </div>

          {/* Stats strip */}
          <div className="stats-strip animate-in-4" role="list" aria-label="Project stats">
            <div className="stat-cell" role="listitem">
              <div className="stat-label">Theme</div>
              <div className="stat-value">BRUTALIST</div>
            </div>
            <div className="stat-cell" role="listitem">
              <div className="stat-label">Day</div>
              <div className="stat-value accent">025</div>
            </div>
            <div className="stat-cell" role="listitem">
              <div className="stat-label">Version</div>
              <div className="stat-value primary">1.25.0</div>
            </div>
          </div>
        </section>

        {/* ── Documentation + Social ── */}
        <section id="next-steps" aria-label="Resources and community">
          <div id="docs">
            <div className="section-icon-wrap" aria-hidden="true">
              <svg className="icon" role="presentation">
                <use href="/icons.svg#documentation-icon" />
              </svg>
            </div>
            <h2>Documentation</h2>
            <p>Your questions, answered</p>
            <ul>
              <li>
                <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                  <img className="logo" src={viteLogo} alt="" />
                  Explore Vite
                </a>
              </li>
              <li>
                <a href="https://react.dev/" target="_blank" rel="noreferrer">
                  <img className="button-icon" src={reactLogo} alt="" />
                  Learn More
                </a>
              </li>
            </ul>
          </div>

          <div id="social">
            <div className="section-icon-wrap" aria-hidden="true">
              <svg className="icon" role="presentation">
                <use href="/icons.svg#social-icon" />
              </svg>
            </div>
            <h2>Connect With Us</h2>
            <p>Join the Vite X-Template Community</p>
            <ul>
              <li>
                <a href="https://github.com/Ex2-Axon/x-template" target="_blank" rel="noreferrer">
                  <svg className="button-icon" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#github-icon" />
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://discord.gg/8Zeq8VCU" target="_blank" rel="noreferrer">
                  <svg className="button-icon" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#discord-icon" />
                  </svg>
                  Discord
                </a>
              </li>
              <li>
                <a href="https://x.com/Microtronic2" target="_blank" rel="noreferrer">
                  <svg className="button-icon" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#x-icon" />
                  </svg>
                  X.com
                </a>
              </li>
              <li>
                <a href="https://bsky.app/profile/microtronic.bsky.social" target="_blank" rel="noreferrer">
                  <svg className="button-icon" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#bluesky-icon" />
                  </svg>
                  Bluesky
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer role="contentinfo">
        <span className="footer-copy">© 2026 Microtronic. All rights reserved.</span>
        <span className="footer-meta">Concrete Canvas — Day 25</span>
      </footer>
    </>
  )
}

export default App
