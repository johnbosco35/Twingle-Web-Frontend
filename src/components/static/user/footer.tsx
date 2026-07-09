import React from "react";

const Footer: React.FC = () => {
  const navLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Verification Process",
    "Contact Support",
  ];

  return (
    <footer className="bg-emerald-700 text-emerald-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 sm:px-8 lg:px-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">TrustMarket</h2>
          <p className="max-w-md text-sm text-emerald-100/85">
            Connecting elite buyers with exceptional assets worldwide.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-4 text-sm text-emerald-100/90">
          {navLinks.map((link) => (
            <a key={link} href="#" className="transition hover:text-white">
              {link}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-emerald-500/40 px-6 py-6 text-center text-xs text-emerald-100/70 sm:px-8 lg:px-12">
        © 2024 TrustMarket Premium. All rights reserved. Registered High-Value
        Asset Exchange.
      </div>
    </footer>
  );
};

export default Footer;
