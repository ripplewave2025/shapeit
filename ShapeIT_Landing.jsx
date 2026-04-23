import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  ArrowRight,
  Code2,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Star,
  MapPin,
  Clock,
  ExternalLink,
  Layers,
  Smartphone,
  Globe,
  Bot,
  Hospital,
  Briefcase,
  Menu,
  X,
} from "lucide-react";

/**
 * Shape IT — Landing Page
 * ----------------------------------------------------------------
 * Brand palette pulled from the logo:
 *   Primary (deep blue):      #1E40AF  (tw: blue-800)
 *   Primary accent (royal):   #2563EB  (tw: blue-600)
 *   Accent (amber / orange):  #F59E0B  (tw: amber-500)
 *   Soft cream surface:       #FFF8F1
 *   Ink / text:               #0F172A  (tw: slate-900)
 *
 * Stack: React JSX + TailwindCSS + lucide-react. No external UI kit,
 * no browser storage, no form backend. All CTAs are direct call /
 * WhatsApp / email links.
 * ----------------------------------------------------------------
 */

const PHONE = "+918101652485";
const PHONE_DISPLAY = "+91 81016 52485";
const EMAIL = "shapeit.india@gmail.com";
const WHATSAPP = `https://wa.me/918101652485?text=${encodeURIComponent(
  "Hi Shape IT, I'd like to discuss a project."
)}`;

// ---------- Reusable atoms ----------

const PrimaryCTA = ({ children, href, className = "" }) => (
  <a
    href={href}
    className={`group inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 ring-1 ring-blue-800/20 transition hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-700/30 sm:text-base ${className}`}
  >
    {children}
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
  </a>
);

