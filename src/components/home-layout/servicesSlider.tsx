import React from "react";
import { ShieldCheck, Sparkles, Clock3, Headphones, Globe } from "lucide-react";

const services = [
  {
    title: "Verified Listings",
    description:
      "Every asset is vetted with identity verification and ownership checks.",
    icon: ShieldCheck,
  },
  {
    title: "Secure Escrow",
    description:
      "Funds are held in escrow until every condition is met and approved.",
    icon: Globe,
  },
  {
    title: "Fast Inspections",
    description:
      "On-site and remote inspection reports delivered within 24 hours.",
    icon: Clock3,
  },
  {
    title: "Premium Support",
    description:
      "Dedicated account managers guide buyers and sellers at every step.",
    icon: Headphones,
  },
  {
    title: "Exclusive Insights",
    description:
      "Market intelligence and private deal alerts for premium members.",
    icon: Sparkles,
  },
];

const repeatedServices = [...services, ...services];

const ServicesSlider: React.FC = () => {
  return (
    <section className="px-6 py-16 bg-emerald-700 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-emerald-200">
            App Services
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Services and features that elevate every transaction
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-sm text-emerald-100 sm:text-base">
            From verified assets to premium support, TrustMarket delivers a full
            suite of services designed for confident, high-value deals.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-5 animate-service-scroll sm:gap-6">
            {repeatedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={`${service.title}-${index}`}
                  className="min-w-[18rem] flex-shrink-0 flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-center h-14 w-14 rounded-3xl bg-emerald-50 text-emerald-700">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes service-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-service-scroll {
          animation: service-scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesSlider;
