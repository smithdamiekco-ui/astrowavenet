import { motion } from "framer-motion";
import { MapPin, Users, Signal, Target } from "lucide-react";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";

const aboutFaqs = [
  {
    q: "When was Astrowave TV Net founded?",
    a: "Astrowave TV Net was founded by Steve Alexander Lopez and has grown from a regional startup headquartered in Nome, Alaska to a trusted nationwide provider serving customers in all 50 states.",
  },
  {
    q: "What makes Astrowave different from other providers?",
    a: "We combine cutting-edge network infrastructure with a customer-first approach. Our 99.7% uptime guarantee, transparent pricing, and dedicated support set us apart from traditional providers.",
  },
  {
    q: "Does Astrowave serve businesses as well as homes?",
    a: "Yes. We offer both residential and business plans. Business customers can get custom plans with dedicated bandwidth, static IP addresses, and SLA guarantees. Call (888) 253-7498 for business inquiries.",
  },
  {
    q: "Where is Astrowave headquartered?",
    a: "Our headquarters is located at 405 Lomen Ave, Nome, Alaska 99762. While our roots are in Alaska, our network and service coverage extend across all 50 states.",
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

const About = () => {
  return (
    <div>
      <SEO
        title="About Us"
        description="Learn about Astrowave TV Net — founded by Steve Alexander Lopez to bring reliable high-speed internet and premium TV to homes and businesses across all 50 states."
        path="/about"
      />
      {/* Hero */}
      <section className="py-20 lg:py-28 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
              About Us
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Powering America's <span className="text-gradient">Connected Future</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground leading-relaxed">
              Astrowave TV Net was founded with a single mission: to bring reliable, high-speed internet
              and premium television to homes and businesses across the United States. Where others see limitations,
              we see opportunity.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div>
              <motion.p variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
                Our Mission
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-black mb-6">
                Connectivity is not a luxury — it's a necessity
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-4">
                Across the United States, millions of families and businesses depend on fast, reliable
                internet and TV for education, healthcare, remote work, and entertainment. At Astrowave,
                we believe everyone deserves access to world-class connectivity.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed">
                Astrowave TV Net leverages cutting-edge network infrastructure and nationwide coverage
                to deliver speeds up to 1+ Gbps and 300+ TV channels to homes and businesses in all 50 states.
              </motion.p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Signal, label: "Reliable Signal", value: "99.7% uptime" },
                { icon: Users, label: "Customers Served", value: "100K+" },
                { icon: MapPin, label: "Coverage Area", value: "All 50 States" },
                { icon: Target, label: "Years Operating", value: "10+" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  custom={i}
                  className="glass-card p-6 text-center"
                >
                  <item.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                  <div className="text-xl font-black font-mono text-foreground mb-1">{item.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
              Leadership
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-black mb-6">
              Steve Alexander Lopez
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground leading-relaxed mb-4">
              Founder & Owner
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed mb-4">
              Steve Alexander Lopez founded Astrowave TV Net with a vision to deliver premium internet
              and TV service to every American household. With a deep understanding of the challenges
              facing underserved communities, he set out to build a company that puts customers first.
            </motion.p>
            <motion.p variants={fadeUp} custom={4} className="text-muted-foreground leading-relaxed">
              Under his leadership, Astrowave has grown from a regional startup headquartered in Nome, Alaska
              to a trusted nationwide provider. Steve remains committed to expanding coverage, pushing speeds
              higher, and keeping prices fair for every American family.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Address */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
              Headquarters
            </motion.p>
            <motion.div variants={fadeUp} custom={1} className="inline-flex items-center gap-3 glass-card px-8 py-6">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span className="text-foreground font-medium">405 Lomen Ave, Nome, Alaska 99762</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={aboutFaqs} title="About Astrowave" subtitle="Questions" />
    </div>
  );
};

export default About;
