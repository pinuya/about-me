import { Glassmorphic } from "~/components/glassmorphic";

export default function Index() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/gradient-background.jpg)",
        }}
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <Glassmorphic />
      </div>
    </div>
  );
}
