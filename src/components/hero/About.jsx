import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiDocker,
  SiAmazonaws,
  SiGit,
  SiRedis,
  SiRabbitmq,
  SiC,
  SiCplusplus,
  SiOpenai,
  SiPostgresql,
} from "react-icons/si";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const skills = [
  { name: "React.js", icon: <SiReact className="text-sm" />, color: "#61dafb" },
  { name: "Next.js", icon: <SiNextdotjs className="text-sm" />, color: "#e2e8f0" },
  { name: "Node.js", icon: <SiNodedotjs className="text-sm" />, color: "#68d391" },
  { name: "TypeScript", icon: <SiTypescript className="text-sm" />, color: "#3178c6" },
  { name: "Python", icon: <SiPython className="text-sm" />, color: "#fbbf24" },
  { name: "MongoDB", icon: <SiMongodb className="text-sm" />, color: "#47a248" },
  { name: "Express.js", icon: <SiExpress className="text-sm" />, color: "#94a3b8" },
  { name: "Redis", icon: <SiRedis className="text-sm" />, color: "#dc382d" },
  { name: "RabbitMQ", icon: <SiRabbitmq className="text-sm" />, color: "#ff6600" },
  { name: "Docker", icon: <SiDocker className="text-sm" />, color: "#2496ed" },
  { name: "AWS", icon: <SiAmazonaws className="text-sm" />, color: "#ff9900" },
  { name: "Git", icon: <SiGit className="text-sm" />, color: "#f05032" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sm" />, color: "#38bdf8" },
  { name: "AI / LLM", icon: <SiOpenai className="text-sm" />, color: "#10a37f" },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sm" />, color: "#4169e1" },
];

const whatIDo = [
  {
    icon: "🤖",
    title: "AI Automation",
    desc: "Building AI agent workflows, LLM integrations, and end-to-end automation pipelines using cutting-edge models.",
    gradient: "from-violet-500/10 to-indigo-500/10",
    border: "rgba(139,92,246,0.25)",
  },
  {
    icon: "⚡",
    title: "MERN Stack Dev",
    desc: "Crafting scalable full-stack apps with React, Node.js, Express, and MongoDB. Focus on performance and clean architecture.",
    gradient: "from-cyan-500/10 to-blue-500/10",
    border: "rgba(34,211,238,0.25)",
  },
  {
    icon: "🔧",
    title: "Backend & APIs",
    desc: "Designing robust APIs with Python & Node.js microservices. Experience with Redis, RabbitMQ, and real-time systems.",
    gradient: "from-emerald-500/10 to-teal-500/10",
    border: "rgba(52,211,153,0.25)",
  },
  {
    icon: "🧩",
    title: "Problem Solving",
    desc: "Active on LeetCode, CodeChef & GFG. Passionate about DSA and optimizing algorithms for real-world challenges.",
    gradient: "from-amber-500/10 to-orange-500/10",
    border: "rgba(251,191,36,0.25)",
  },
];

const techLogos = [
  { name: "React", src: "/assets/react.png", icon: <SiReact color="#61dafb" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
  { name: "Node.js", icon: <SiNodedotjs color="#68d391" /> },
  { name: "Express", icon: <SiExpress color="#e2e8f0" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
  { name: "Python", icon: <SiPython color="#fbbf24" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
  { name: "JavaScript", src: "/assets/js.png", icon: <SiJavascript color="#f7df1e" /> },
  { name: "HTML5", src: "/assets/html.png", icon: <SiHtml5 color="#e34f26" /> },
  { name: "CSS3", src: "/assets/css.png", icon: <SiCss3 color="#1572b6" /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#38bdf8" /> },
  { name: "C", src: "/assets/c.png", icon: <SiC color="#a8b9cc" /> },
  { name: "C++", src: "/assets/cpp.png", icon: <SiCplusplus color="#00599c" /> },
  { name: "Java", src: "/assets/java.png" },
  { name: "SQL", src: "/assets/sql.png" },
  { name: "Docker", icon: <SiDocker color="#2496ed" /> },
  { name: "AWS", icon: <SiAmazonaws color="#ff9900" /> },
  { name: "Git", icon: <SiGit color="#f05032" /> },
  { name: "Redis", icon: <SiRedis color="#dc382d" /> },
  { name: "RabbitMQ", icon: <SiRabbitmq color="#ff6600" /> },
  { name: "AI / LLM", icon: <SiOpenai color="#10a37f" /> },
];

const About = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-8"
    >
      {/* Section Header */}
      <div className="section-header">
        <h1>About Me</h1>
        <div className="section-line" />
        <span className="text-xs px-2 py-1 rounded-full flex-shrink-0" style={{ background: "rgba(99,102,241,0.1)", color: "#a78bfa", border: "1px solid rgba(99,102,241,0.2)" }}>
          #OpenToWork
        </span>
      </div>

      {/* Bio */}
      <motion.div variants={stagger} initial="initial" animate="animate">
        <motion.p
          variants={fadeUp}
          className="leading-relaxed text-[14px] mb-4"
          style={{ color: "var(--text-secondary)" }}
        >
          Full-stack developer with <span style={{ color: "#a78bfa", fontWeight: 600 }}>1+ year of MERN stack experience</span> and hands-on exposure to Python, Redis, and RabbitMQ. Skilled in designing and delivering{" "}
          <span style={{ color: "#22d3ee", fontWeight: 600 }}>real-time, AI-enabled applications</span> with scalable frontend and robust backend architectures.
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="leading-relaxed text-[14px]"
          style={{ color: "var(--text-secondary)" }}
        >
          Interested in building <span style={{ color: "#6366f1", fontWeight: 600 }}>AI automation workflows</span>, model integrations, and end-to-end automation pipelines. Currently working at{" "}
          <span style={{ color: "#22d3ee", fontWeight: 600 }}>GTWY.AI</span>.
        </motion.p>
      </motion.div>

      {/* What I Do Cards */}
      <motion.div
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2 }}
        className="mt-8"
      >
        <h2 className="text-[16px] font-bold mb-4 font-['Space_Grotesk']" style={{ color: "var(--text-primary)" }}>
          What I Do
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {whatIDo.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 * i + 0.2, duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`p-4 rounded-xl bg-gradient-to-br ${item.gradient} backdrop-blur-sm transition-all duration-300`}
              style={{ border: `1px solid ${item.border}` }}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="text-[13px] font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                {item.title}
              </h3>
              <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="mt-8"
      >
        <h2 className="text-[16px] font-bold mb-4 font-['Space_Grotesk']" style={{ color: "var(--text-primary)" }}>
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * i + 0.5 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium cursor-default transition-all duration-200"
              style={{
                background: `${skill.color}12`,
                border: `1px solid ${skill.color}30`,
                color: skill.color,
              }}
            >
              {skill.icon}
              {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Tech Logo Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 overflow-hidden rounded-xl py-4"
        style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p className="text-center text-[10px] tracking-wider mb-3 uppercase font-semibold" style={{ color: "var(--text-muted)" }}>
          Tools & Technologies
        </p>
        <div className="overflow-hidden">
          <div className="tech-scroll-track">
            {[...techLogos, ...techLogos].map((tech, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1 flex-shrink-0 group"
              >
                <div
                  className="w-14 h-14 rounded-xl p-2.5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-indigo-500/50"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {tech.src ? (
                    <img src={tech.src} alt={tech.name} className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-2xl">{tech.icon}</span>
                  )}
                </div>
                <span className="text-[9px] font-medium" style={{ color: "var(--text-muted)" }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
