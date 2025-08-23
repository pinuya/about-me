import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
    {
      title: "ToDo/Pomodoro App",
      href: "https://to-do-app-eight-rho-67.vercel.app/",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Weather Dashboard",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
    },
    {
      title: "Portfolio Template",
      href: "https://github.com/pinuya/portfolio-template",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/gradient-background.jpg)",
        }}
      />

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
                Alguns dos meus trabalhos recentes
              </motion.p>

              <div className="space-y-4">
                {projects.map((project, index) => {
                  const IconComponent = project.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <a
                        href={project.href}
                        className="flex items-center space-x-4 rounded-lg border border-transparent bg-transparent p-4 transition-all duration-300 ease-out hover:border-white/20 hover:bg-white/15 hover:shadow-lg hover:shadow-black/20"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconComponent className="h-5 w-5" />
                        <h3 className="font-medium text-white">
                          {project.title}
                        </h3>
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
