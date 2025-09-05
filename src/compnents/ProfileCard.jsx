import { useState } from "react";

export default function ProfileCard({ onProfileUpdate }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="w-full max-w-md bg-[#2a2a2a] text-white rounded-lg shadow-2xl p-6">
     
      <div className="border-b border-gray-700 pb-3 mb-4">
        <h2 className="text-lg font-semibold">Edit Profile</h2>
      </div>

      
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          onProfileUpdate();
        }}
      >
       
        <div>
          <label className="block text-sm mb-1 text-gray-300">Name</label>
          <input
            type="text"
            defaultValue="Oliver Noah"
            className="w-full px-3 py-2 bg-[#1e1e1e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

       
        <div>
          <label className="block text-sm mb-1 text-gray-300">Email</label>
          <input
            type="email"
            defaultValue="jenny@example.com"
            className="w-full px-3 py-2 bg-[#1e1e1e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

       
        <div>
          <label className="block text-sm mb-1 text-gray-300">
            New Password (optional)
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a new password"
              className="w-full px-3 py-2 bg-[#1e1e1e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-200"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        
        <div>
          <label className="block text-sm mb-1 text-gray-300">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Re-enter password"
              className="w-full px-3 py-2 bg-[#1e1e1e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-200"
            >
              {showConfirm ? "Hide" : "Show"}
            </button>
          </div>
        </div>

       
        <button
          type="submit"
          className="w-full py-2 bg-purple-700 hover:bg-purple-800 rounded-md font-medium transition"
        >
          Update
        </button>
      </form>
    </div>
  );
}
