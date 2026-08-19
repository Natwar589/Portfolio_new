import React from "react";
import { motion } from "framer-motion";
import { BsPerson } from "react-icons/bs";
import { MdDocumentScanner } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { BiSolidContact } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", icon: <BsPerson className="text-xl md:text-xl" />, label: "About" },
  { to: "/resume", icon: <MdDocumentScanner className="text-xl md:text-xl" />, label: "Resume" },
  { to: "/project", icon: <GrProjects className="text-[18px] md:text-[18px]" />, label: "Work" },
  { to: "/contact", icon: <BiSolidContact className="text-xl md:text-xl" />, label: "Contact" },
];

const LeftBar = () => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="glass-card fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-row items-center justify-around w-[calc(100%-32px)] max-w-[380px] py-2.5 px-3 rounded-2xl shadow-2xl backdrop-blur-xl lg:static lg:translate-x-0 lg:w-[72px] lg:flex-col lg:py-5 lg:px-0 lg:sticky lg:top-[20px] lg:self-start lg:max-h-[calc(100vh-40px)] lg:justify-start lg:gap-3"
    >
      {navItems.map((item, i) => {
        const isActive = location.pathname === item.to;
        return (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <Link
              to={item.to}
              className="w-[60px] sm:w-[70px] lg:w-[50px] h-[48px] lg:h-[56px] rounded-xl flex flex-col justify-center items-center gap-1 transition-all duration-300 relative group"
              style={{
                background: isActive
                  ? "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(34,211,238,0.15))"
                  : "rgba(255,255,255,0.04)",
                border: isActive
                  ? "1px solid rgba(99,102,241,0.5)"
                  : "1px solid rgba(255,255,255,0.06)",
                color: isActive ? "#a78bfa" : "#64748b",
                boxShadow: isActive ? "0 0 20px rgba(99,102,241,0.25)" : "none",
              }}
            >
              {/* Active glow indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeNavDot"
                  className="absolute bottom-0 lg:bottom-auto lg:-left-0.5 lg:top-1/2 lg:-translate-y-1/2 w-8 lg:w-1 h-1 lg:h-6 rounded-t-full lg:rounded-t-none lg:rounded-r-full"
                  style={{ background: "linear-gradient(to right, #6366f1, #22d3ee)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <span
                style={{
                  color: isActive ? "#a78bfa" : "#64748b",
                  transition: "color 0.2s",
                }}
              >
                {item.icon}
              </span>
              <span
                className="text-[9px] font-medium"
                style={{ color: isActive ? "#94a3b8" : "#475569" }}
              >
                {item.label}
              </span>

              {/* Desktop Tooltip */}
              <div
                className="hidden lg:block absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200"
                style={{
                  background: "rgba(15,15,25,0.95)",
                  border: "1px solid rgba(99,102,241,0.3)",
                  color: "#e2e8f0",
                }}
              >
                {item.label}
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default LeftBar;