const SecondaryCTA = ({ children, href, className = "" }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white sm:text-base ${className}`}
  >
    {children}
  </a>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
    {children}
  </span>
);

// ---------- NAV ----------

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-[#FFF8F1]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight">
            <span className="text-blue-700">Shape</span>
            <span className="text-amber-500"> IT</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#services" className="text-sm font-medium text-slate-700 hover:text-slate-900">Services</a>
          <a href="#work" className="text-sm font-medium text-slate-700 hover:text-slate-900">Work</a>
          <a href="#process" className="text-sm font-medium text-slate-700 hover:text-slate-900">How we work</a>
          <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-slate-900">Contact</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-700"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
          <PrimaryCTA href={WHATSAPP}>Start a project</PrimaryCTA>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-[#FFF8F1] md:hidden">
          <div className="flex flex-col gap-4 px-5 py-5">
            <a href="#services" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-800">Services</a>
            <a href="#work" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-800">Work</a>
            <a href="#process" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-800">How we work</a>
            <a href="#contact" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-800">Contact</a>
            <div className="flex flex-col gap-3 pt-2">
              <SecondaryCTA href={`tel:${PHONE}`}>
                <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
              </SecondaryCTA>
              <PrimaryCTA href={WHATSAPP}>
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </PrimaryCTA>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// ---------- HERO ----------

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFF8F1]">
      {/* background grid + glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-300/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-0 h-[380px] w-[380px] rounded-full bg-amber-300/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-14 lg:px-8 lg:pb-28 lg:pt-20">
        {/* trust bar */}
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2">
          <Pill>
            <ShieldCheck className="h-3.5 w-3.5" /> Engineering-led studio
          </Pill>
          <Pill>
            <MapPin className="h-3.5 w-3.5" /> Gangtok, India
          </Pill>
          <Pill>
            <Globe className="h-3.5 w-3.5" /> India · US · EU · Dubai
          </Pill>
        </div>

        {/* headline */}
        <h1 className="mx-auto mt-8 max-w-4xl text-center text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
          We design software
          <br className="hidden sm:block" />{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-blue-700">specifically for your business needs.</span>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 -bottom-1 z-0 h-3 rounded-full bg-amber-300/70"
            />
          </span>
        </h1>

        {/* sub-headline */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
          Shape IT is an engineering-led studio building production web apps,
          mobile apps and AI integrations for your business, whether you have
          an idea or already in the middle, or you already have a enterprise.
          We will provide the solution.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <PrimaryCTA href={WHATSAPP}>
            <MessageCircle className="h-4 w-4" />
            Start a project on WhatsApp
          </PrimaryCTA>
          <SecondaryCTA href={`tel:${PHONE}`}>
            <Phone className="h-4 w-4" />
            Call {PHONE_DISPLAY}
          </SecondaryCTA>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          No forms. Talk to the engineer directly — Mon–Fri, 9 AM – 6 PM IST.
        </p>

        {/* Credibility strip */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-y-6 rounded-2xl border border-slate-200 bg-white/60 p-6 backdrop-blur sm:grid-cols-4 sm:divide-x sm:divide-slate-200 sm:gap-y-0">
          <Stat value="6+" label="Systems engineered" />
          <Stat value="4" label="Live in production" />
          <Stat value="3" label="Countries served" />
          <Stat value="100%" label="Code ownership to client" />
        </div>

        {/* Stack / proof strip */}
        <div className="mt-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Built with production stacks
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-700">
            <span>React</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>Django</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>PostgreSQL</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>Flutter</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>React Native</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>LLM / RAG</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }) => (
  <div className="px-2 text-center sm:px-6">
    <div className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
      {value}
    </div>
    <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
      {label}
    </div>
  </div>
);

// ---------- SERVICES ----------

const services = [
  {
    icon: Code2,
    title: "Software Engineering",
    tagline: "Websites, web apps & mobile apps.",
    body:
      "Production systems in React, Django, PostgreSQL, Flutter and React Native. Static marketing sites, on-premise web apps, Android builds — all version-controlled, documented, and fully owned by you.",
    points: ["Web apps", "Mobile (Flutter / RN)", "APIs & databases"],
    accent: "blue",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    tagline: "AI that earns its keep.",
    body:
      "Modern LLMs, RAG pipelines, and chatbots wired into your existing product — support automation, document Q&A, internal assistants. Only where it removes real cost or unlocks a real workflow.",
    points: ["Chatbots & assistants", "RAG over your docs", "Workflow automation"],
    accent: "amber",
  },
  {
    icon: TrendingUp,
    title: "Growth & Content Systems",
    tagline: "Marketing that compounds.",
    body:
      "Ads, graphics, video, and content strategy — run as a measurable system, not a monthly deliverable dump. For clients who want their brand still earning attention six months from now.",
    points: ["Performance ads", "Brand & graphics", "Content strategy"],
    accent: "slate",
  },
];

const Services = () => (
  <section id="services" className="bg-white py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
          What we do
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Three practices. One team. Shipped work.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          We don't hand you off to six freelancers. The same small team that
          writes your code writes your ads — which is exactly why both actually
          work.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, tagline, body, points, accent }) => {
  const accentRing = {
    blue: "group-hover:ring-blue-600/30 group-hover:shadow-blue-700/10",
    amber: "group-hover:ring-amber-500/40 group-hover:shadow-amber-500/10",
    slate: "group-hover:ring-slate-900/20 group-hover:shadow-slate-900/10",
  }[accent];

  const iconWrap = {
    blue: "bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white",
    amber: "bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
    slate: "bg-slate-100 text-slate-900 group-hover:bg-slate-900 group-hover:text-white",
  }[accent];

  return (
    <div
      className={`group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 ring-1 ring-transparent transition duration-300 hover:-translate-y-1 hover:shadow-xl ${accentRing}`}
    >
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition ${iconWrap}`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">
        {title}
      </h3>
      <p className="mt-1 text-sm font-semibold text-slate-500">{tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{body}</p>
      <ul className="mt-5 space-y-2">
        {points.map((p) => (
          <li key={p} className="flex items-center gap-2 text-sm text-slate-700">
            <CheckCircle2 className="h-4 w-4 text-blue-700" />
            {p}
          </li>
        ))}
      </ul>
      <a
        href={WHATSAPP}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900"
      >
        Talk about this <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
};

// ---------- PORTFOLIO ----------

const projects = [
  {
    title: "Physiotherapy Hospital Management System",
    category: "Healthcare · Full-stack Web",
    icon: Hospital,
    image: "/image1.png", // drop your screenshot at /public/image1.png
    stack: ["React", "Django", "PostgreSQL"],
    status: "Built · Deployable",
    blurb:
      "Role-based HMS for a physiotherapy department. Doctors, admins, and front-desk staff each get role-scoped dashboards with patient records, CR numbers, diagnosis logs, and follow-up tracking.",
    size: "lg",
  },
  {
    title: "Skills Marketplace — Full-stack + APK",
    category: "Two-sided Marketplace · Web + Android",
    icon: Layers,
    image: null,
    stack: ["React", "Django", "Android APK"],
    status: "Shippable product",
    blurb:
      "A LinkedIn-style professional skills marketplace. Auth, profiles, listings, search, routing — plus a packaged Android build. Ready to white-label for freelance, coaching, or home-services verticals.",
    size: "md",
  },
  {
    title: "AI Query Chatbot — PG Accommodation",
    category: "AI Integration · Support Automation",
    icon: Bot,
    image: null,
    stack: ["LLM", "RAG", "Python"],
    status: "Demo-ready",
    blurb:
      "LLM-backed chatbot trained on a paying guest accommodation's FAQ, rooms, rent, and house rules. Slashes repeat-query load for the owner. Pattern reusable for hotels, clinics, and schools.",
    size: "md",
  },
  {
    title: "Travel Booking Platform",
    category: "Marketplace · In active development",
    icon: Globe,
    image: null,
    stack: ["React", "Django", "Payments"],
    status: "In development",
    blurb:
      "A full travel website covering itinerary discovery, vendor onboarding, bookings, and payments. A reference build for any aggregator-style platform.",
    size: "md",
  },
  {
    title: "Homestay · Survey · Mental Health",
    category: "3 Mobile Apps · Flutter & React Native",
    icon: Smartphone,
    image: null,
    stack: ["Flutter", "React Native"],
    status: "Production-ready",
    blurb:
      "A suite of three native-quality mobile apps built as vertical reference builds: homestay booking, survey collection with dynamic forms, and a mental-health check-in companion. White-label-ready in weeks.",
    size: "md",
  },
  {
    title: "Upride — UI / UX Revamp",
    category: "Product Design · Shipped",
    icon: Briefcase,
    image: null,
    stack: ["Design System", "Component Library"],
    status: "Shipped · Mar 2025",
    blurb:
      "End-to-end UI revamp for Upride — hierarchy, navigation, component system, and conversion surfaces. Proof that we don't just ship features, we ship experiences.",
    size: "lg",
  },
];

const Portfolio = () => (
  <section id="work" className="bg-[#FFF8F1] py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Systems we've engineered.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Every project below was designed, coded, and shipped in-house. Some
            are live with clients, some are productised and ready to
            white-label, some are in active development. Each one is a real
            system — not a template.
          </p>
        </div>
        <a
          href={WHATSAPP}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
        >
          Request a full case study <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project, index }) => {
  const { title, category, icon: Icon, image, stack, status, blurb, size } = project;

  // mix of spans for a magazine-grid feel
  const span =
    size === "lg"
      ? "lg:col-span-4"
      : size === "md"
      ? "lg:col-span-2"
      : "lg:col-span-2";

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${span}`}
    >
      {/* Visual */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50">
        {image ? (
          // drop-in screenshot. Replace src with your CDN / import.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <PlaceholderVisual Icon={Icon} index={index} />
        )}

        {/* status badge */}
        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {status}
        </div>

        {/* external hint */}
        <div className="absolute right-4 top-4 rounded-full bg-slate-900/80 p-2 text-white opacity-0 ring-1 ring-white/10 transition group-hover:opacity-100">
          <ExternalLink className="h-3.5 w-3.5" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
          {category}
        </p>
        <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight text-slate-900 sm:text-xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{blurb}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-700"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <a
            href={WHATSAPP}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 group-hover:text-blue-700"
          >
            Deploy this for my business <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <Icon className="h-5 w-5 text-slate-400 transition group-hover:text-blue-700" />
        </div>
      </div>
    </article>
  );
};

// Fancy fallback visual when you don't yet have a screenshot
const PlaceholderVisual = ({ Icon, index }) => {
  const palettes = [
    "from-blue-600 via-blue-500 to-indigo-500",
    "from-amber-400 via-orange-500 to-rose-500",
    "from-slate-800 via-slate-700 to-blue-700",
    "from-emerald-500 via-teal-500 to-blue-500",
    "from-fuchsia-500 via-purple-500 to-blue-600",
    "from-amber-500 via-amber-400 to-yellow-300",
  ];
  const palette = palettes[index % palettes.length];

  return (
    <div className={`relative h-full w-full bg-gradient-to-br ${palette}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:28px_28px]"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur">
          <Icon className="h-9 w-9 text-white" />
        </div>
      </div>
    </div>
  );
};

