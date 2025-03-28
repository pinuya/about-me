import { Link } from "@remix-run/react";
import { FaFigma, FaGithub, FaHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage:
          "linear-gradient(to right, #222222 1px, transparent 1px), linear-gradient(to bottom, #222222 1px, transparent 1px)",
        backgroundSize: "30px 30px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-lg"
      >
        <div className="relative h-40 w-full">
          <img
            src="/assets/header.gif"
            alt="Decorative background with swirls"
            width={1000}
            height={200}
            className="rounded-t-3xl object-cover"
          />
        </div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative mx-auto mt-10 h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg"
        >
          <img
            src="/assets/pfp.jpg"
            alt="Profile"
            width={128}
            height={128}
            className="object-cover"
          />
        </motion.div>

        <div className="mt-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Tifany Nunes</h1>
          <p className="text-sm text-gray-600">
            Desenvolvedora Front-End | Web Designer
          </p>
        </div>

        <div className="mt-6 px-6">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">About</h2>
          <p className="text-sm text-gray-600">
            Oi, esse carrd é um carrd informativo, onde possui contato
            profissional e acesso ao meu portfólio. Eu sou uma desenvolvedora
            Front-End e Web Designer. Gosto muito de desenvolver interfaces e
            utilizar frameworks modernos.
          </p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="m-6 flex justify-center space-x-4 px-6"
        >
          <Link
            to={"https://pinuya.site/"}
            className="rounded-full transition-colors hover:text-purple-800"
            title="Portfolio"
          >
            <FaHeart className="h-5 w-5" />
          </Link>
          <Link
            to={"https://github.com/pinuya"}
            className="rounded-full transition-colors hover:text-purple-800"
            title="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </Link>

          <Link
            to={"https://x.com/pinuyami"}
            className="rounded-full transition-colors hover:text-purple-800"
            title="Twitter (X)"
          >
            <FaXTwitter className="h-5 w-5" />
          </Link>

          <Link
            to={"https://www.figma.com/@tifany1"}
            className="rounded-full transition-colors hover:text-purple-800"
            title="Figma"
          >
            <FaFigma className="h-5 w-5" />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
