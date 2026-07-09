import React from "react";
import { Building2, Clock3, MapPin, ShieldCheck } from "lucide-react";
import fake1 from "@/assets/fake1.png";
import fake2 from "@/assets/fake2.png";
import fake3 from "@/assets/fake3.png";

const listings = [
  {
    image: fake1,
    badge: "Verified Listing",
    badgeClass: "bg-emerald-700/95 text-emerald-100",
    title: "The Obsidian Estate",
    location: "Beverly Hills, CA",
    price: "$12,500,000",
    stats: [
      { icon: Building2, label: "6 beds" },
      { icon: ShieldCheck, label: "8 baths" },
      { icon: Clock3, label: "12,400 sqft" },
    ],
  },
  {
    image: fake2,
    badge: "Inspected",
    badgeClass: "bg-sky-700/95 text-sky-100",
    title: "Pagani Huayra Roadster",
    location: "Monaco Origin",
    price: "$2,850,000",
    stats: [
      { icon: Clock3, label: "238 MPH" },
      { icon: Building2, label: "2022 model" },
      { icon: ShieldCheck, label: "Automatic" },
    ],
  },
  {
    image: fake3,
    badge: "New Listing",
    badgeClass: "bg-violet-700/95 text-violet-100",
    title: "Villa Azure Waterfront",
    location: "Ibiza, Spain",
    price: "$8,200,000",
    stats: [
      { icon: Building2, label: "5 beds" },
      { icon: Clock3, label: "Pool" },
      { icon: ShieldCheck, label: "Private access" },
    ],
  },
  {
    image: fake1,
    badge: "Exclusive",
    badgeClass: "bg-yellow-600/95 text-yellow-100",
    title: "Skyline Penthouse",
    location: "Manhattan, NY",
    price: "$18,900,000",
    stats: [
      { icon: Building2, label: "4 beds" },
      { icon: ShieldCheck, label: "5 baths" },
      { icon: Clock3, label: "360° views" },
    ],
  },
  {
    image: fake2,
    badge: "Limited Release",
    badgeClass: "bg-rose-600/95 text-rose-100",
    title: "Rolls Royce Phantom",
    location: "Dubai, UAE",
    price: "$5,950,000",
    stats: [
      { icon: Clock3, label: "V12" },
      { icon: Building2, label: "2024" },
      { icon: ShieldCheck, label: "Luxury finish" },
    ],
  },
  {
    image: fake3,
    badge: "Featured",
    badgeClass: "bg-emerald-700/95 text-emerald-100",
    title: "Private Yacht Escape",
    location: "Mediterranean Sea",
    price: "$14,700,000",
    stats: [
      { icon: Building2, label: "5 cabins" },
      { icon: Clock3, label: "120 ft" },
      { icon: ShieldCheck, label: "Crew included" },
    ],
  },
];

const Product: React.FC = () => {
  return (
    <section className="flex flex-col max-w-full px-6 py-12 mx-auto sm:px-8 lg:px-12 gap-14 ">
      <div className="flex flex-col gap-4 mt-10 mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-3xl font-semibold uppercase text-slate-950 sm:text-4xl">
            Curated Collections
          </p>
          <h2 className="mt-6 text-lg sm:text-xl">
            Hand-picked assets that define luxury living and elite performance,
            fully vetted by our expert inspection team.
          </h2>
        </div>
        {/* <div className="flex items-center gap-3">
          <button className="inline-flex items-center justify-center px-6 text-sm font-semibold transition bg-white border rounded-full shadow-sm h-14 border-slate-200 text-slate-700 hover:bg-slate-50">
            <ArrowRight className="w-6 h-6" />
          </button>
          <button className="inline-flex items-center justify-center px-6 text-sm font-semibold transition bg-white border rounded-full shadow-sm h-14 border-slate-200 text-slate-700 hover:bg-slate-50">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div> */}
      </div>

      <div className="grid gap-x-6 gap-y-16 lg:grid-cols-3">
        {listings.map((item) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full transition duration-500 h-72 group-hover:scale-105"
              />
              <span
                className={`absolute left-5 top-5 inline-flex rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm ${item.badgeClass}`}
              >
                {item.badge}
              </span>
              <div className="absolute inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold border rounded-full shadow-sm right-5 top-5 border-white/70 bg-white/90 text-slate-900 backdrop-blur">
                <MapPin className="h-3.5 w-3.5" />
                {item.location}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-400">
                  {item.location}
                </p>
              </div>

              <div className="flex items-center justify-between gap-3">
                <p className="text-2xl font-semibold text-slate-950">
                  {item.price}
                </p>
                <span className="px-4 py-2 text-sm font-semibold rounded-full bg-slate-100 text-slate-700">
                  Explore
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {item.stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 text-center"
                    >
                      <Icon className="w-5 h-5 mx-auto text-slate-600" />
                      <p className="mt-3 text-sm font-semibold text-slate-900">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Product;
