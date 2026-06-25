import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // API call would go here
    setTimeout(() => setIsLoading(false), 2000);
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex w-full h-screen max-w-6xl overflow-hidden md:h-auto md:rounded-2xl md:shadow-xl">
        {/* Left Side - Branding */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate="visible"
          className="relative flex-col justify-between hidden p-12 overflow-hidden md:flex md:w-1/2 bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600"
        >
          {/* Decorative circles */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-96 h-96 bg-teal-400/30 blur-3xl" />
          <div className="absolute rounded-full -bottom-20 -right-20 w-80 h-80 bg-teal-300/20 blur-3xl" />

          <div className="relative z-10">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Your time is valuable.
            </h2>
            <p className="mb-4 text-lg text-teal-50">
              Have no time or feeling bored with long documents?
            </p>
            <p className="mb-2 font-semibold text-white">
              Summarize long documents{" "}
              <span className="text-teal-100">to smaller ones</span>
            </p>
            <p className="text-teal-50">
              so you can understand{" "}
              <span className="font-semibold text-white">the document</span>{" "}
              more faster.
            </p>
          </div>

          <div className="relative z-10">
            <div className="text-sm text-teal-100">
              <p>Take control of your productivity</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-between w-full p-8 bg-white md:w-1/2 md:p-12"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="flex justify-end mb-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-teal-500 rounded-full" />
              <span className="text-lg font-bold text-gray-800">summ&send</span>
            </div>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            className="flex flex-col justify-center flex-1"
          >
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email Input */}
              <motion.div variants={itemVariants}>
                <div className="relative group">
                  <Mail className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2 group-focus-within:text-teal-500" />
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-3 pl-10 pr-4 text-gray-800 placeholder-gray-400 transition-colors bg-transparent border-b border-gray-200 focus:outline-none focus:border-teal-500"
                    required
                  />
                </div>
              </motion.div>

              {/* Password Input */}
              <motion.div variants={itemVariants}>
                <div className="relative group">
                  <Lock className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2 group-focus-within:text-teal-500" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-3 pl-10 pr-12 text-gray-800 placeholder-gray-400 transition-colors bg-transparent border-b border-gray-200 focus:outline-none focus:border-teal-500"
                    required
                  />
                  <motion.button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute text-gray-400 -translate-y-1/2 right-3 top-1/2 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </motion.button>
                </div>
              </motion.div>

              {/* Remember Me & Forgot Password */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-between pt-4"
              >
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-teal-500 border-gray-300 rounded cursor-pointer"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-gray-500 transition-colors hover:text-teal-500"
                >
                  Forgot password?
                </Link>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full gap-2 py-3 mt-8 font-semibold text-white transition-colors bg-teal-500 rounded-lg hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-5 h-5 border-2 border-white rounded-full border-t-transparent"
                    />
                    Signing in...
                  </>
                ) : (
                  "Login to my account"
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Bottom Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4 pt-8 border-t border-gray-200"
          >
            <Link
              to="/"
              className="text-sm text-gray-600 transition-colors hover:text-teal-500"
            >
              Go Home
            </Link>
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-teal-500 transition-colors hover:text-teal-600"
              >
                Register
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
