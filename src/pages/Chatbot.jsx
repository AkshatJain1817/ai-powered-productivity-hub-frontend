export default function Chatbot() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">AI Chatbot</h1>
      <p className="text-gray-600 mt-2">Chat with our AI for instant answers and insights.</p>

      <div className="bg-white p-6 rounded-xl shadow mt-6 flex flex-col gap-3">
        <div className="bg-gray-100 p-3 rounded-lg">Hey there! How can I help?</div>
        <div className="flex gap-2">
          <input type="text" placeholder="Send a message..." className="flex-1 border p-3 rounded-lg" />
          <button className="bg-indigo-600 text-white px-4 rounded-lg hover:bg-indigo-700">Send</button>
        </div>
      </div>
    </div>
  );
}
