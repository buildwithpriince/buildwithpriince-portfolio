import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './cleanup.css'

type Project = { name: string; file: string; summary: string; why: string; proof: string; stack: string; finding: string; action: string; url: string; visual: 'code' | 'risk' | 'ledger' }
const projects: Project[] = [
  { name:'CodeAutopsy', file:'CASE 001', summary:'AI-powered code review that finds bugs, security holes, complexity issues, and code smells—then explains the fix.', why:'A second pair of eyes before code reaches production.', proof:'GitHub import · PR review mode · 9 languages · health score', stack:'Node · TypeScript · Gemini API', finding:'HEALTH SCORE 76 — 4 BUGS / 11 CODE SMELLS', action:'OPEN AUTOPSY', url:'https://code-autopsy-two.vercel.app/', visual:'code' },
  { name:'Clarity', file:'CASE 002', summary:'An explainable credit and micro-investment advisor for people whose everyday financial discipline is invisible to traditional bureaus.', why:'Credit intelligence for the financial behavior bureaus overlook.', proof:'Behavioral signals · explainable scoring · goal-based investing', stack:'React · FastAPI · MongoDB', finding:'RISK READ: MODERATE — START SMALL / BUILD SIGNAL', action:'START ASSESSMENT', url:'https://clarity-orcin-ten.vercel.app/', visual:'risk' },
  { name:'Prism', file:'CASE 003', summary:'A cross-document consistency checker for VC diligence that traces every figure and flags where a startup’s story stops adding up.', why:'An auditor’s red pen for venture diligence.', proof:'Confidence scores · source references · Top 44 / 160 at TetraTHON 2026', stack:'React · FastAPI · Gemini API', finding:'CONSISTENCY 92% — REVENUE FIGURE DRIFTS', action:'RUN DILIGENCE', url:'https://tetra-020.vercel.app/', visual:'ledger' },
]

function ProjectVisual({ type, open }: { type: Project['visual']; open: boolean }) {
  if (type === 'code') return <div className="visual visual-code"><div className="code-chrome"><i /><i /><i /><span>review.ts <b>·</b> pull request #18</span></div><div className="code-editor"><code><b>08</b> <em>const</em> repo = request.body.repo<br /><b>09</b> <mark>await findHiddenBugs(repo)</mark></code><span className="code-cursor" /></div><div className="code-alert"><strong>{open ? '1 ISSUE FOUND' : 'ANALYSIS READY'}</strong><span>unsanitized input</span></div><div className="code-meta"><span>GEMINI REVIEW</span><span>{open ? '76 / 100' : 'SCAN ID 018'}</span></div><div className="health-track"><i style={{ width: open ? '76%' : '42%' }} /></div></div>
  if (type === 'risk') return <div className="visual visual-risk"><div className="credit-header"><span>CLARITY CREDIT READ</span><strong>{open ? 'ASSESSED' : 'PREVIEW'}</strong></div><div className="credit-score-row"><div className="credit-score-ring"><b>{open ? '756' : '— —'}</b><small>/ 900</small></div><div className="credit-status"><strong>{open ? 'GOOD SIGNAL' : 'AWAITING SIGNAL'}</strong><span>behavior, made visible</span></div></div><div className="credit-track"><i style={{ width: open ? '84%' : '38%' }} /></div><div className="credit-metrics"><span>PAYMENTS <b>ON TIME</b></span><span>UPI <b>STEADY</b></span><span>RISK <b>MODERATE</b></span></div></div>
  return <div className="visual visual-ledger"><div className="ledger-heading"><span>CROSS-CHECK MATRIX</span><strong>{open ? '2 FLAGS' : 'READY'}</strong></div><div className="ledger-labels"><span>METRIC</span><span>DECK</span><span>MIS</span><span>READ</span></div><div className="ledger-row"><b>Revenue FY24</b><span>₹2.0 Cr</span><span>₹1.6 Cr</span><i className={open ? 'signal' : ''}>{open ? '≠' : '—'}</i></div><div className="ledger-row"><b>Gross margin</b><span>38%</span><span>37.8%</span><i>{open ? '=' : '—'}</i></div><div className="ledger-row"><b>Customers</b><span>4,000</span><span>2,100</span><i className={open ? 'signal' : ''}>{open ? '≠' : '—'}</i></div><div className="ledger-stamp">FOLLOW UP</div></div>
}

