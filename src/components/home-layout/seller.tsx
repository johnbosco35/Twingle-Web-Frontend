import React from "react";
import { Star, MapPin, ArrowRight } from "lucide-react";

const sellers = [
  {
    name: "Aurelia Assets",
    location: "Dubai, UAE",
    deals: "142",
    rating: "4.9",
    revenue: "$120M",
    badge: "Elite", 
  },
  {
    name: "Verde Capital",
    location: "Monaco",
    deals: "98",
    rating: "4.8",
    revenue: "$88M",
    badge: "Verified",
  },
  {
    name: "Luxe Holdings",
    location: "New York, USA",
    deals: "176",
    rating: "4.9",
    revenue: "$142M",
    badge: "Top Rated",
  },
  {
    name: "Summit Brokers",
    location: "London, UK",
    deals: "131",
    rating: "4.7",
    revenue: "$103M",
    badge: "Premium",
  },
];

const Seller: React.FC = () => {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">
            Top Sellers
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Elite sellers powering the TrustMarket network
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-sm text-slate-500 sm:text-base">
            Our premium vendors are verified, highly rated, and trusted by elite
            buyers across global markets.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {sellers.map((seller) => (
            <article
              key={seller.name}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center text-lg font-semibold h-14 w-14 rounded-3xl bg-emerald-100 text-emerald-700">
                    {seller.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">
                      {seller.name}
                    </h3>
                    <p className="flex items-center gap-2 mt-1 text-sm text-slate-500">
                      <MapPin className="w-4 h-4" />
                      {seller.location}
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                  {seller.badge}
                </span>
              </div>

              <div className="grid gap-3 mt-6 sm:grid-cols-2">
                <div className="p-4 text-sm rounded-3xl bg-slate-50 text-slate-700">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Deals
                  </p>
                  <p className="mt-2 text-lg font-semibold">{seller.deals}</p>
                </div>
                <div className="p-4 text-sm rounded-3xl bg-slate-50 text-slate-700">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Revenue
                  </p>
                  <p className="mt-2 text-lg font-semibold">{seller.revenue}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400" />
                  {seller.rating}
                </span>
                <button className="inline-flex items-center gap-1 font-medium transition text-emerald-700 hover:text-emerald-800">
                  View vendor
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Seller;
