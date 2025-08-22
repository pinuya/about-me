import { Link, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import { BsPerson } from "react-icons/bs";
import { FaRegFolderOpen } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

export const Glassmorphic = () => {
  const location = useLocation();

  const menuItems = [
    {
      to: "/about",
      icon: BsPerson,
      label: "Sobre",
      isActive: location.pathname === "/about",
    },
    {
      to: "/projects",
      icon: FaRegFolderOpen,
      label: "Projetos",
      isActive: location.pathname === "/projects",
    },
    {
      to: "/contact",
      icon: FiMessageSquare,
      label: "Contato",
      isActive: location.pathname === "/contact",
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const footerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex w-full max-w-md overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md">
        <div className="relative w-full p-6">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />

          <div className="relative z-10 text-white">
            <motion.p className="mb-6 text-white/80" variants={itemVariants}>
              Desenvolvedora Front-End | Web Designer
            </motion.p>

            <div className="space-y-4">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.to}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={item.to}
                      className={`
                        flex items-center space-x-4 rounded-lg border p-4 transition-all duration-300 ease-out
                        ${
                          item.isActive
                            ? "border-white/20 bg-white/15 shadow-lg shadow-black/20"
                            : "border-transparent bg-transparent hover:border-white/20 hover:bg-white/15 hover:shadow-lg hover:shadow-black/20"
                        }
                      `}
                    >
                      <IconComponent className="h-5 w-5" />
                      <h3 className="font-medium text-white">{item.label}</h3>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-8 w-full max-w-md"
        variants={footerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <motion.a
            href="https://pinuya-dev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl border border-white/20 bg-white/10 px-4 py-2 shadow-lg backdrop-blur-md transition-all duration-300 ease-out hover:scale-105 hover:bg-white/15"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xs font-medium text-white/80">
              {"developed with ❤️ by pinuya"}
            </span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};