function ProjectInstrument({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLElement>(null)
  return <article ref={ref} className={`atlas-card card-${project.visual} ${open ? 'is-open' : ''}`} onClick={() => setOpen(value => !value)}><span className="card-scan" aria-hidden="true" /><div className="card-top"><span>{project.file} / {project.stack}</span><a className="card-action" href={project.url} target="_blank" rel="noreferrer" onClick={event => event.stopPropagation()}>{project.action} <b>↗</b></a></div><div className="card-main"><div className="card-copy"><p className="card-kicker">{index === 0 ? 'HIDDEN IN CODE' : index === 1 ? 'HIDDEN IN DATA' : 'HIDDEN BETWEEN DOCS'}</p><h3>{project.name}</h3><p className="card-why">{project.why}</p><p>{project.summary}</p><span className="card-proof">{project.proof}</span><span className="card-stack">{project.stack}</span></div>{project.visual !== 'risk' && <ProjectVisual type={project.visual} open={open} />}</div><div className="card-finding"><small>DIAGNOSIS COMPLETE</small><strong>{project.finding}</strong></div></article>
}

function updatePortraitHover(event: MouseEvent<HTMLDivElement>) {
  const bounds = event.currentTarget.getBoundingClientRect()
  const x = Math.max(0, Math.min(100, ((event.clientX - bounds.left) / bounds.width) * 100))
  const y = Math.max(0, Math.min(100, ((event.clientY - bounds.top) / bounds.height) * 100))
  event.currentTarget.style.setProperty('--hover-x', `${x}%`)
  event.currentTarget.style.setProperty('--hover-y', `${y}%`)
}

function ContactSection() {
  return <section className="connect-atlas" id="connect"><div><p className="section-kicker">CHANNELS / OPEN ENDPOINTS</p><h2>Send a<br /><em>signal.</em></h2><p>Open to internships and useful problems.</p></div><div className="endpoint-grid"><a href="https://www.linkedin.com/in/prince-agrawal-63aa36361/" target="_blank" rel="noreferrer"><small>01</small><strong>LinkedIn</strong><span>prince-agrawal-63aa36361 ↗</span></a><a href="https://www.instagram.com/heyyitsprince" target="_blank" rel="noreferrer"><small>02</small><strong>Instagram</strong><span>heyyitsprince ↗</span></a><a href="https://wa.me/919913522411" target="_blank" rel="noreferrer"><small>03</small><strong>WhatsApp</strong><span>wa.me/919913522411 ↗</span></a><a href="mailto:prince.agrawal2245@gmail.com"><small>04</small><strong>Email</strong><span>prince.agrawal2245@gmail.com ↗</span></a><a href="https://github.com/buildwithpriince" target="_blank" rel="noreferrer"><small>05</small><strong>GitHub</strong><span>github.com/buildwithpriince ↗</span></a><a href="https://vsco.co/priiince07/gallery" target="_blank" rel="noreferrer"><small>06</small><strong>VSCO</strong><span>vsco.co/priiince07/gallery ↗</span></a></div></section>
}

function OrbitControl() {
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    const canvas = document.querySelector('.knowledge-canvas')
    const control = document.querySelector('.knowledge-orbit-control')
    if (canvas && control && control.parentElement !== canvas) canvas.prepend(control)
    canvas?.classList.toggle('is-paused', paused)
  }, [paused])
  return <button className="knowledge-orbit-control" type="button" onClick={() => setPaused(value => !value)} aria-pressed={paused}>{paused ? 'RESUME ROTATION' : 'PAUSE ROTATION'} <b>{paused ? '▶' : 'Ⅱ'}</b></button>
}

