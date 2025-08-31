export default function Recommendations() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Recommendations</h1>
      <p className="text-gray-600 mt-2">AI-powered recommendations to boost your productivity.</p>

      <div className="bg-white p-6 rounded-xl shadow mt-6">
        <ul className="list-disc list-inside text-gray-700">
          <li>Recommended Task: "Brainstorm new marketing strategies"</li>
          <li>Suggested Document: "Read 'The 7 Habits of Highly Effective People'"</li>
          <li>Productivity Tip: "Take a 5-minute break every hour."</li>
        </ul>
      </div>
    </div>
  );
}
