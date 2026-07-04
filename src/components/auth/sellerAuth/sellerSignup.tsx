import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Building2,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function SellerSignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1200);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-white px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl"
      >
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="hidden bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 p-8 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <Building2 size={24} />
              </div>
              <h1 className="text-3xl font-semibold">
                Grow your property business
              </h1>
              <p className="mt-4 max-w-md text-sm leading-7 text-amber-50">
                Create a seller or real-estate agent account to list properties,
                manage enquiries, and reach buyers faster.
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-amber-50">
              <p className="font-medium">Why join as a seller?</p>
              <ul className="mt-2 space-y-2">
                <li>• Publish and manage property listings</li>
                <li>• Track leads and inquiries in one place</li>
                <li>• Access a professional seller dashboard</li>
              </ul>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <Link
              to="/select-account"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700"
            >
              <ArrowLeft size={16} />
              Back to account type
            </Link>

            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
                Seller account
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-gray-900 sm:text-3xl">
                Create your seller profile
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Fill in your details and start listing with Twingle.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-lg border border-gray-300 px-3 py-3">
                  <UserRound className="text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                  />
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-300 px-3 py-3">
                  <Building2 className="text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Business / agency"
                    className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-gray-300 px-3 py-3">
                <Mail className="text-gray-400" size={18} />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                />
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-gray-300 px-3 py-3">
                <Phone className="text-gray-400" size={18} />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-lg border border-gray-300 px-3 py-3">
                  <Lock className="text-gray-400" size={18} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                  />
                  {showPassword ? (
                    <EyeOff
                      className="cursor-pointer text-gray-400"
                      size={18}
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <Eye
                      className="cursor-pointer text-gray-400"
                      size={18}
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-300 px-3 py-3">
                  <Lock className="text-gray-400" size={18} />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                  />
                  {showConfirmPassword ? (
                    <EyeOff
                      className="cursor-pointer text-gray-400"
                      size={18}
                      onClick={() => setShowConfirmPassword(false)}
                    />
                  ) : (
                    <Eye
                      className="cursor-pointer text-gray-400"
                      size={18}
                      onClick={() => setShowConfirmPassword(true)}
                    />
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center rounded-lg bg-amber-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Creating account..." : "Create seller account"}
              </button>
            </form>

            <p className="mt-5 text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-teal-600 hover:text-teal-700"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
