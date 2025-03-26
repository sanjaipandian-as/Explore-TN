import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white w-full max-w-sm p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <button className="w-1/2 text-center text-white bg-blue-600 py-2 rounded-t-lg">
            Login
          </button>
          <Link to="/signup" className="w-1/2 text-center bg-gray-200 py-2 rounded-t-lg">
            Signup
          </Link>
        </div>

        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Login Form</h2>

        <div className="space-y-4 text-black">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-4 text-gray-500" />
            <input
              type="email"
              placeholder="Email Address"
              className="pl-10 pr-4 py-3 w-full border rounded-lg bg-gray-100"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-4 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="pl-10 pr-4 py-3 w-full border rounded-lg bg-gray-100"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Login
          </button>
        </div>

        <div className="mt-4">
          <button 
            onClick={() => navigate("/")} 
            className="w-full bg-gray-200 text-black py-3 rounded-lg hover:bg-gray-300">
            Go Back
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
