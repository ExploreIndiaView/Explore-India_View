"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Calendar, Eye, Heart, Share2 } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    id: 1,
    category: "Destination Guides",
    title: "Exploring the Backwaters of Kerala",
    desc: "Cruise through serene lagoons, witness local village life, and experience the tranquility of Kerala’s lush landscapes.",
    author: "Rahul Verma",
    date: "2/02/2024",
    readTime: "7 min read",
    views: 1860,
    likes: 110,
    image: "/udaipur.png",
    featured: true,
  },
  {
    id: 2,
    category: "Cultural Insights",
    title: "The Timeless Art of Indian Handicrafts",
    desc: "Discover the artistry and craftsmanship that define India’s diverse cultural heritage.",
    author: "Ananya Gupta",
    date: "3/15/2024",
    readTime: "6 min read",
    views: 2050,
    likes: 130,
    image: "/images/privatetourlogo.png",
    featured: false,
  },
  {
    id: 3,
    category: "Food & Cuisine",
    title: "Street Food Tour: Mumbai’s Must-Try Delicacies",
    desc: "A culinary journey through Mumbai’s bustling streets and legendary flavors.",
    author: "Vikram Singh",
    date: "4/08/2024",
    readTime: "5 min read",
    views: 2780,
    likes: 210,
    image: "/images/latestpost1.png",
    featured: true,
  },
  {
    id: 4,
    category: "Adventure",
    title: "Trekking the Himalayas: A Beginner’s Guide",
    desc: "Essential tips and routes for first-time trekkers exploring India’s majestic mountain ranges.",
    author: "Priya Patel",
    date: "5/10/2024",
    readTime: "9 min read",
    views: 1520,
    likes: 95,
    image: "/images/udaipur.png",
    featured: false,
  },
  {
    id: 5,
    category: "Photography",
    title: "Capturing India’s Essence Through the Lens",
    desc: "Tips and tricks to capture the vibrant soul of India’s landscapes and people.",
    author: "Amit Sharma",
    date: "6/22/2024",
    readTime: "10 min read",
    views: 1900,
    likes: 140,
    image: "/images/udaipur.png",
    featured: true,
  },
  {
    id: 6,
    category: "Budget Travel",
    title: "Travel India Smart: Budget-Friendly Destinations",
    desc: "Explore India without breaking the bank — our top affordable getaways.",
    author: "Neha Rao",
    date: "7/05/2024",
    readTime: "6 min read",
    views: 1730,
    likes: 100,
    image: "/images/latestpost1.png",
    featured: false,
  },
];

export default function LatestPosts() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-3">Latest Posts</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Stay updated with the latest travel insights, destination updates, and
        inspiring stories from across India.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-5">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden hover:shadow-xl transition-all border-gray-200"
          >
            <div className="relative">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              {post.featured && (
                <span className="absolute top-3 right-3 bg-[#06ACC6] text-white text-sm font-semibold px-3 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>

            <CardContent className="p-5 text-left">
              <p className="text-[#06ACC6] font-semibold mb-2">
                {post.category}
              </p>
              <h3 className="text-lg font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.desc}</p>

              <div className="flex items-center text-gray-500 text-sm mb-3 gap-3">
                <div className="flex items-center gap-1">
                  <User size={16} /> {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} /> {post.date}
                </div>
                <span>{post.readTime}</span>
              </div>

              <div className="flex justify-between text-gray-500 text-sm">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Eye size={16} /> {post.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart size={16} /> {post.likes}
                  </div>
                </div>
                <Share2 className="cursor-pointer text-[#06ACC6] hover:scale-110 transition-transform" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
