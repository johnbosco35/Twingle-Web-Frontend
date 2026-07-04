import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, User, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

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
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 lg:justify-around">
          {/* Logo */}
          <motion.div variants={itemVariants} className="flex-shrink-0 min-w-0">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="src/assets/Container.png"
                alt="Twingle Logo"
                className="h-8 sm:h-10 md:h-14 lg:h-20 w-auto group-hover:opacity-80 transition-opacity"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            variants={itemVariants}
            className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-10 flex-1 justify-center"
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors font-medium text-[11px] sm:text-sm md:text-[13px] lg:text-base pb-2 hover:text-yellow-500 ${
                    isActive
                      ? "border-b-4 border-yellow-500 text-black"
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
                  className="flex items-center gap-2 rounded-lg border border-yellow-500 bg-white px-2 py-1.5 sm:px-3"
                >
                  <Search size={18} className="text-black" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="bg-transparent text-black placeholder-gray-400 focus:outline-none w-24 sm:w-32 md:w-36 lg:w-48 text-sm"
                  />
                </form>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center gap-1.5 sm:gap-2 px-2 py-2 sm:px-3 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Search"
                >
                  <Search size={18} className="text-yellow-500" />
                  <span className="hidden md:inline text-black hover:text-yellow-500 font-medium text-sm">
                    Search
                  </span>
                </button>
              )}
            </div>

            {/* User Profile */}
            <Link
              to="/profile"
              className="p-4 hover:bg-gray-800 rounded-full transition-colors hidden sm:block bg-blue-500"
              aria-label="User Profile"
            >
              <User size={20} className="text-gray-300 hover:text-yellow-500" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={20} className="text-yellow-500" />
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
            className="md:hidden bg-white border-t border-gray-200 py-4"
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
                        ? "text-yellow-500 border-l-4 border-yellow-500 bg-yellow-50"
                        : "text-black hover:text-yellow-500 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                to="/profile"
                onClick={() => setIsMenuOpen(false)}
                className="text-black hover:text-yellow-500 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-gray-100 flex items-center gap-2"
              >
                <User size={18} />
                Profile
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
