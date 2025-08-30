import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input type="text" className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input type="email" className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500" />
          </div>
          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <Link to="/login" className="text-indigo-600 font-semibold">Login</Link>
        </p>
        <p className="mt-2 text-center text-sm text-gray-500">
          <Link to="/" className="hover:underline">Back to Hero Page</Link>
        </p>
      </div>
    </div>
  );
}
