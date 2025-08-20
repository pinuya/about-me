export const Glassmorphic = () => {
  return (
    <div className="flex w-full max-w-md overflow-hidden rounded-2xl border border-white/30 bg-white/20 shadow-2xl backdrop-blur-md">
      <div className="relative w-full p-6">
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />

        <div className="relative z-10 text-white">
          <p className="mb-6 text-white/80">
            Desenvolvedora Front-End | Web Designer
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <h3 className="mb-1 font-semibold text-white">Sobre Mim</h3>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <h3 className="mb-1 font-semibold text-white">Projetos</h3>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <h3 className="mb-1 font-semibold text-white">Contato</h3>
            </div>
          </div>

          <button className="mt-6 w-full rounded-lg border border-white/30 bg-white/20 px-4 py-3 font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/30">
            Ver Portfólio Completo
          </button>
        </div>
      </div>
    </div>
  );
};
