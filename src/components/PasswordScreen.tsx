import React, { useState } from "react";
import { motion } from "motion/react";
import { Eye, EyeOff, Lock } from "lucide-react";

interface PasswordScreenProps {
  onSuccess: () => void;
}

export default function PasswordScreen({ onSuccess }: PasswordScreenProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For this app, let's use a simple password like "comfort" or "kaird"
    // The user specified the password "comcard101"
    if (password.toLowerCase() === "comcard101") {
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfbf7] p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-3xl p-10 shadow-xl shadow-stone-200/50 border border-stone-100"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-4 border border-stone-100">
            <Lock className="text-stone-400 w-6 h-6" />
          </div>
          <h2 className="text-2xl font-serif text-stone-800">Welcome Home</h2>
          <p className="text-stone-400 text-sm mt-1">Enter the key to your comfort</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              className={`w-full px-5 py-4 bg-stone-50 border ${
                error ? "border-red-300" : "border-stone-100"
              } rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all font-sans text-stone-700`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-[10px] text-center leading-relaxed"
            >
              Incorrect password. Please coordinate to our official TikTok account: <span className="font-bold">@k.1ttt6</span>
            </motion.p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 bg-stone-800 text-white rounded-2xl font-sans font-medium tracking-wide hover:bg-stone-700 transition-colors shadow-lg shadow-stone-200"
          >
            Access Kairds
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
