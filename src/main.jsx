import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Copy,
  FileCheck2,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Monitor,
  PackageCheck,
  Palette,
  Phone,
  Printer,
  ScanLine,
  Shirt,
  Upload,
} from 'lucide-react';
import './styles.css';

const navItems = [
  ['Services', 'services'],
  ['Workflow', 'workflow'],
  ['Why Us', 'why-us'],
  ['Contact', 'contact'],
];

const contactInfo = {
  phone: '+254 702 325743',
  phoneHref: 'tel:+254702325743',
  email: 'komushii97@gmail.com',
  address: 'Watersys Annex, Tubman Road, Nairobi',
  whatsappNumber: '254702325743',
};

const whatsappIntro = 'Hi Jamiejo, I need help with a job.';
const whatsappServiceRequest =
  'Hi Jamiejo, I need help with printing, branding, tendering or cyber services';

function getWhatsappUrl(message = '') {
  const query = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${contactInfo.whatsappNumber}${query}`;
}

const services = [
  {
    title: 'Printing Services',
    description: 'Flyers, cards, posters, banners, documents and finishing.',
    icon: Printer,
  },
  {
    title: 'Branding Services',
    description: 'Logos, profiles, signage, packaging layouts and brand materials.',
    icon: Palette,
  },
  {
    title: 'Tendering Services',
    description: 'Formatting, checklist review, printing, binding and submission support.',
    icon: ClipboardCheck,
  },
  {
    title: 'Cyber Services',
    description: 'Typing, copying, scanning, emailing, laminating and online help.',
    icon: Monitor,
  },
  {
    title: 'T-Shirt Printing',
    description: 'Custom shirts for events, schools, teams and businesses.',
    icon: Shirt,
  },
  {
    title: 'Government Services',
    description: 'Help with applications, renewals, downloads, uploads and submissions.',
    icon: Building2,
  },
];

const metrics = [
  ['Same-day', 'For many walk-in jobs'],
  ['6+', 'Core service categories'],
  ['One desk', 'Print, cyber and branding'],
  ['Guided', 'Clear options upfront'],
];

const workflow = [
  {
    title: 'Share the job',
    text: 'Send your file, idea or request.',
    icon: Upload,
  },
  {
    title: 'Confirm the details',
    text: 'Agree on size, quantity, finish and deadline.',
    icon: FileCheck2,
  },
  {
    title: 'Collect the work',
    text: 'Pick up the finished job or get help submitting it online.',
    icon: PackageCheck,
  },
];

const quickServices = [
  { label: 'Copy', icon: Copy },
  { label: 'Scan', icon: ScanLine },
  { label: 'Print', icon: Printer },
  { label: 'Brand', icon: Palette },
  { label: 'Bind', icon: FileText },
  { label: 'Submit', icon: Upload },
];

const contactCards = [
  { label: contactInfo.phone, href: contactInfo.phoneHref, icon: Phone },
  { label: contactInfo.email, href: `mailto:${contactInfo.email}`, icon: Mail },
  { label: contactInfo.address, icon: MapPin },
  {
    label: 'Chat on WhatsApp',
    href: getWhatsappUrl(whatsappServiceRequest),
    icon: MessageCircle,
    className: 'whatsapp-panel',
    external: true,
  },
];

const whyReasons = ['Quality you can trust', 'Fast turnaround', 'Affordable service'];

function useReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll('.reveal'));
    items.forEach((item) => item.classList.add('is-visible'));
    return undefined;
  }, []);
}

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="section-wrap header-row">
        <a className="brand-mark" href="home" aria-label="Jamiejo Enterprises home">
          <img src="/favicon.png" alt="" aria-hidden="true" />
          <strong>Jamiejo Enterprises</strong>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="site-btn site-btn-primary header-cta" href="#contact">
          Request Quote
        </a>
      </div>
    </header>
  );
}

function HeroShowcase() {
  return (
    <div className="hero-showcase reveal reveal-right">
      <img src="/01.svg" alt="Jamiejo Enterprises printing and cyber services" />
    </div>
  );
}

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <article className={`service-pill reveal delay-${Math.min(index + 1, 4)}`}>
      <span className="service-icon">
        <Icon size={28} strokeWidth={2.1} aria-hidden="true" />
      </span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  );
}

function App() {
  useReveal();

  const handleInquirySubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.toString().trim();
    const service = formData.get('service')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    const whatsappMessage = [
      whatsappIntro,
      name ? `Name: ${name}` : '',
      service ? `Service: ${service}` : '',
      message ? `Message: ${message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(getWhatsappUrl(whatsappMessage), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page-shell">
      <Header />

      <main>
        <section id="Home" className="hero-section">
          <div className="section-wrap hero-grid">
            <div className="hero-copy reveal reveal-left">
              <p className="section-label">All printing and cyber services under one roof</p>
              <h1>We print. We brand. We deliver.</h1>
              <p className="hero-text">
                Jamiejo Enterprises helps with everyday print, branding, tender, cyber and online
                service jobs.
              </p>
              <div className="hero-actions">
                <a className="site-btn site-btn-primary" href="#contact">
                  Start a Job <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a className="site-btn site-btn-soft" href="#services">
                  Explore Services
                </a>
              </div>
              <div className="quick-services" aria-label="Quick services">
                {quickServices.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span key={item.label}>
                      <Icon size={17} aria-hidden="true" />
                      {item.label}
                    </span>
                  );
                })}
              </div>
            </div>
            <HeroShowcase />
          </div>
        </section>

        <section className="hero-meta">
          <div className="section-wrap kpi-grid">
            {metrics.map(([value, label], index) => (
              <article className={`kpi-card reveal delay-${Math.min(index + 1, 4)}`} key={value}>
                <p className="kpi-value">{value}</p>
                <p className="kpi-label">{label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="services-showcase py-section">
          <div className="section-wrap services-wrap">
            <div className="services-copy reveal reveal-left">
              <p className="services-kicker">What We Offer</p>
              <h2 className="services-title">Practical services for business and personal jobs.</h2>
              <p className="services-body">Choose the service you need and we will guide the rest.</p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => (
                <ServiceCard service={service} index={index} key={service.title} />
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="workflow-section py-section">
          <div className="section-wrap">
            <div className="section-head reveal">
              <div>
                <p className="section-label">Workflow</p>
                <h2 className="section-title">From first file to finished work.</h2>
              </div>
              <p className="section-text">
                A simple process for getting your work prepared, checked and finished.
              </p>
            </div>
            <div className="workflow-grid">
              {workflow.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article className={`workflow-card reveal delay-${index + 1}`} key={step.title}>
                    <span className="icon-wrap">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="partner-band-section">
          <div className="section-wrap">
            <div className="partner-band reveal reveal-zoom">
              <div>
                <h2>Need print work prepared today?</h2>
                <p>Send the details and we will confirm what is possible.</p>
              </div>
              <a className="partner-band-btn" href="#contact">
                Book a Call <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="why-us" className="why-choose-section">
          <div className="section-wrap">
            <div className="why-choose-shell reveal">
              <h2 className="why-choose-kicker">Why choose Jamiejo?</h2>
              <p className="why-choose-copy">
                Friendly service, clear guidance and dependable work when timing matters.
              </p>
              <div className="why-choose-grid">
                {whyReasons.map((item) => (
                  <article className="why-choose-card" key={item}>
                    <BadgeCheck className="why-choose-icon" size={34} aria-hidden="true" />
                    <strong>{item.split(' ')[0]}</strong>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section py-section">
          <div className="section-wrap contact-grid">
            <div className="contact-copy reveal reveal-left">
              <p className="section-label">Start a request</p>
              <h2 className="section-title">Tell us what you need printed, branded or submitted.</h2>
              <div className="contact-cards-grid">
                {contactCards.map((item) => {
                  const Icon = item.icon;
                  const className = ['contact-panel', item.className].filter(Boolean).join(' ');
                  const content = (
                    <>
                      <Icon size={20} aria-hidden="true" />
                      <span>{item.label}</span>
                    </>
                  );

                  if (!item.href) {
                    return (
                      <span className={className} key={item.label}>
                        {content}
                      </span>
                    );
                  }

                  return (
                    <a
                      className={className}
                      href={item.href}
                      key={item.label}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      target={item.external ? '_blank' : undefined}
                    >
                      {content}
                    </a>
                  );
                })}
              </div>
            </div>
            <form className="contact-inquiry reveal reveal-right" onSubmit={handleInquirySubmit}>
              <label>
                Full Name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Service Needed
                <select name="service" defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service.title}>{service.title}</option>
                  ))}
                </select>
              </label>
              <label>
                Message
                <textarea name="message" rows="5" placeholder="Describe the job, quantity and deadline" />
              </label>
              <button type="submit" className="site-btn signup-submit">
                Submit Request <ArrowRight size={16} aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-grid">
          <div className="footer-brand">
            <h3>Jamiejo Enterprises</h3>
            <p>Printing, branding, cyber services and document support in Nairobi.</p>
          </div>
          <div>
            <p className="footer-heading">Navigation</p>
            <div className="footer-links">
              {navItems.map(([label, href]) => (
                <a href={href} key={label}>
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="footer-heading">Contact</p>
            <div className="footer-links">
              <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              <span>{contactInfo.address}</span>
              <a href={getWhatsappUrl()} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="section-wrap footer-bottom">
          <p>© 2026 Jamiejo Enterprises. All rights reserved.</p>
          <span>Print. Brand. Finish.</span>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={getWhatsappUrl(whatsappIntro)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Jamiejo on WhatsApp"
      >
        <MessageCircle size={26} aria-hidden="true" />
        <span>Need Help?</span>
      </a>
      <Analytics />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
