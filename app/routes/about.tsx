import { motion } from "framer-motion";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { TbBrandTypescript } from "react-icons/tb";

export default function About() {
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
        className="xl relative flex w-full max-w-2 flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md md:p-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid w-full gap-8 md:grid-cols-2">
          <motion.div className="space-y-6" variants={itemVariants}>
            <p className="leading-relaxed text-white/80">
              Sou uma desenvolvedora apaixonada por tecnologia e inovação. Com
              experiência em desenvolvimento web moderno, busco sempre criar
              soluções que combinam funcionalidade e design excepcional.
            </p>
            <p className="leading-relaxed text-white/80">
              Minha jornada na programação começou há alguns anos e desde então
              tenho me dedicado a aprender novas tecnologias e aprimorar minhas
              habilidades constantemente.
            </p>
          </motion.div>

          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-3"
                variants={itemVariants}
              >
                <div className="h-3 w-3">
                  <FaReact />
                </div>
                <span className="text-white/80">React & Next.js</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                variants={itemVariants}
              >
                <div className="h-3 w-3">
                  <TbBrandTypescript />
                </div>
                <span className="text-white/80">JavaScript & TypeScript</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                variants={itemVariants}
              >
                <div className="h-3 w-3">
                  <GoPencil />
                </div>
                <span className="text-white/80">UI/UX Design</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                variants={itemVariants}
              >
                <div className="h-3 w-3">
                  <FaNodeJs />
                </div>
                <span className="text-white/80">Node.js & APIs</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 w-full border-t border-white/20 pt-8 text-center"
          variants={itemVariants}
        >
          <p className="text-sm text-white/70 md:text-base">
            "A tecnologia é melhor quando aproxima as pessoas." - Matt Mullenweg
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
