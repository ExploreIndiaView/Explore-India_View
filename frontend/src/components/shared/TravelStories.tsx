"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Calendar, Eye, Heart } from "lucide-react";
import Image from "next/image";

export default function TravelStories() {
  return (
    <section className="bg-white py-15 px-6 text-center">
      {/* Heading and Description */}
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Travel Stories & Insights
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Discover inspiring travel stories, expert tips, and cultural insights to enrich your Indian adventures.
      </p>

      {/* Search Input */}
      <div className="max-w-xl mx-auto mb-8">
        <Input
          type="text"
          placeholder="Search travel stories and guides..."
          className="border-2 border-gray-300 rounded-full px-5 py-3 w-full text-gray-700 focus:border-[#06ACC6] focus:ring-0"
        />
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {[
          "All",
          "Destination Guides",
          "Cultural Insights",
          "Travel Tips",
          "Food & Cuisine",
          "Adventure",
          "Photography",
          "Budget Travel",
        ].map((category, index) => (
          <Button
            key={index}
            className={`rounded-full px-5 py-2 text-sm font-medium border ${
              category === "All"
                ? "bg-[#06ACC6] text-white border-[#06ACC6]"
                : "bg-white text-[#06ACC6] border-[#06ACC6] hover:bg-[#06ACC6] hover:text-white"
            } transition-all`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Featured Stories */}
      <h3 className="text-3xl font-semibold text-left text-gray-900 mb-10">
        Featured Stories
      </h3>

      {/* Story Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto text-left">
        {/* Card 1 */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition">
          <div className="relative">
            <Image
              src="/images/featured1.png"
              alt="Hidden Gems of Rajasthan"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <span className="absolute top-3 right-3 text-white text-left bg-[#06ACC6] text-white text-sm font-semibold px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
          <div className="p-6">
            <p className="text-[#06ACC6] text-sm font-semibold mb-1">
              Destination Guides
            </p>
            <h4 className="text-xl font-bold mb-2">
              Hidden Gems of Rajasthan: Beyond the Golden Triangle
            </h4>
            <p className="text-gray-600 mb-4">
              Discover lesser-known palaces, villages, and cultural experiences that showcase
              the authentic spirit of Rajasthan...
            </p>

            {/* Author and Date */}
            <div className="flex items-center text-sm text-gray-500 gap-4 mb-3">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" /> Priya Sharma
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> 1/15/2024
              </span>
              <span>8 min read</span>
            </div>

            {/* Stats and Read More */}
            <div className="flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" /> 2,450
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-red-500" /> 124
                </span>
              </div>
              <button className="text-[#06ACC6] font-semibold hover:underline">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition">
          <div className="relative">
            <Image
              src="/images/featured2.png"
              alt="Backwaters of Kerala"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <span className="absolute top-3 right-3 bg-[#06ACC6] text-white text-sm font-semibold px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
          <div className="p-6">
            <p className="text-[#06ACC6] text-sm font-semibold mb-1">
              Cultural Insights
            </p>
            <h4 className="text-xl font-bold mb-2">
              Backwaters of Kerala: Serenity and Tradition
            </h4>
            <p className="text-gray-600 mb-4">
              Experience Kerala’s tranquil backwaters, unique houseboats, and timeless culture blended with nature...
            </p>

            <div className="flex items-center text-sm text-gray-500 gap-4 mb-3">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" /> Ananya Gupta
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> 2/10/2024
              </span>
              <span>7 min read</span>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" /> 3,180
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-red-500" /> 210
                </span>
              </div>
              <button className="text-[#06ACC6] font-semibold hover:underline">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition">
          <div className="relative">
            <Image
              src="/images/featured3.png"
              alt="Trekking in the Himalayas"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <span className="absolute top-3 right-3 bg-[#06ACC6] text-white text-sm font-semibold px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
          <div className="p-6">
            <p className="text-[#06ACC6] text-sm font-semibold mb-1">
              Adventure
            </p>
            <h4 className="text-xl font-bold mb-2">
              Trekking the Himalayas: A Journey to the Roof of the World
            </h4>
            <p className="text-gray-600 mb-4">
              Challenge yourself with thrilling treks while soaking in the breathtaking Himalayan landscapes...
            </p>

            <div className="flex items-center text-sm text-gray-500 gap-4 mb-3">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" /> Rohan Mehta
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> 3/05/2024
              </span>
              <span>9 min read</span>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" /> 1,920
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-red-500" /> 89
                </span>
              </div>
              <button className="text-[#06ACC6] font-semibold hover:underline">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
