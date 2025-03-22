import { Link } from "@remix-run/react";
import { Github, Instagram, Mail, Twitter } from "lucide-react";

export default function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-lg">
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
          <Link to={"/"} className="rounded-full">
            <Github className="h-5 w-5" />
          </Link>

          <Link to={"/"} className="rounded-full">
            <Twitter className="h-5 w-5" />
          </Link>

          <Link to={"/"} className="rounded-full">
            <Instagram className="h-5 w-5" />
          </Link>

          <Link to={"/"} className="rounded-full">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
