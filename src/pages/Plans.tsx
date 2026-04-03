import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, X, Phone } from "lucide-react";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";

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
    features: {
      "Download Speed": "300 Mbps",
      "Upload Speed": "50 Mbps",
      "TV Channels": "150+",
      "HD Streaming": true,
      "4K Streaming": false,
      "DVR Included": false,
      "Installation": "$99",
      "Contract": "12 months",
      "Email Support": true,
      "Priority Support": false,
      "Sports Package": false,
      "Premium Channels": false,
    },
  },
  {
    name: "Explorer Plus",
    speed: "500 Mbps",
    channels: "250+",
    price: "99.99",
    popular: true,
    features: {
      "Download Speed": "500 Mbps",
      "Upload Speed": "100 Mbps",
      "TV Channels": "250+",
      "HD Streaming": true,
      "4K Streaming": true,
      "DVR Included": true,
      "Installation": "Free",
      "Contract": "12 months",
      "Email Support": true,
      "Priority Support": true,
      "Sports Package": false,
      "Premium Channels": false,
    },
  },
  {
    name: "Summit Ultra",
    speed: "1+ Gbps",
    channels: "300+",
    price: "149.99",
    features: {
      "Download Speed": "1+ Gbps",
      "Upload Speed": "200 Mbps",
      "TV Channels": "300+",
      "HD Streaming": true,
      "4K Streaming": true,
      "DVR Included": true,
      "Installation": "Free",
      "Contract": "No contract",
      "Email Support": true,
      "Priority Support": true,
      "Sports Package": true,
      "Premium Channels": true,
    },
  },
];

const addons = [
  { name: "Premium Movie Package", price: "14.99", desc: "HBO, Showtime, Starz & more" },
  { name: "Sports Ultimate", price: "19.99", desc: "NFL, NBA, NHL, ESPN+ & regional sports" },
  { name: "International Channels", price: "9.99", desc: "200+ channels in 30+ languages" },
  { name: "Whole-Home DVR Upgrade", price: "7.99", desc: "Record up to 6 shows simultaneously" },
];

const faqs = [
  {
    q: "What areas does CoreWaveConnect cover?",
    a: "We provide service across all 50 states in the United States. Our nationwide network ensures high-speed internet and TV coverage from coast to coast. Contact us to verify availability at your specific address.",
  },
  {
    q: "How long does installation take?",
    a: "Standard installation typically takes 2-4 hours. Our certified technicians handle everything, including equipment setup, wiring, and signal optimization. Explorer Plus and Summit Ultra plans include free installation.",
  },
  {
    q: "Is there a contract requirement?",
    a: "Frontier Basic and Explorer Plus plans require a 12-month agreement. Summit Ultra is contract-free — cancel anytime with no early termination fees.",
  },
  {
    q: "What equipment is provided?",
    a: "All plans include a modem/router combo and one TV receiver. Additional receivers are available for $5.99/mo each. Equipment remains property of CoreWaveConnect.",
  },
  {
    q: "What internet speeds can I expect?",
    a: "Our plans offer speeds from 300 Mbps up to 1+ Gbps. Actual speeds may vary based on network conditions, equipment, and location. Our Summit Ultra plan delivers gigabit-class performance for the most demanding households.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. You can upgrade your plan at any time with no additional fees. The new plan takes effect on your next billing cycle. Downgrades are also available after your initial contract period.",
  },
  {
    q: "Do you offer business plans?",
    a: "Yes. Contact our business team at (888) 614-8407 for custom plans with dedicated bandwidth, static IP addresses, and SLA guarantees tailored to your business needs.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit/debit cards, bank transfers, and money orders. Auto-pay customers receive a $5/month discount on any plan.",
  },
];

const featureKeys = Object.keys(plans[0].features);

const Plans = () => {
  return (
    <div>
      <SEO
        title="Plans & Pricing"
        description="Compare CoreWaveConnect Internet + TV bundles. Frontier Basic at $69.99/mo, Explorer Plus at $99.99/mo, and Summit Ultra at $149.99/mo with speeds up to 1+ Gbps."
        path="/plans"
      />
      {/* Hero */}
      <section className="py-20 lg:py-28 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
              Plans & Pricing
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Internet + TV <span className="text-gradient">Bundles</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground leading-relaxed">
              Choose the bundle that fits your needs. Speeds up to 1+ Gbps and 300+ TV channels with no hidden fees — available nationwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
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
                {plan.popular && <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-brand" />}
                {plan.popular && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-primary text-primary-foreground px-3 py-1">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mb-6">
                  {plan.speed} · {plan.channels} Channels
                </p>
                <div className="mb-6">
                  <span className="text-5xl font-black font-mono tabular-nums">${plan.price}</span>
                  <span className="text-sm text-muted-foreground">/mo</span>
                </div>
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

          {/* Comparison Table */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-2xl sm:text-3xl font-black text-center mb-10">
              Plan Comparison
            </motion.h2>
            <motion.div variants={fadeUp} custom={1} className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-xs uppercase tracking-widest text-muted-foreground font-medium">Feature</th>
                    {plans.map((p) => (
                      <th key={p.name} className="text-center py-4 px-4">
                        <span className="text-sm font-bold">{p.name}</span>
                        {p.popular && (
                          <span className="block text-[10px] text-primary font-mono mt-1">POPULAR</span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featureKeys.map((key) => (
                    <tr key={key} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-3 px-4 text-muted-foreground">{key}</td>
                      {plans.map((p) => {
                        const val = p.features[key as keyof typeof p.features];
                        return (
                          <td key={p.name} className="text-center py-3 px-4">
                            {typeof val === "boolean" ? (
                              val ? (
                                <Check className="h-4 w-4 text-secondary mx-auto" />
                              ) : (
                                <X className="h-4 w-4 text-muted-foreground/30 mx-auto" />
                              )
                            ) : (
                              <span className="font-mono text-foreground">{val}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  <tr>
                    <td className="py-4 px-4" />
                    {plans.map((p) => (
                      <td key={p.name} className="text-center py-4 px-4">
                        <Link
                          to="/contact"
                          className={`inline-flex items-center justify-center h-9 px-6 text-xs font-bold uppercase tracking-wider transition-colors ${
                            p.popular
                              ? "bg-gradient-brand text-primary-foreground hover:opacity-90"
                              : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          }`}
                        >
                          Select
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
              Enhance Your Plan
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-black">
              Premium Add-ons
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {addons.map((addon, i) => (
              <motion.div
                key={addon.name}
                variants={fadeUp}
                custom={i}
                className="glass-card p-6 hover:glow-cyan transition-shadow duration-500"
              >
                <h4 className="font-bold mb-1">{addon.name}</h4>
                <p className="text-xs text-muted-foreground mb-3">{addon.desc}</p>
                <p className="font-mono text-primary font-bold">+${addon.price}<span className="text-xs text-muted-foreground font-normal">/mo</span></p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* CTA */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-black mb-4">
              Need Help Choosing?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground mb-8">
              Our team is ready to help you find the perfect plan for your location and needs.
            </motion.p>
            <motion.a
              variants={fadeUp}
              custom={2}
              href="tel:+18886148407"
              className="inline-flex items-center justify-center gap-2 w-full h-12 bg-gradient-brand text-primary-foreground font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              <Phone className="h-4 w-4" />
              (888) 614-8407
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Plans;

