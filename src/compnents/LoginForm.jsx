import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import logo from "../images/image1.png";

export default function LoginForm() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!email) newErrors.push("The email field is required.");
    if (!password) newErrors.push("The password field is required.");

    setErrors(newErrors);

    if (newErrors.length === 0) {

      navigate("/dashboard"); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm">
        <img src={logo} alt="logo" className="h-12 mx-auto mb-4" />

        {errors.length > 0 && (
          <div className="bg-red-100 text-red-700 text-sm rounded-md p-3 mb-4 relative">
            <ul className="list-disc pl-5 space-y-1">
              {errors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
            <button
              onClick={() => setErrors([])}
              className="absolute top-2 right-2 text-red-600 font-bold"
            >
              ✕
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="jenny@example.com"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-lg font-medium hover:bg-purple-800 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-purple-600 font-semibold">
            Register Now
          </a>
        </p>
      </div>
    </div>
  );
}
