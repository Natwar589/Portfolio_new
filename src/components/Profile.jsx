import React from "react";
import { motion } from "framer-motion";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/Natwar589",
    color: "#e2e8f0",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/natwar-singh-rathor-617190215/",
    color: "#0ea5e9",
    label: "LinkedIn",
  },
  {
    icon: <AiFillInstagram />,
    href: "https://www.instagram.com/___nsr__/",
    color: "#f472b6",
    label: "Instagram",
  },
  {
    icon: <FaXTwitter />,
    href: "https://x.com/natwar_rathor?t=CmuaFZZYtzTwDcPcA1XzDQ&s=09",
    color: "#e2e8f0",
    label: "Twitter",
  },
];

const contactInfo = [
  {
    icon: <HiPhone className="text-lg" />,
    label: "Phone",
    value: "+91 9977020949",
    color: "#22d3ee",
  },
  {
    icon: <HiMail className="text-lg" />,
    label: "Email",
    value: "natwarrathor961@gmail.com",
    color: "#a78bfa",
  },
  {
    icon: <HiLocationMarker className="text-lg" />,
    label: "Location",
    value: "Indore, Madhya Pradesh",
    color: "#34d399",
  },
];

const containerVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Profile = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="glass-card w-full lg:w-[240px] flex-shrink-0 static lg:sticky lg:top-[20px] self-stretch lg:self-start flex flex-col items-center p-4 sm:p-6 gap-4 sm:gap-5"
      style={{ maxHeight: "none", overflowY: "visible" }}
    >
      {/* Profile Image */}
      <motion.div
        variants={itemVariants}
        className="relative flex flex-col items-center"
      >
        <div className="relative">
          {/* Glowing ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, #6366f1, #22d3ee, #a78bfa, #6366f1)",
              padding: "2px",
              borderRadius: "9999px",
              filter: "blur(1px)",
            }}
          />
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            src="/assets/myImage.jpg"
            alt="Natwar Singh Rathor"
            className="relative w-[110px] h-[110px] rounded-full object-cover"
            style={{
              border: "3px solid transparent",
              background:
                "linear-gradient(#0d0d1a, #0d0d1a) padding-box, linear-gradient(135deg, #6366f1, #22d3ee) border-box",
            }}
          />
          {/* Online dot */}
          <span
            className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-green-400 border-2 border-[#0d0d1a]"
            style={{ boxShadow: "0 0 8px #4ade80" }}
          />
        </div>

        <motion.h2
          variants={itemVariants}
          className="mt-4 text-[15px] font-bold font-['Space_Grotesk'] text-center"
          style={{ color: "#e2e8f0" }}
        >
          Natwar Singh Rathor
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="mt-1 px-3 py-1 rounded-full text-[10px] font-medium text-center"
          style={{
            background: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.3)",
            color: "#a78bfa",
          }}
        >
          MERN Stack · AI Automation
        </motion.div>
      </motion.div>

      {/* Divider */}
      <div className="w-full h-px" style={{ background: "var(--glass-border)" }} />

      {/* Social Icons */}
      <motion.div variants={itemVariants} className="flex gap-3">
        {socialLinks.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.25, y: -3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <Link
              to={s.href}
              target="_blank"
              rel="noreferrer"
              title={s.label}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-base transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: s.color,
              }}
            >
              {s.icon}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
      <div className="w-full h-px" style={{ background: "var(--glass-border)" }} />

      {/* Contact Info */}
      <motion.div variants={itemVariants} className="w-full flex flex-col gap-3">
        {contactInfo.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 p-2 rounded-lg transition-all duration-200"
            whileHover={{ x: 4 }}
            style={{
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: `${item.color}15`,
                color: item.color,
              }}
            >
              {item.icon}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[9px] font-medium" style={{ color: "var(--text-muted)" }}>
                {item.label}
              </span>
              <span
                className="text-[10px] font-medium truncate"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.value}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
      <div className="w-full h-px" style={{ background: "var(--glass-border)" }} />

      {/* Download CV */}
      <motion.a
        variants={itemVariants}
        href="https://resume.devstack.in"
        target="_blank"
        rel="noreferrer"
        className="btn-glow w-full justify-center text-[12px] py-2.5"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        View Resume
      </motion.a>
    </motion.div>
  );
};

export default Profile;
