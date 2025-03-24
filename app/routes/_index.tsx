import { Link } from "@remix-run/react";
import { FaFigma, FaGithub, FaHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-4">
      <div className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-lg">
        <div className="relative h-40 w-full">
          <img
            src="/assets/header.jpg"
            alt="Decorative background with swirls"
            width={1000}
            height={200}
            className="rounded-t-3xl object-cover"
          />
        </div>

        <div className="relative mx-auto mt-10 h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">
          <img
            src="/assets/pfp.jpg"
            alt="Profile"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>

        <div className="mt-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Tifany Nunes</h1>
          <p className="text-sm text-gray-600">
            Desenvolvedora Front-End | Web Designer
          </p>
        </div>

        <div className="mt-6 px-6">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">About</h2>
          <p className="text-gray-600">
            Desenvolvedor web criativo com paixão por design limpo e
            experiências de usuário intuitivas. Especializado em sites
            responsivos e frameworks modernos.
          </p>
        </div>

        <div className="m-6 flex justify-center space-x-4 px-6">
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

          <Link
            to={"https://pinuya.site/"}
            className="rounded-full transition-colors hover:text-purple-800"
            title="Portfolio"
          >
            <FaHeart className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
