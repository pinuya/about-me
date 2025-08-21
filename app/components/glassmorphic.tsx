import { Link, useLocation } from "@remix-run/react";
import { BsPerson } from "react-icons/bs";
import { FaRegFolderOpen } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

export const Glassmorphic = () => {
  const location = useLocation();

  const menuItems = [
    {
      to: "/",
      icon: BsPerson,
      label: "Sobre",
      isActive: location.pathname === "/",
    },
    {
      to: "/projetos",
      icon: FaRegFolderOpen,
      label: "Projetos",
      isActive: location.pathname === "/projetos",
    },
    {
      to: "/contato",
      icon: FiMessageSquare,
      label: "Contato",
      isActive: location.pathname === "/contato",
    },
  ];

  return (
    <div className="relative">
      <div className="flex w-full max-w-md overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md">
        <div className="relative w-full p-6">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />

          <div className="relative z-10 text-white">
            <p className="mb-6 text-white/80">
              Desenvolvedora Front-End | Web Designer
            </p>

            <div className="space-y-4">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`
                      flex items-center space-x-4 rounded-lg border p-4 transition-all duration-300 ease-out
                      ${
                        item.isActive
                          ? "border-white/20 bg-white/15 shadow-lg shadow-black/20"
                          : "border-transparent bg-transparent hover:border-white/20 hover:bg-white/15 hover:shadow-lg hover:shadow-black/20 hover:scale-[1.02]"
                      }
                    `}
                  >
                    <IconComponent className="h-5 w-5" />
                    <h3 className="font-medium text-white">{item.label}</h3>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full max-w-md">
        <div className="text-center">
          <a
            href="https://pinuya-dev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl border border-white/20 bg-white/10 px-4 py-2 shadow-lg backdrop-blur-md transition-all duration-300 ease-out hover:scale-105 hover:bg-white/15"
          >
            <span className="text-xs font-medium text-white/80">
              {"developed with ❤️ by pinuya"}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
