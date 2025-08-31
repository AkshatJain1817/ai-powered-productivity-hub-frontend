export default function EmailGenerator() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Email & Message Generator</h1>
      <p className="text-gray-600 mt-2">Draft professional emails and messages in seconds.</p>

      <div className="bg-white p-6 rounded-xl shadow mt-6">
        <textarea className="w-full p-3 border rounded-lg" rows="6" placeholder="Describe the email you want to generate..."></textarea>
        <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Generate Email
        </button>
      </div>
    </div>
  );
}