const navLinks: { href: string; label: string }[] = [
  { href: '#work', label: 'WORK' },
  { href: '#achievements', label: 'ACHIEVEMENTS' },
  { href: '#knowledge', label: 'WHAT I BRING TO THE TABLE' },
  { href: '#about', label: 'ABOUT' },
  { href: '#connect', label: 'CONNECT' },
]

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!menuOpen) return
    const onOutside = (event: PointerEvent) => { if (navRef.current && !navRef.current.contains(event.target as Node)) setMenuOpen(false) }
    document.addEventListener('pointerdown', onOutside)
    return () => document.removeEventListener('pointerdown', onOutside)
  }, [menuOpen])
  return <header ref={navRef} className={`atlas-nav ${menuOpen ? 'menu-open' : ''}`}>
    <a href="#top" className="atlas-logo"><span>PA</span><small>Prince's Portfolio</small></a>
    <nav className="nav-links">{navLinks.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
    <div className="nav-light"><i /> AVAILABLE</div>
    <button type="button" className="nav-menu-toggle" aria-expanded={menuOpen} aria-label="Toggle navigation menu" onClick={() => setMenuOpen(value => !value)}>
      <span /><span /><span />
    </button>
    {menuOpen && <nav className="nav-menu-dropdown">
      {navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
      <span className="nav-menu-status"><i /> AVAILABLE FOR WORK</span>
    </nav>}
  </header>
}

function App() {
  return <main><OrbitControl />
    <NavBar />
    <section className="atlas-hero" id="top"><div className="hero-label">AVAILABLE FOR FULL-STACK / AI PRODUCT WORK<br />OPEN TO INTERNSHIPS · 2026</div><div className="hero-name" aria-hidden="true">Prince<br /><span>Agrawal</span></div><div className="hero-device"><div className="device-frame" aria-label="Portrait hover reveals childhood photo"><div className="device-corners" /><div className="photo-hover-target" onMouseMove={updatePortraitHover} onMouseLeave={event => { event.currentTarget.style.removeProperty('--hover-x'); event.currentTarget.style.removeProperty('--hover-y') }}><img className="portrait-image" src="/prince-portrait.jpg" alt="Prince Agrawal" /><img className="childhood-hover-image" src="/childhood-photo-hd.jpg" alt="Childhood photo of Prince Agrawal" /></div><span className="photo-placeholder">PHOTO — swap in later</span><i className="device-scan" /></div><div className="device-readout"><small>SUBJECT / 001</small><strong>PRINCE AGRAWAL</strong><span><i /> AVAILABLE</span></div></div><div className="hero-copy"><h1><span>I’m Prince Agrawal</span><span><em>a full-stack builder</em></span><span>shipping AI-powered</span><span>products.</span></h1><p>React, TypeScript, Node, FastAPI and Gemini-powered tools — turning real problems into useful products.</p><a href="#work">SEE THE WORK <b>↓</b></a></div><div className="hero-foot"><span>BUILD · TEST · SHIP</span><span>SCROLL TO EXAMINE</span></div></section>
    <section className="work-atlas" id="work"><div className="work-intro"><div><p className="section-kicker">SELECTED WORK / 03 INSTRUMENTS</p><h2>I build useful<br />things for the <em>curious.</em></h2></div><p>Tools for debugging code, making financial decisions clearer, and solving the messy problems that sit between people and systems.</p></div><div className="atlas-grid">{projects.map((project, index) => <ProjectInstrument key={project.name} project={project} index={index} />)}</div></section>
    <section className="about-atlas" id="about"><div className="about-index">02</div><div className="about-copy"><p className="section-kicker">STATUS / THE OPERATOR</p><h2>Curious about<br /><em>the under hood.</em></h2><p>I am a Second-year CSE student at MSU Baroda, shipping full-stack + AI-powered tools — CodeAutopsy, Clarity, Prism — and just getting started on DSA in C++, building the habit one problem at a time. Off-screen: badminton, GTA V, and tracking the market just to test my own theories. Outside code, I run marketing and strategy for Agrawal Matching Centre, my family's retail business. Different domain, same core skill: figuring out what actually works.</p><div className="about-meta"><span>C++ · JAVA / DSA</span><span>RETAIL / STRATEGY</span><span>BUILD / SHIP</span></div></div></section>
    <section className="proof-atlas" id="achievements"><div className="proof-head"><div><p className="section-kicker">ACHIEVEMENTS / VERIFIED SIGNALS</p><h2>Proof that<br /><em>the work ships.</em></h2></div><p>Not a trophy shelf. A compact record of useful things built, deployed, and tested in the real world.</p></div><div className="proof-grid"><article className="proof-card proof-feature"><span className="proof-index">01</span><strong className="proof-stat">44<span>/160</span></strong><h3>TetraTHON 2026</h3><p>Prism placed in the top 44 teams for its cross-document financial consistency checker.</p><b className="proof-tag">PRISM / DUE DILIGENCE</b></article><article className="proof-card proof-coral"><span className="proof-index">02</span><strong className="proof-stat">03</strong><h3>Products shipped</h3><p>CodeAutopsy, Clarity, and Prism turned working ideas into live, usable products.</p><b className="proof-tag">BUILD · DEPLOY · LEARN</b></article><article className="proof-card proof-lilac"><span className="proof-index">03</span><strong className="proof-stat">AI<span>+</span>FULL-STACK</strong><h3>One consistent thread</h3><p>Gemini-powered tools meet React, TypeScript, Node, FastAPI, and real product constraints.</p><b className="proof-tag">CURRENT PRACTICE</b></article></div></section>
<section className="knowledge-atlas" id="knowledge"><div className="knowledge-head"><div><p className="section-kicker">WHAT I BRING TO THE TABLE / PINNED IN THE WORKSPACE</p><h2>Things I know,<br /><em>things I love.</em></h2></div><p>A working canvas instead of a checklist: the tools I build with, the systems I understand, and the things that keep me curious outside the screen.</p></div><div className="knowledge-canvas"><div className="knowledge-crosshair" aria-hidden="true" /><div className="knowledge-core"><img className="knowledge-core-art" src="/skill-assets/cpp.png" alt="Brain" /><span>WORKING<br /><b>KNOWLEDGE</b></span><i /></div><article className="knowledge-pin pin-cpp"><span className="pin-dot" /><small>LANGUAGE / 01</small><h3><img className="skill-icon" src="/skill-assets/laptop.png" alt="" /> C / C++</h3><p>Learning DSA.</p></article><article className="knowledge-pin pin-vibe"><span className="pin-dot" /><small>METHOD / 02</small><h3><img className="skill-icon" src="/skill-assets/gaming.png" alt="" /> Vibe coding</h3><p>Fast experiments, sharper prompts.</p></article><article className="knowledge-pin pin-auth"><span className="pin-dot" /><small>SYSTEM / 03</small><h3><img className="google-icon" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" /> Google Auth</h3><p>Setup, flows, and access.</p></article><article className="knowledge-pin pin-prompt"><span className="pin-dot" /><small>AI / 04</small><h3><img className="skill-icon" src="/skill-assets/prompt.png" alt="" /> Prompt writing</h3><p>Turning intent into useful output.</p></article><article className="knowledge-pin pin-badminton"><span className="pin-dot" /><small>OFFLINE / 05</small><h3><img className="skill-icon" src="/skill-assets/badminton.png" alt="" /> Badminton</h3><p>Reset, move, play.</p></article><article className="knowledge-pin pin-music"><span className="pin-dot" /><small>OFFLINE / 06</small><h3><img className="skill-icon" src="/skill-assets/music.png" alt="" /> Music</h3><p>Always somewhere in the loop.</p></article><article className="knowledge-pin pin-gaming"><span className="pin-dot" /><small>OFFLINE / 07</small><h3><img className="skill-icon" src="/skill-assets/gaming-controller.png" alt="" /> Gaming</h3><p>Systems, worlds, and strategy.</p></article><article className="knowledge-pin pin-dsa"><span className="pin-dot" /><small>DSA / 08</small><h3><img className="skill-icon" src="/skill-assets/problem-solving.png" alt="" /> Problem Solving</h3><p>Striver's sheet, one heap at a time.</p></article><article className="knowledge-pin pin-markets"><span className="pin-dot" /><small>MARKETS / 09</small><h3><img className="skill-icon" src="/skill-assets/stock-market.png" alt="" /> Stock Market</h3><p>Reading charts, testing theories.</p></article><article className="knowledge-pin pin-systems"><span className="pin-dot" /><small>SYS / 10</small><h3><img className="skill-icon" src="/skill-assets/productivity.png" alt="" /> Productivity</h3><p>Building systems for myself.</p></article><article className="knowledge-pin pin-java"><span className="pin-dot" /><small>LANGUAGE / 11</small><h3>☕ Java</h3><p>OOP, arrays, and basics.</p></article></div></section>    <ContactSection />
    <footer><span>MADE BY PRINCE ♥</span><span>END OF READOUT · 2026</span></footer>
  </main>
}
createRoot(document.getElementById('root')!).render(<App />)