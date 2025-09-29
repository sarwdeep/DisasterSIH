  import React from "react";
  import { motion } from "framer-motion";
  import {
    ShieldCheck,
    Map,
    BellRing,
    Fingerprint,
    Headset,
    Users,
    BadgePercent,
    Check,
  } from "lucide-react";

  const features = [
    {
      icon: <Map className="h-6 w-6 text-emerald-500" />,
      title: "Smart Route Optimization",
      description: "Avoid risky zones with AI-powered safe routes.",
    },
    {
      icon: <BellRing className="h-6 w-6 text-rose-500" />,
      title: "Real-Time Geo-Fence Alerts",
      description: "Get instant warnings when entering high-risk areas.",
    },
    {
      icon: <Fingerprint className="h-6 w-6 text-indigo-500" />,
      title: "Blockchain Digital ID",
      description:
        "Secure, tamper-proof digital ID with medical & emergency info.",
    },
    {
      icon: <Headset className="h-6 w-6 text-sky-500" />,
      title: "24/7 Multilingual SOS Support",
      description: "Priority access to emergency response in your language.",
    },
    {
      icon: <Users className="h-6 w-6 text-amber-500" />,
      title: "Family Tracking Mode",
      description: "Allow loved ones to track your location in real-time.",
    },
    {
      icon: <BadgePercent className="h-6 w-6 text-fuchsia-500" />,
      title: "Insurance Discounts",
      description:
        "Partnered travel insurers offer lower premiums for safe travelers.",
    },
  ];

  const partners = [
    { name: "HavenStay Hotel", category: "Hotel" },
    { name: "TrailGuard Tours", category: "Tours" },
    { name: "HarborSafe Inn", category: "Resort" },
    { name: "PeakShield Gear", category: "Outdoor" },
    { name: "MetroCare Cab", category: "Transport" },
    { name: "Sunrise Bazaar", category: "Retail" },
  ];

  const containerFade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemFade = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 160, damping: 18 },
    },
  };

  function FeatureCard({ icon, title, description }) {
    return (
      <div className="group relative h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-emerald-50 to-indigo-50 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-inset ring-slate-200">
            {icon}
          </div>
          <div>
            <h4 className="text-base font-semibold text-slate-900">{title}</h4>
            <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
          </div>
        </div>
      </div>
    );
  }

  function PriceDisplay() {
    return (
      <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-semibold text-slate-900 sm:text-4xl">₹299</span>
          <span className="text-sm font-medium text-slate-600">/ month</span>
        </div>
        <div className="text-slate-400">or</div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-semibold text-slate-900">$5</span>
          <span className="text-sm font-medium text-slate-600">/ month (demo)</span>
        </div>
      </div>
    );
  }

  function PricingCard() {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-7 sm:p-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              <ShieldCheck className="h-4 w-4" />
              Premium Safety
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Upgrade to premium protection
            </h3>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Access AI-driven safety, real-time alerts, and priority support—wherever you go.
            </p>

            <div className="mt-6">
              <PriceDisplay />
            </div>

            <a
              href="#"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:brightness-[1.05] focus:outline-none focus:ring-2 focus:ring-emerald-400 md:w-auto"
            >
              Upgrade to Premium
            </a>

            <p className="mt-3 text-xs text-slate-500">
              Cancel anytime. Introductory pricing for demo users.
            </p>
          </div>

          <div className="border-t border-slate-200 p-7 sm:p-10 md:border-l md:border-t-0">
            <ul className="space-y-3">
              {[
                "Smart Route Optimization",
                "Real-Time Geo-Fence Alerts",
                "Blockchain Digital ID",
                "24/7 Multilingual SOS Support",
                "Family Tracking Mode",
                "Insurance Discounts",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
              For demo: $5 / month pricing is shown for international users.
            </div>
          </div>
        </div>
      </div>
    );
  }

  function PartnerCard({ name, category, imageUrl }) {
    return (
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl ring-1 ring-slate-200">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-slate-50 text-slate-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
            )}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900">{name}</p>
            <p className="truncate text-xs text-slate-500">{category}</p>
          </div>
        </div>
      </div>
    );
  }

  export default function Premium() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200 blur-3xl" />
            <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-indigo-200 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-12 sm:pt-24 sm:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 shadow-sm backdrop-blur">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span className="text-xs font-medium text-slate-700">Smart Tourist Safety</span>
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Premium Safety Pass
              </h1>
              <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
                Unlock advanced safety features for a worry-free travel experience.
              </p>

              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#pricing"
                  className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:brightness-[1.05] focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  Upgrade to Premium
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" />
                  </svg>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  Explore Features
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-6 pb-6 sm:pb-10">
          <motion.div
            variants={containerFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((f) => (
              <motion.div key={f.title} variants={itemFade}>
                <FeatureCard icon={f.icon} title={f.title} description={f.description} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="pricing" className="relative mx-auto max-w-6xl px-6 py-10 sm:py-14 md:py-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-16 top-6 h-56 w-56 rounded-full bg-emerald-100 blur-3xl" />
            <div className="absolute bottom-2 right-10 h-56 w-56 rounded-full bg-indigo-100 blur-3xl" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <PricingCard />
          </motion.div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-28 sm:pb-36">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                Safe Tourism Partner Businesses
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Trusted partners aligned with our safety-first standards.
              </p>
            </div>
            <span className="hidden rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 sm:inline">
              Safe Partner
            </span>
          </div>

          <motion.div
            variants={containerFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {partners.map((p) => (
              <motion.div key={p.name} variants={itemFade}>
                <PartnerCard name={p.name} category={p.category} imageUrl={p.imageUrl} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    );
  }