// ---------- HOW WE WORK ----------

const steps = [
  {
    n: "01",
    icon: MessageCircle,
    title: "Few minutes call",
    body:
      "You talk directly to the person who'll build your project. No account manager, no sales script.",
  },
  {
    n: "02",
    icon: Zap,
    title: "Scoped, fixed, shipped",
    body:
      "We send a clear scope with timeline and price — then build in weekly check-ins so you see progress, not promises.",
  },
  {
    n: "03",
    icon: ShieldCheck,
    title: "Handover + support",
    body:
      "You own 100% of the code. We hand over repositories, docs, and deployments — then stay on for support if you want.",
  },
];

const Process = () => (
  <section id="process" className="bg-white py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
          How we work
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Small team. Clear process. No surprises.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="relative rounded-2xl border border-slate-200 bg-[#FFF8F1] p-7"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold tracking-[0.2em] text-amber-600">
                {s.n}
              </span>
              <s.icon className="h-5 w-5 text-slate-400" />
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- CONTACT / FINAL CTA ----------

const Contact = () => (
  <section id="contact" className="relative overflow-hidden bg-slate-900 py-20 sm:py-28">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[900px] -translate-x-1/2 rounded-full bg-blue-600/30 blur-3xl"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl"
    />

    <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
      <div className="mx-auto flex max-w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-amber-400">
        <Star className="h-3.5 w-3.5 fill-amber-400" />
        Taking on 2 new builds this quarter
      </div>
      <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
        Have a project? <span className="text-amber-400">Let's build it.</span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
        The fastest way to get a real answer is to send us a WhatsApp message
        or call. You'll talk to the engineer, not a sales rep — and we'll tell
        you honestly whether we're the right fit for your project.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
        <a
          href={WHATSAPP}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 text-sm font-bold text-slate-900 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 sm:text-base"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp us now
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
        >
          <Phone className="h-4 w-4" />
          Call {PHONE_DISPLAY}
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
        >
          <Mail className="h-4 w-4" />
          Email
        </a>
      </div>

      {/* Meta row */}
      <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
        <MetaCard
          icon={MapPin}
          title="Visit us"
          body={<>Samdong Kambal,<br />Gangtok, Sikkim, India</>}
        />
        <MetaCard
          icon={Clock}
          title="Operating hours"
          body={
            <>
              Mon–Fri · 9 AM – 6 PM IST<br />
              Sat · 10 AM – 4 PM IST
            </>
          }
        />
        <MetaCard
          icon={Mail}
          title="Direct line"
          body={
            <>
              {PHONE_DISPLAY}
              <br />
              {EMAIL}
            </>
          }
        />
      </div>
    </div>
  </section>
);

const MetaCard = ({ icon: Icon, title, body }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-amber-400">
      <Icon className="h-5 w-5" />
    </div>
    <h4 className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-white">
      {title}
    </h4>
    <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
  </div>
);

// ---------- FOOTER ----------

const Footer = () => (
  <footer className="border-t border-slate-200 bg-[#FFF8F1]">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-slate-600 sm:flex-row lg:px-8">
      <div className="flex items-center gap-2">
        <span className="text-lg font-extrabold tracking-tight">
          <span className="text-blue-700">Shape</span>
          <span className="text-amber-500"> IT</span>
        </span>
        <span className="text-slate-400">·</span>
        <span>Actively shaping the future with IT.</span>
      </div>
      <div className="text-xs text-slate-500">
        © {new Date().getFullYear()} Shape IT. Designed & engineered in Gangtok, India.
      </div>
    </div>
  </footer>
);

// ---------- PAGE ----------

export default function ShapeITLanding() {
  return (
    <div className="min-h-screen bg-[#FFF8F1] font-sans text-slate-900 antialiased">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
