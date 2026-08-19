import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const projects = [
  {
    title: "GTWY AI",
    category: "AI Platform",
    desc: "AI agent deployment platform supporting memory, RAG workflows, and multi-channel deployment across chat, WhatsApp, email, Slack, and APIs.",
    icon: "🤖",
    tags: ["React", "Next.js", "Node.js", "Python", "AI/RAG", "WebSocket"],
    github: "https://github.com/Natwar589",
    demo: "https://gtwy.ai",
    gradient: "from-violet-500/15 to-indigo-500/10",
    accent: "#a78bfa",
    featured: true,
  },
  {
    title: "Chat Web Application",
    category: "Real-time App",
    desc: "Real-time chat application with React frontend and Node.js backend using WebSocket for scalable cross-device messaging and media sharing.",
    icon: "💬",
    tags: ["React", "Node.js", "WebSocket", "MongoDB"],
    github: "https://github.com/Natwar589",
    demo: "#",
    gradient: "from-cyan-500/15 to-blue-500/10",
    accent: "#22d3ee",
    featured: true,
  },
  {
    title: "Food Ordering App",
    category: "Web App",
    desc: "Responsive food delivery web application with React.js and Tailwind CSS frontend; backend data retrieval optimized using Express.js and Node.js.",
    icon: "🍔",
    tags: ["React", "Tailwind CSS", "Node.js", "Express"],
    github: "https://github.com/Natwar589/food-delivery",
    demo: "https://main--rococo-capybara-b352eb.netlify.app/",
    gradient: "from-orange-500/15 to-amber-500/10",
    accent: "#fb923c",
  },
  {
    title: "Blog Website",
    category: "Full Stack",
    desc: "A platform to share thoughts and images using Appwrite as backend-as-a-service with real-time updates.",
    icon: "📝",
    tags: ["React", "Appwrite", "BaaS"],
    github: "https://github.com/Natwar589/blog",
    demo: "https://neon-wisp-d59fa1.netlify.app/",
    gradient: "from-pink-500/15 to-rose-500/10",
    accent: "#f472b6",
  },
  {
    title: "Contact Store",
    category: "Firebase App",
    desc: "Store and manage contacts with email and phone number using Firebase Firestore as a real-time database.",
    icon: "📋",
    tags: ["React", "Firebase", "Firestore"],
    github: "https://github.com/Natwar589/firebase-contact",
    demo: "https://main--illustrious-lollipop-3d57b8.netlify.app/",
    gradient: "from-blue-500/15 to-sky-500/10",
    accent: "#60a5fa",
  },
  {
    title: "Tower of Hanoi",
    category: "Game",
    desc: "Interactive Tower of Hanoi puzzle game built with React featuring animations and step tracking.",
    icon: "🗼",
    tags: ["React", "JavaScript", "Animation"],
    github: "https://github.com/Natwar589/tower-of-hanoi",
    demo: "https://rad-cuchufli-d4b69d.netlify.app",
    gradient: "from-emerald-500/15 to-teal-500/10",
    accent: "#34d399",
  },
];

const categories = ["All", "AI Platform", "Real-time App", "Web App", "Full Stack", "Firebase App", "Game"];

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

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
        <h1>Projects</h1>
        <div className="section-line" />
        <span className="text-xs px-2 py-1 rounded-full flex-shrink-0" style={{ background: "rgba(34,211,238,0.1)", color: "#22d3ee", border: "1px solid rgba(34,211,238,0.2)" }}>
          {projects.length} projects
        </span>
      </div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap gap-2 mb-6"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className="text-[10px] px-3 py-1.5 rounded-full font-medium transition-all duration-200"
            style={{
              background: activeFilter === cat
                ? "linear-gradient(135deg, #6366f1, #22d3ee)"
                : "rgba(255,255,255,0.04)",
              color: activeFilter === cat ? "white" : "var(--text-muted)",
              border: activeFilter === cat ? "none" : "1px solid rgba(255,255,255,0.08)",
              boxShadow: activeFilter === cat ? "0 0 15px rgba(99,102,241,0.35)" : "none",
            }}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Project Grid */}
      <motion.div layout className="grid grid-cols-2 gap-4">
        <AnimatePresence>
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 ${project.featured ? "col-span-2" : ""}`}
              style={{
                background: `radial-gradient(ellipse at top left, ${project.accent}08, transparent), rgba(255,255,255,0.03)`,
                border: `1px solid ${project.accent}25`,
              }}
            >
              {project.featured && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-[9px] px-2 py-0.5 rounded-full font-medium" style={{ background: `${project.accent}20`, color: project.accent, border: `1px solid ${project.accent}40` }}>
                    ⭐ Featured
                  </span>
                </div>
              )}

              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${project.accent}15`, border: `1px solid ${project.accent}30` }}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <span className="text-[9px] font-medium" style={{ color: project.accent }}>
                      {project.category}
                    </span>
                    <h3 className="text-[14px] font-bold font-['Space_Grotesk']" style={{ color: "var(--text-primary)" }}>
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[12px] leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium"
                      style={{
                        background: `${project.accent}10`,
                        color: project.accent,
                        border: `1px solid ${project.accent}20`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Link
                    to={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "var(--text-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.color = "#e2e8f0";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                  >
                    <FaGithub className="text-sm" />
                    GitHub
                  </Link>
                  {project.demo && project.demo !== "#" && (
                    <Link
                      to={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-200"
                      style={{
                        background: `${project.accent}15`,
                        border: `1px solid ${project.accent}30`,
                        color: project.accent,
                      }}
                    >
                      <FaExternalLinkAlt className="text-[10px]" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>

              {/* Subtle glow line at top */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(to right, transparent, ${project.accent}60, transparent)` }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Project;
