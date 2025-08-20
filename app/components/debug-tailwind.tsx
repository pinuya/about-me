export const DebugTest = () => {
  return (
    <div className="space-y-4 p-8">
      <h1 className="mb-6 text-2xl font-bold">Teste do Tailwind CSS</h1>

      <div className="bg-red-500 p-4 text-white">
        Teste 1: Se você vê isso vermelho, as cores funcionam
      </div>

      <div className="rounded bg-blue-500 p-4 text-white">
        Teste 2: rounded básico
      </div>

      <div className="rounded-lg bg-green-500 p-4 text-white">
        Teste 3: rounded-lg
      </div>

      <div className="rounded-2xl bg-purple-500 p-4 text-white">
        Teste 4: rounded-2xl
      </div>

      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-yellow-500 p-4 text-black">
        Teste 5: rounded-full
      </div>

      <div
        className="bg-pink-500 p-4 text-white"
        style={{ borderRadius: "12px" }}
      >
        Teste 6: CSS inline (border-radius: 12px)
      </div>

      <div className="rounded-lg border-2 border-white bg-gray-700 p-4 text-white">
        Teste 7: rounded-lg + border
      </div>
    </div>
  );
};
