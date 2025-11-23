"use client";
import { PACKAGES } from "@/services/Options";
import { PACKAGETYPE } from "@/services/types";
import { Star, MapPin, Calendar, Clock } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import BookingCard from "@/components/shared/BookingCard";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PlaceCard from "@/components/shared/PlaceCard";
import Autoplay from "embla-carousel-autoplay";
import RajasthanMap from "@/components/shared/Maps";

function PackageDetail() {
  const { packageId } = useParams();
  const [Package, setPackage] = useState<PACKAGETYPE | null>(null);
  
  useEffect(() => {
    PACKAGES.filter((pack) => pack.__id === packageId).map((pack) => {
      return setPackage(pack);
    });
  }, [packageId]);

  if (!Package) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={Package.image}
          alt={Package.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{Package.name}</h1>
            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4" />
                <span>{Package.days} Days</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <MapPin className="w-4 h-4" />
                <span>Multiple Destinations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6 md:p-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="flex-1">
            {/* Overview Section */}
            {Package.Overview && Package.Overview.length > 0 && (
              <Section title="Overview">
                <div className="space-y-4">
                  {Package.Overview.map((item, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </Section>
            )}

            {/* Highlights Section */}
            {Package.Highlights && Package.Highlights.length > 0 && (
              <Section title="Highlights">
                <div className="grid gap-3">
                  {Package.Highlights.map((item, idx) => (
                    <HighlightItem key={idx} text={item} />
                  ))}
                </div>
              </Section>
            )}

            {/* Itinerary Section */}
            {Package.Itinerary && Package.Itinerary.length > 0 && (
              <Section title="Itinerary">
                <div className="space-y-6">
                  {Package.Itinerary.map((item, idx) => {
                    const sanitizedContent = () => ({
                      __html: DOMPurify.sanitize(item.description || ""),
                    });
                    return (
                      <div key={idx} className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="flex items-center justify-center w-8 h-8 bg-purple-100 text-purple-700 rounded-full font-semibold text-sm">
                            {idx + 1}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 flex-1">
                            {item.name}
                          </h3>
                        </div>
                        {item.description && (
                          <div
                            className="text-gray-600 leading-relaxed ml-11"
                            dangerouslySetInnerHTML={sanitizedContent()}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </Section>
            )}

            {/* Inclusions & Exclusions */}
            <div className="grid md:grid-cols-2 gap-6">
              {Package.Inclusion && Package.Inclusion.length > 0 && (
                <Section title="Inclusions">
                  <div className="space-y-2">
                    {Package.Inclusion.map((item, idx) => (
                      <InclusionExclusionItem key={idx} text={item} type="included" />
                    ))}
                  </div>
                </Section>
              )}

              {Package.Exclusion && Package.Exclusion.length > 0 && (
                <Section title="Exclusions">
                  <div className="space-y-2">
                    {Package.Exclusion.map((item, idx) => (
                      <InclusionExclusionItem key={idx} text={item} type="excluded" />
                    ))}
                  </div>
                </Section>
              )}
            </div>

            {/* FAQs Section */}
            {Package.FAQs && Package.FAQs.length > 0 && (
              <Section title="Frequently Asked Questions">
                <div className="space-y-4">
                  {Package.FAQs.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-lg border border-gray-200 p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* Map Section */}
            <Section title="Tour Map">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <RajasthanMap />
              </div>
            </Section>
          </div>

          {/* Right Sidebar - Booking Card */}
          <div className="lg:w-96">
            <div className="sticky top-6">
              <BookingCard
                props={{ 
                  PackageName: Package.name, 
                  PackageDays: Package.days 
                }}
              />
            </div>
          </div>
        </div>

        {/* Related Packages Carousel */}
        <Section title="You Might Also Like">
          <Carousel
            plugins={[Autoplay({ delay: 3000 })]}
            className="w-full"
          >
            <CarouselContent className="py-4">
              {PACKAGES.map((pack, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <PlaceCard
                    pack={pack}
                    lineclamp={true}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Section>
      </div>
    </div>
  );
}

// Reusable Section Component
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
      {title}
    </h2>
    {children}
  </section>
);

// Reusable Highlight Item Component
const HighlightItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
    <Star className="w-5 h-5 text-purple-600 fill-purple-600 shrink-0 mt-0.5" />
    <span className="text-gray-700">{text}</span>
  </div>
);

// Reusable Inclusion/Exclusion Item Component
const InclusionExclusionItem = ({ text, type }: { text: string; type: 'included' | 'excluded' }) => (
  <div className="flex items-center gap-3">
    <div className={`w-2 h-2 rounded-full ${type === 'included' ? 'bg-green-500' : 'bg-red-500'}`} />
    <span className="text-gray-700">{text}</span>
  </div>
);

export default PackageDetail;