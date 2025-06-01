"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { FetchWebService } from "@/sanity/lib/fetchwebservice";
import { FetchGraphicService } from "@/sanity/lib/fetchgraphic";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("web");
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data =
        activeTab === "web"
          ? await FetchWebService()
          : await FetchGraphicService();
      setServices(data);
    };
    fetchData();
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#000116] text-white px-6 py-16">
      <h1 className="text-4xl font-bold text-purple-500 mb-10 text-center">
        Our Services
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-10">
        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === "web"
              ? "bg-purple-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
          onClick={() => setActiveTab("web")}
        >
          Web Development
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === "graphic"
              ? "bg-purple-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
          onClick={() => setActiveTab("graphic")}
        >
          Graphic Designing
        </button>
      </div>

      {/* Services List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service: any) => (
          <div
            key={service._id}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-purple-600 transition-all"
          >
        <Image
  src={service.image?.asset?.url || "/fallback.jpg"}
  alt={service.title}
  width={500}
  height={300}
  className="rounded-xl w-full h-auto max-h-72 object-contain"
/>
            <h2 className="text-xl font-bold mt-4">{service.title}</h2>
            <p className="text-gray-400 text-sm mt-2">{service.description}</p>
            {service.link && (
              <Link
                href={service.link}
                target="_blank"
                className="text-blue-400 hover:underline mt-4 block"
              >
                Visit
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
