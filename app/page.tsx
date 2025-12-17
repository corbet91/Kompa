import CardAi from "@/components/card-ai";

export default function Home() {
  return (
    <main className="px-6 py-8 flex-1 bg-gray-50 w-full overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <CardAi />
      </div>
    </main>
  );
}
