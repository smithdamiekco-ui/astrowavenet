import { useState, useEffect, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Wifi, Tv, Package, Shield, Zap, Globe, Phone, Check, Quote, X } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";

const homeFaqs = [
  {
    q: "What internet speeds does Astrowave offer?",
    a: "Astrowave TV Net offers plans ranging from 300 Mbps to 1+ Gbps. Whether you're browsing, streaming in 4K, gaming, or working remotely, we have a plan that fits your needs.",
  },
  {
    q: "Is Astrowave available in my area?",
    a: "We provide service across all 50 states in the United States. Our nationwide network ensures coverage from coast to coast. Call us at (888) 253-7498 or visit our Contact page to verify availability at your specific address.",
  },
  {
    q: "Can I bundle internet and TV together?",
    a: "Absolutely! All our plans include both high-speed internet and TV channels. Bundling saves you money compared to purchasing services separately, and you get one simple bill each month.",
  },
  {
    q: "Are there any hidden fees or contracts?",
    a: "We believe in transparent pricing. Our Frontier Basic and Explorer Plus plans require a 12-month agreement, while Summit Ultra is completely contract-free. There are no hidden fees — the price you see is the price you pay.",
  },
  {
    q: "How quickly can I get installed?",
    a: "Most installations are scheduled within 3–5 business days of signing up. Our certified technicians handle everything, and installation typically takes 2–4 hours. Explorer Plus and Summit Ultra plans include free installation.",
  },
  {
    q: "What if I need to cancel or change my plan?",
    a: "You can upgrade your plan at any time with no additional fees. Downgrades are available after your initial contract period. Summit Ultra customers can cancel anytime with no early termination fees.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const plans = [
  {
    name: "Frontier Basic",
    speed: "300 Mbps",
    channels: "150+",
    price: "69.99",
    features: ["HD Streaming", "Basic TV Channels", "Email Support", "Standard Installation"],
  },
  {
    name: "Explorer Plus",
    speed: "500 Mbps",
    channels: "250+",
    price: "99.99",
    popular: true,
    features: ["4K Streaming", "Expanded Channel Lineup", "Priority Support", "Free Installation", "DVR Included"],
  },
  {
    name: "Summit Ultra",
    speed: "1+ Gbps",
    channels: "300+",
    price: "149.99",
    features: ["4K Ultra Streaming", "All Premium Channels", "24/7 VIP Support", "Free Installation", "Whole-Home DVR", "Sports Package"],
  },
];

const services = [
  {
    icon: Wifi,
    title: "High-Speed Internet",
    desc: "Blazing-fast connectivity up to 1+ Gbps. Stream, game, and work from anywhere in the USA.",
  },
  {
    icon: Tv,
    title: "4K TV Streaming",
    desc: "Crystal-clear entertainment with 300+ channels. From local news to premium movies and sports.",
  },
  {
    icon: Package,
    title: "Bundle & Save",
    desc: "Combine internet and TV for maximum value. One bill, one provider, zero hassle.",
  },
];

const stats = [
  { value: "99.7%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support Available" },
  { value: "1+", label: "Gbps Max Speed" },
  { value: "300+", label: "TV Channels" },
];

const testimonials = [
  {
    name: "James Mitchell",
    location: "Austin, TX",
    quote: "Switching to Astrowave was the best decision we made. Our whole family streams, games, and video calls simultaneously — zero lag.",
  },
  {
    name: "Maria Gonzalez",
    location: "Denver, CO",
    quote: "The installation crew was professional and fast. We've had rock-solid service since day one. Finally a provider that delivers on its promises.",
  },
  {
    name: "David Chen",
    location: "Portland, OR",
    quote: "The Explorer Plus bundle gives us everything we need — great speeds, tons of channels, and the price is very fair. Highly recommend.",
  },
];

const CtaPopup = forwardRef<HTMLDivElement, { onClose: () => void }>(({ onClose }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/60 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 20 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="glass-card border-primary/30 p-8 max-w-md w-full text-center relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>
      <div className="w-14 h-14 border border-primary/30 flex items-center justify-center mx-auto mb-5">
        <Phone className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-2xl font-black mb-2">Limited Time Offer!</h3>
      <p className="text-sm text-muted-foreground mb-1">
        Get your first 3 months at <span className="text-primary font-bold">20% off</span> any bundle plan.
      </p>
      <p className="text-xs text-muted-foreground mb-6">
        Call now or explore our plans to lock in savings.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="tel:+18882537498"
          className="flex-1 inline-flex items-center justify-center gap-2 h-11 bg-gradient-brand text-primary-foreground font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          <Phone className="h-4 w-4" />
          (888) 253-7498
        </a>
        <Link
          to="/plans"
          onClick={onClose}
          className="flex-1 inline-flex items-center justify-center h-11 border border-primary text-primary font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          View Plans
        </Link>
      </div>
    </motion.div>
  </motion.div>
));
CtaPopup.displayName = "CtaPopup";

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("cta-popup-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setShowPopup(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem("cta-popup-dismissed", "true");
  };

  return (
    <div>
      <SEO
        title="Astrowave TV Net | Internet & TV for America"
        description="Astrowave TV Net delivers reliable high-speed internet up to 1+ Gbps and 300+ TV channels nationwide. Explore our Internet + TV bundles starting at $69.99/mo."
        path="/"
      />
      {/* CTA Popup */}
      <AnimatePresence>
        {showPopup && <CtaPopup onClose={handleClosePopup} />}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-primary mb-6"
          >
            Internet + TV Nationwide
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] mb-6"
          >
            Connectivity
            <br />
            <span className="text-gradient">Without Limits</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            High-speed internet up to 1+ Gbps and 300+ TV channels delivered nationwide.
            Reliable, fast, and always on — wherever you call home.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/plans"
              className="inline-flex items-center justify-center h-12 px-8 bg-gradient-brand text-primary-foreground font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              View Plans
            </Link>
            <a
              href="tel:+18882537498"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 border border-primary text-primary font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                custom={i}
                className="glass-card p-8 hover:glow-cyan transition-shadow duration-500 group"
              >
                <div className="w-14 h-14 border border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Plans */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
              Plans & Pricing
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-black">
              Internet + TV Bundles
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                custom={i}
                className={`relative glass-card p-8 flex flex-col ${
                  plan.popular ? "border-primary glow-cyan" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-brand" />
                )}
                {plan.popular && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-primary text-primary-foreground px-3 py-1">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mb-4">
                  {plan.speed} · {plan.channels} Channels
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-black font-mono tabular-nums">${plan.price}</span>
                  <span className="text-sm text-muted-foreground">/mo</span>
                </div>
                <ul className="space-y-2 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-3.5 w-3.5 text-secondary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`inline-flex items-center justify-center h-11 text-sm font-bold uppercase tracking-wider transition-colors ${
                    plan.popular
                      ? "bg-gradient-brand text-primary-foreground hover:opacity-90"
                      : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Astrowave */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
              Why Choose Us
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-black">
              Built for <span className="text-gradient">America</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={i}
                className="glass-card p-6 text-center"
              >
                <div className="text-3xl lg:text-4xl font-black font-mono text-primary mb-2 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: Shield, title: "Rock-Solid Reliability", desc: "Our infrastructure is built for 99.7% uptime with redundant systems across the nation, keeping you connected through any conditions." },
              { icon: Zap, title: "Ultra-Fast Speeds", desc: "Up to 1+ Gbps download speeds with low-latency connections optimized for streaming, gaming, and remote work." },
              { icon: Globe, title: "Nationwide Coverage", desc: "From coast to coast, Astrowave delivers premium internet and TV service to homes and businesses across all 50 states." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="glass-card p-8 group hover:glow-cyan transition-shadow duration-500"
              >
                <div className="w-14 h-14 border border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
              Testimonials
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-black">
              From Our Customers
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={i}
                className="glass-card p-8"
              >
                <Quote className="h-5 w-5 text-primary/40 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={homeFaqs} title="Frequently Asked Questions" subtitle="Got Questions?" />

      {/* CTA Banner */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Ready to <span className="text-gradient">Connect</span>?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-xl mx-auto mb-8">
              Join thousands of American families enjoying blazing-fast internet and premium TV. Call us today or explore our plans.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="tel:+18882537498"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-gradient-brand text-primary-foreground font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                <Phone className="h-4 w-4" />
                (888) 253-7498
              </a>
              <Link
                to="/plans"
                className="inline-flex items-center justify-center h-12 px-8 border border-primary text-primary font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View All Plans
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
