export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Hello, User!</h1>
      <p className="text-gray-600 mt-2">
        Welcome to your AI Productivity Hub. Get a quick overview of your tasks and tools below.
      </p>

      <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold text-lg">Tasks Today</h2>
          <p className="text-gray-600 mt-2">You have 5 tasks due today. Stay on track!</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold text-lg">Quick Summarize</h2>
          <textarea className="w-full mt-2 p-3 border rounded-lg" rows="3"></textarea>
          <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Summarize
          </button>
        </div>
      </div>
    </div>
  );
}
