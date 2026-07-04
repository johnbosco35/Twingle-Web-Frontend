import { motion } from "framer-motion";
import { ArrowLeft, Building2, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

export default function AccountTypeSelectionPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-white px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-5xl rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10"
      >
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
            Choose your account
          </p>
          <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
            How do you want to join Twingle?
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
            Select the option that best matches your needs and we’ll take you to
            the right sign-up form.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-2xl border border-gray-200 bg-slate-50 p-6 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600">
              <UserRound size={24} />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">
              Register as a normal user
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Perfect for buyers, renters, or anyone looking to explore
              listings, save favorites, and connect with properties.
            </p>
            <Link
              to="/signup"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-teal-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
            >
              Continue as a user
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-2xl border border-gray-200 bg-slate-50 p-6 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <Building2 size={24} />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">
              Register as a seller or real-estate agent
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Ideal for property owners, agents, and service providers who want
              to list properties and manage their business profile.
            </p>
            <Link
              to="/seller-signup"
              className="mt-6 inline-flex items-center justify-center rounded-lg border border-amber-500 px-5 py-3 text-sm font-semibold text-amber-600 transition-colors hover:bg-amber-50"
            >
              Continue as a seller
            </Link>
          </motion.div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-gray-200 pt-6 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 font-medium text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft size={16} />
            Back to login
          </Link>
          <Link
            to="/"
            className="font-medium text-gray-600 hover:text-gray-900"
          >
            Go to homepage
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
