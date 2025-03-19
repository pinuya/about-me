export default function Index() {
  return (
    <main className="flex flex-col items-center justify-center pt-4 text-white">
      <div className="relative flex flex-col items-center justify-center">
        <div className="h-48 w-full overflow-hidden">
          <img
            src="/assets/header.jpg"
            alt="Decorative background with swirls"
            width={1000}
            height={200}
            className="rounded-t-3xl object-cover"
          />
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1/4">
          <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white">
            <img
              src="/assets/pfp.jpg"
              alt="Profile"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 text-center font-lato">
        <h1 className="mb-2 text-3xl">Tifany Nunes</h1>
        <p className="text-sm text-gray-400">
          Front-End Developer & Web Designer
        </p>
      </div>
    </main>
  );
}
