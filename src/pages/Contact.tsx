import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock, Headphones, CreditCard, Wifi } from "lucide-react";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";

const contactFaqs = [
  {
    q: "How long does it take to get a response?",
    a: "We typically respond to all inquiries within 24 hours during business days. For urgent technical issues, our 24/7 technical support line at (888) 614-8407 is always available.",
  },
  {
    q: "Can I manage my account online?",
    a: "Yes. Existing customers can manage their account, view bills, and make payments through our customer portal. Contact us for login credentials if you haven't set up your account yet.",
  },
  {
    q: "What should I do if my internet goes down?",
    a: "First, try restarting your modem and router. If the issue persists, call our 24/7 technical support at (888) 614-8407. Our team can run remote diagnostics and dispatch a technician if needed.",
  },
  {
    q: "How do I schedule a service appointment?",
    a: "You can schedule service appointments by calling (888) 614-8407 or by submitting a request through the contact form above. We offer flexible scheduling including weekday and Saturday appointments.",
  },
];
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const supportCategories = [
  { icon: Wifi, label: "Technical Support", desc: "Internet or TV issues" },
  { icon: CreditCard, label: "Billing", desc: "Payments & account" },
  { icon: Headphones, label: "New Service", desc: "Sign up or upgrade" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    category: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", address: "", category: "", message: "" });
  };

  return (
    <div>
      <SEO
        title="Contact & Support"
        description="Get in touch with CoreWaveConnect. Call (888) 614-8407 for technical support, billing, or to sign up for high-speed internet and TV service."
        path="/contact"
      />
      {/* Hero */}
      <section className="py-20 lg:py-28 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
              Contact & Support
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              We're Here <span className="text-gradient">to Help</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground leading-relaxed">
              Whether you need technical support, want to sign up for a new plan, or just have a question —
              our team is ready to assist.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {supportCategories.map((cat, i) => (
              <motion.button
                key={cat.label}
                variants={fadeUp}
                custom={i}
                onClick={() => setFormData({ ...formData, category: cat.label })}
                className={`glass-card p-6 text-left hover:glow-cyan transition-all duration-300 ${
                  formData.category === cat.label ? "border-primary glow-cyan" : ""
                }`}
              >
                <cat.icon className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold mb-1">{cat.label}</h3>
                <p className="text-xs text-muted-foreground">{cat.desc}</p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-black mb-6">
                Send Us a Message
              </motion.h2>
              <motion.form
                variants={fadeUp}
                custom={1}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-muted border-border h-11"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-muted border-border h-11"
                  />
                </div>
                <Input
                  placeholder="Service Address (Street, City, State, ZIP)"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="bg-muted border-border h-11"
                />
                <Textarea
                  placeholder="How can we help?"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-muted border-border resize-none"
                />
                <Button
                  type="submit"
                  className="w-full h-11 bg-gradient-brand text-primary-foreground font-bold uppercase tracking-wider hover:opacity-90"
                >
                  Send Message
                </Button>
              </motion.form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-black mb-6">
                Contact Information
              </motion.h2>

              <motion.div variants={fadeUp} custom={1} className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Phone</h4>
                    <a href="tel:+18886148407" className="text-primary font-mono hover:text-secondary transition-colors">
                      (888) 614-8407
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Address</h4>
                    <p className="text-sm text-muted-foreground">
                      405 Lomen Ave<br />
                      Nome, Alaska 99762
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Email</h4>
                    <a href="mailto:info@CoreWaveConnecttvnet.com" className="text-sm text-primary hover:text-secondary transition-colors">
                      info@CoreWaveConnecttvnet.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Business Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      Monday – Friday: 8:00 AM – 8:00 PM EST<br />
                      Saturday: 9:00 AM – 5:00 PM EST<br />
                      Sunday: Closed
                    </p>
                    <p className="text-xs text-primary mt-2">
                      24/7 Technical Support Available
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Owner */}
              <motion.div variants={fadeUp} custom={2} className="glass-card p-6">
                <p className="text-xs uppercase tracking-widest text-primary mb-2">Owner</p>
                <p className="font-bold">Steve Alexander Lopez</p>
                <p className="text-sm text-muted-foreground">CoreWaveConnect — Nationwide Service</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={contactFaqs} title="Support Questions" subtitle="Help" />
    </div>
  );
};

export default Contact;

