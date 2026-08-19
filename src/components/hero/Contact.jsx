import React, { useState } from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const contactLinks = [
  {
    icon: "📧",
    label: "Email",
    value: "natwarrathor961@gmail.com",
    href: "mailto:natwarrathor961@gmail.com",
    color: "#a78bfa",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+91 9977020949",
    href: "tel:+919977020949",
    color: "#22d3ee",
  },
  {
    icon: "🔗",
    label: "LinkedIn",
    value: "natwar-singh-rathor",
    href: "https://www.linkedin.com/in/natwar-singh-rathor-617190215/",
    color: "#60a5fa",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "Natwar589",
    href: "https://github.com/Natwar589",
    color: "#e2e8f0",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-4 sm:p-6 md:p-8"
    >
      {/* Header */}
      <div className="section-header">
        <h1>Contact</h1>
        <div className="section-line" />
      </div>

      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-[12px] sm:text-[13px] mb-6 leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        Open to exciting opportunities, collaborations, and conversations. Drop a message — I'll get back to you soon! 🚀
      </motion.p>

      {/* Quick Contact Cards */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
      >
        {contactLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.08 }}
            whileHover={{ y: -3, scale: 1.02 }}
            className="flex items-center gap-3 p-3 rounded-xl no-underline transition-all duration-300"
            style={{
              background: `${link.color}08`,
              border: `1px solid ${link.color}20`,
            }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: `${link.color}15` }}
            >
              {link.icon}
            </div>
            <div className="min-w-0">
              <p className="text-[9px] font-medium" style={{ color: "var(--text-muted)" }}>
                {link.label}
              </p>
              <p className="text-[11px] font-semibold truncate" style={{ color: link.color }}>
                {link.value}
              </p>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-6 rounded-xl"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <h2 className="text-[15px] font-bold mb-5 font-['Space_Grotesk']" style={{ color: "var(--text-primary)" }}>
          Send a Message
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="dark-input"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="dark-input"
            />
          </div>

          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="dark-input"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message..."
            required
            rows={4}
            className="dark-input resize-none"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-xl font-semibold text-[13px] transition-all duration-300 relative overflow-hidden"
            style={{
              background: sent
                ? "linear-gradient(135deg, #10b981, #34d399)"
                : "linear-gradient(135deg, #6366f1, #22d3ee)",
              color: "white",
              boxShadow: sent
                ? "0 0 25px rgba(16,185,129,0.4)"
                : "0 0 25px rgba(99,102,241,0.35)",
            }}
          >
            {sent ? "✓ Message Sent!" : "Send Message →"}
          </motion.button>
        </form>
      </motion.div>

      {/* Availability */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-5 flex items-center gap-2 justify-center"
      >
        <span className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: "0 0 8px #4ade80", animation: "pulse 2s infinite" }} />
        <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
          Currently available for full-time roles & freelance projects
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
