import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const education = [
  {
    degree: "Bachelor of Technology — Computer Science",
    institution: "Indore Institute of Science & Technology",
    period: "2021 – 2025",
    icon: "🎓",
    color: "#6366f1",
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Gurukul Academy",
    period: "2018 – 2020",
    extra: "Score: 81%",
    icon: "📚",
    color: "#22d3ee",
  },
  {
    degree: "Matriculation (Class X)",
    institution: "Gurukul Academy",
    period: "2018",
    extra: "Score: 90%",
    icon: "🏫",
    color: "#a78bfa",
  },
];

const experience = [
  {
    role: "Software Developer",
    company: "GTWY.AI",
    period: "2024 – Present",
    type: "Full-time",
    color: "#22d3ee",
    points: [
      "Led frontend development using React and Next.js; integrated Node.js and Python-based microservices to support AI agent interactions and automation workflows",
      "Built scalable MERN-based APIs and Python services with end-to-end testing to improve reliability and performance",
      "Implemented Generative AI features including AI workflow orchestration, model integrations, and real-time experiences",
    ],
    tags: ["React", "Next.js", "Node.js", "Python", "AI/LLM", "RAG"],
  },
];

const certifications = [
  {
    title: "AWS Academy Cloud Foundation",
    issuer: "Amazon Web Services",
    icon: "☁️",
    color: "#fb923c",
  },
  {
    title: "Google Cloud Career Practitioners Pathway",
    issuer: "Google Cloud",
    icon: "🌐",
    color: "#4ade80",
  },
];

const codingPlatforms = [
  {
    name: "Coding Ninjas",
    img: "/assets/studio.webp",
    href: "https://www.naukri.com/code360/profile/f0a2fd8b-8bd0-4c0f-9003-480b87aa26c5",
    color: "#f97316",
  },
  {
    name: "LeetCode",
    img: "/assets/leetcode.png",
    href: "https://leetcode.com/nsr1078/",
    color: "#fbbf24",
  },
  {
    name: "CodeChef",
    img: "/assets/codechef.png",
    href: "https://www.codechef.com/users/nsr39",
    color: "#e879f9",
  },
  {
    name: "GeeksforGeeks",
    img: "/assets/gfg.png",
    href: "https://auth.geeksforgeeks.org/user/natwarrathorcs2021",
    color: "#4ade80",
  },
];

const Resume = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-8"
    >
      {/* Header */}
      <div className="section-header">
        <h1>Resume</h1>
        <div className="section-line" />
      </div>

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">💼</span>
          <h2 className="text-[15px] font-bold font-['Space_Grotesk']" style={{ color: "var(--text-primary)" }}>
            Experience
          </h2>
        </div>
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            whileHover={{ x: 4 }}
            className="rounded-xl p-5 transition-all duration-300"
            style={{
              background: `rgba(34,211,238,0.06)`,
              border: `1px solid rgba(34,211,238,0.2)`,
            }}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-[14px] font-bold" style={{ color: "#22d3ee" }}>
                  {exp.role}
                </h3>
                <p className="text-[12px] font-medium" style={{ color: "var(--text-secondary)" }}>
                  {exp.company}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "rgba(34,211,238,0.1)", color: "#22d3ee", border: "1px solid rgba(34,211,238,0.25)" }}>
                  {exp.type}
                </span>
                <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>{exp.period}</span>
              </div>
            </div>

            <ul className="mt-3 space-y-1.5 mb-3">
              {exp.points.map((pt, j) => (
                <li key={j} className="flex items-start gap-2 text-[11px]" style={{ color: "var(--text-muted)" }}>
                  <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#22d3ee" }} />
                  {pt}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {exp.tags.map((tag, j) => (
                <span key={j} className="px-2 py-0.5 rounded-md text-[10px] font-medium" style={{ background: "rgba(99,102,241,0.12)", color: "#a78bfa", border: "1px solid rgba(99,102,241,0.2)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">🎓</span>
          <h2 className="text-[15px] font-bold font-['Space_Grotesk']" style={{ color: "var(--text-primary)" }}>
            Education
          </h2>
        </div>

        <div className="relative pl-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + i * 0.12 }}
              className="timeline-item"
            >
              <div className="timeline-dot" style={{ background: `linear-gradient(135deg, ${edu.color}, #6366f1)`, boxShadow: `0 0 10px ${edu.color}60` }} />
              <motion.div
                whileHover={{ x: 4 }}
                className="p-3 rounded-xl transition-all duration-300"
                style={{ background: `${edu.color}08`, border: `1px solid ${edu.color}20` }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[13px] font-semibold" style={{ color: "var(--text-primary)" }}>
                      {edu.degree}
                    </p>
                    <p className="text-[11px] mt-0.5" style={{ color: "var(--text-muted)" }}>
                      {edu.institution}
                    </p>
                    {edu.extra && (
                      <p className="text-[10px] mt-1 font-medium" style={{ color: edu.color }}>
                        {edu.extra}
                      </p>
                    )}
                  </div>
                  <span className="text-[10px] ml-3 flex-shrink-0" style={{ color: "var(--text-muted)" }}>
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">🏆</span>
          <h2 className="text-[15px] font-bold font-['Space_Grotesk']" style={{ color: "var(--text-primary)" }}>
            Certifications
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="p-4 rounded-xl text-center"
              style={{ background: `${cert.color}08`, border: `1px solid ${cert.color}25` }}
            >
              <div className="text-2xl mb-2">{cert.icon}</div>
              <p className="text-[11px] font-semibold" style={{ color: cert.color }}>
                {cert.title}
              </p>
              <p className="text-[9px] mt-1" style={{ color: "var(--text-muted)" }}>
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Coding Platforms */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">💻</span>
          <h2 className="text-[15px] font-bold font-['Space_Grotesk']" style={{ color: "var(--text-primary)" }}>
            DSA Platforms
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {codingPlatforms.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 + i * 0.1 }}
              whileHover={{ y: -5, scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={p.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300"
                style={{
                  background: `${p.color}08`,
                  border: `1px solid ${p.color}20`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-full p-1.5 flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.06)", boxShadow: `0 0 15px ${p.color}30` }}
                >
                  <img src={p.img} alt={p.name} className="w-full h-full object-contain rounded-full" />
                </div>
                <span className="text-[9px] text-center font-medium" style={{ color: "var(--text-muted)" }}>
                  {p.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
