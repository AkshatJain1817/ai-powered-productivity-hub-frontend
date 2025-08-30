import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
            <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Welcome Back!
                </h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Email Address</label>
                        <input type="email" className="w-full mt-1 p-3 border rounded-xl focus:ring-indigo-500" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input type="password" className="w-full mt-1 p-3 border rounded-xl focus:ring-indigo-500" />
                    </div>
                    <p className="text-right text-sm text-indigo-600 hover:underline cursor-pointer">Forgot your password?</p>
                    <button className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition">
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-ms text-gray-600">
                    Don't have an account? <Link to="/signup" className="text-indigo-600 font-semibold">Sign up</Link>
                </p>
                <p className="mt-2 text-center text-sm text-gray-500">
                    <Link to="/" className="hover:underline">Back to Home</Link>
                </p>
            </div>
        </div>
    )
}