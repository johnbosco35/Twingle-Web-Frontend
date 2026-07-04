import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, User, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useAppSelector } from "@/redux/hooks";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAppSelector((state) => state.user);
  const isLoggedIn = Boolean(user);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Real Estate", path: "/real-estate" },
    { label: "Automotive", path: "/automotive" },
    { label: "Verification", path: "/verification" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 bg-white"
    >
      <div className="px-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 lg:justify-around">
          {/* Logo */}
          <motion.div variants={itemVariants} className="flex-shrink-0 min-w-0">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="src/assets/Container.png"
                alt="Twingle Logo"
                className="w-auto h-8 transition-opacity sm:h-10 md:h-14 lg:h-20 group-hover:opacity-80"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            variants={itemVariants}
            className="items-center justify-center flex-1 hidden gap-4 md:flex lg:gap-6 xl:gap-10"
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors font-medium text-[11px] sm:text-sm md:text-[13px] lg:text-base pb-2 hover:text-[#33a078] ${
                    isActive
                      ? "border-b-4 border-[#33a078] text-black"
                      : "border-b-4 border-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.nav>

          {/* Right side Actions */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-1 sm:gap-2 md:gap-3"
          >
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <form
                  onSubmit={handleSearch}
                  className="flex items-center gap-2 rounded-lg border border-[#33a078] bg-white px-2 py-1.5 sm:px-3"
                >
                  <Search size={18} className="text-black" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-24 text-sm text-black placeholder-gray-400 bg-transparent focus:outline-none sm:w-32 md:w-36 lg:w-48"
                  />
                </form>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center gap-1.5 sm:gap-2 px-2 py-2 sm:px-3 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Search"
                >
                  <Search size={18} className="text-[#33a078]" />
                  <span className="hidden text-sm font-medium text-black md:inline hover:text-[#33a078]">
                    Search
                  </span>
                </button>
              )}
            </div>

            {/* User Profile or Get Started */}
            {isLoggedIn ? (
              <Link
                to="/profile"
                className="hidden p-4 ml-4 transition-colors bg-blue-500 rounded-full hover:bg-gray-800 sm:block"
                aria-label="User Profile"
              >
                <User
                  size={20}
                  className="text-gray-300 hover:text-[#33a078]"
                />
              </Link>
            ) : (
              <Link
                to="/select-account"
                className="hidden rounded-lg bg-[#33a078] px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800 sm:block mr-4"
              >
                Get Started
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 transition-colors rounded-lg md:hidden hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={20} className="text-[#33a078]" />
              ) : (
                <Menu size={20} className="text-gray-300" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="py-4 bg-white border-t border-gray-200 md:hidden"
          >
            <nav className="flex flex-col gap-3 px-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium py-2 px-3 rounded-lg transition-colors ${
                      isActive
                        ? "text-[#33a078] border-l-4 border-[#33a078] bg-[#f0f9f5]"
                        : "text-black hover:text-[#33a078] hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {isLoggedIn ? (
                <Link
                  to="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 font-medium text-black transition-colors rounded-lg hover:text-[#33a078] hover:bg-gray-100"
                >
                  <User size={18} />
                  Profile
                </Link>
              ) : (
                <Link
                  to="/select-account"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-2 font-medium text-black transition-colors rounded-lg hover:text-[#33a078] hover:bg-gray-100"
                >
                  Get Started
                </Link>
              )}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
