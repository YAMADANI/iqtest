import Content from "./components/Content";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-slate-200 space-y-4">
      <h1 className="text-6xl font-bold text-teal-600">IQ教えたるで</h1>
      <div className="w-full max-w-2xl px-8 py-5 rounded-2xl bg-white">
        <Content />
      </div>
    </main>
  );
}
