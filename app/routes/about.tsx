export default function About() {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/gradient-background.jpg)",
        }}
      />

      <div className="relative flex w-full max-w-md items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
        <h1 className="text-4xl font-bold text-white">Sobre Mim</h1>
      </div>
    </div>
  );
}
