import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
            <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8">
                <div>
                    <h1 className="text-4xl font-bold">
                        Smart <span className="text-indigo-600">Productivity</span> Hub
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-sm">
                        Your AI-powered assistant for seamless task management, document summarization, and more.
                    </p>
                    <div className="mt-6 flex gap-4">
                        <Link to="/login" className="px-6 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700">
                            Login
                        </Link>
                        <Link to="/signup" className="px-6 py-2 bg-white border rounded-xl shadow hover:bg-gray-100">
                            Sign Up
                        </Link>
                    </div>
                </div>
                <div className="bg-teal-300 text-white font-semibold p-10 rounded-xl shadow-md transform rotate-6">
                    AI Productivity
                </div>
            </div>
        </div>
    )
}