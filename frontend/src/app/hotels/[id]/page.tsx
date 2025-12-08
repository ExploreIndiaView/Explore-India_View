"use client";
import { HOTELS } from "@/services/Options";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

// Import react-icons individually to avoid issues
import { FaStar, FaWifi, FaSwimmingPool, FaDumbbell, FaCar, FaUtensils, FaSpa, FaParking, FaWineGlassAlt, FaCheckCircle, FaMapMarkerAlt, FaRulerCombined, FaSnowflake, FaTv, FaShower, FaBed } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";

// Define proper types
interface Hotel {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  location: string;
  distance: string;
  price: number;
  oldPrice: number;
  amenities: string[];
}

interface HotelDetailsProps {
  params: {
    id: string;
  };
}

// Create amenity icons mapping as a simple object
const getAmenityIcon = (amenity: string): ReactNode => {
  const iconStyle = { color: "#06ACC6", fontSize: "20px" };
  
  switch (amenity) {
    case "wifi":
      return <FaWifi style={iconStyle} />;
    case "pool":
      return <FaSwimmingPool style={iconStyle} />;
    case "gym":
      return <FaDumbbell style={iconStyle} />;
    case "restaurant":
      return <IoRestaurant style={iconStyle} />;
    case "spa":
      return <FaSpa style={iconStyle} />;
    case "parking":
      return <FaParking style={iconStyle} />;
    case "bar":
      return <FaWineGlassAlt style={iconStyle} />;
    default:
      return <FaCheckCircle style={iconStyle} />;
  }
};

const getAmenityLabel = (amenity: string): string => {
  const labels: Record<string, string> = {
    wifi: "Free WiFi",
    pool: "Swimming Pool",
    gym: "Fitness Center",
    restaurant: "Restaurant",
    spa: "Spa",
    parking: "Free Parking",
    bar: "Bar/Lounge",
  };
  return labels[amenity] || amenity.charAt(0).toUpperCase() + amenity.slice(1);
};

export default function HotelDetails({ params }: HotelDetailsProps) {
  const router = useRouter();
  const hotel = HOTELS.find((h) => h.id === params.id) as Hotel | undefined;

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Hotel Not Found</h1>
          <p className="text-gray-600 mb-4">The hotel you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="relative h-96 w-full">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => router.back()}
              className="mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
            >
              ← Back to Hotels
            </button>
            
            <h1 className="text-4xl font-bold mb-2">{hotel.name}</h1>
            
            <div className="flex items-center gap-4 mb-2">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="font-semibold">{hotel.rating}</span>
                <span className="mx-1">•</span>
                <span>{hotel.reviews.toLocaleString()} reviews</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>{hotel.location}</span>
              </div>
            </div>
            
            <p className="text-lg opacity-90">{hotel.distance}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 -mt-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="lg:w-2/3 space-y-6">
            {/* Special Offer Card */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-white/20 p-1 rounded">
                      <span className="text-lg">🔥</span>
                    </div>
                    <h2 className="text-xl font-bold">Special Offer Today!</h2>
                  </div>
                  <p className="text-lg">
                    Get <span className="font-bold text-yellow-300">₹500 INSTANT DISCOUNT</span> + FREE Breakfast
                  </p>
                  <p className="text-sm opacity-90 mt-1">
                    Limited period offer • Auto-applied at checkout
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="bg-white/20 p-4 rounded-xl">
                    <p className="text-2xl font-bold">₹{hotel.price}</p>
                    <p className="line-through text-sm opacity-80">₹{hotel.oldPrice}</p>
                    <p className="text-xs mt-1">per night</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium flex items-center gap-2">
                <FaCheckCircle /> Free Cancellation
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium flex items-center gap-2">
                <FaCheckCircle /> Free Breakfast
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium flex items-center gap-2">
                <FaCheckCircle /> Pay at Hotel
              </span>
              <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full font-medium flex items-center gap-2">
                <FaCheckCircle /> Best Price Guaranteed
              </span>
            </div>

            {/* Amenities Grid */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b">
                Hotel Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {hotel.amenities.map((amenity: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="text-xl">
                      {getAmenityIcon(amenity)}
                    </div>
                    <span className="font-medium text-gray-700">
                      {getAmenityLabel(amenity)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Details */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b">
                Available Rooms
              </h2>
              
              <div className="border rounded-xl p-5 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                      <FaBed className="text-4xl text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Deluxe AC Room</h3>
                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className="flex items-center gap-1 text-gray-600">
                            <FaSnowflake /> AC
                          </span>
                          <span className="flex items-center gap-1 text-gray-600">
                            <FaTv /> TV
                          </span>
                          <span className="flex items-center gap-1 text-gray-600">
                            <FaWifi /> Free WiFi
                          </span>
                          <span className="flex items-center gap-1 text-gray-600">
                            <FaShower /> Attached Bathroom
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">
                          Spacious room with city view, comfortable king-size bed, and modern amenities.
                        </p>
                      </div>
                      
                      <div className="text-right">
                        <div className="mb-2">
                          <span className="text-2xl font-bold text-blue-600">₹{hotel.price}</span>
                          <span className="text-gray-500 text-sm ml-2">per night</span>
                        </div>
                        <p className="line-through text-gray-400">₹{hotel.oldPrice}</p>
                        <p className="text-green-600 text-sm font-medium">Save ₹{hotel.oldPrice - hotel.price}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 pt-4 border-t">
                      <div className="text-sm text-gray-600">
                        <p>✅ Free Cancellation until check-in</p>
                        <p>✅ Free Breakfast included</p>
                        <p>✅ Taxes included</p>
                      </div>
                      <button
                        onClick={() => router.push(`/hotels/${hotel.id}/book`)}
                        className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
                      >
                        Select Room
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel Description */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Hotel</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Experience luxury and comfort at {hotel.name}, located in the prime area of {hotel.location}. 
                This hotel offers a perfect blend of modern amenities and traditional hospitality, making it 
                ideal for both business and leisure travelers. Just {hotel.distance}, the property provides 
                easy access to major attractions and business centers.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3">Highlights</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1" />
                      <span>Prime location in {hotel.location}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1" />
                      <span>Rated {hotel.rating} stars by {hotel.reviews.toLocaleString()} guests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1" />
                      <span>Modern amenities and premium services</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3">Nearby Attractions</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <FaMapMarkerAlt className="text-blue-500 mt-1" />
                      <span>Shopping Street – 0.2 km</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaMapMarkerAlt className="text-blue-500 mt-1" />
                      <span>Metro Station – 0.3 km</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaMapMarkerAlt className="text-blue-500 mt-1" />
                      <span>Restaurant Hub – 0.5 km</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaMapMarkerAlt className="text-blue-500 mt-1" />
                      <span>Tourist Spot – 1 km</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Booking Card */}
          <div className="lg:w-1/3">
            <div className="sticky top-6">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                {/* Price Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm opacity-90">Starting from</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">₹{hotel.price}</span>
                        <span className="text-lg opacity-90">/ night</span>
                      </div>
                      <p className="line-through text-blue-200 text-sm mt-1">₹{hotel.oldPrice}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                        SAVE ₹{hotel.oldPrice - hotel.price}
                      </div>
                      <p className="text-xs mt-2 opacity-90">+ taxes & fees</p>
                    </div>
                  </div>
                </div>

                {/* Booking Form */}
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Check-in / Check-out
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="date"
                          className="w-full p-3 border rounded-lg"
                          defaultValue={new Date().toISOString().split('T')[0]}
                        />
                        <input
                          type="date"
                          className="w-full p-3 border rounded-lg"
                          defaultValue={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Guests
                      </label>
                      <select className="w-full p-3 border rounded-lg">
                        <option>2 Adults</option>
                        <option>1 Adult</option>
                        <option>2 Adults, 1 Child</option>
                        <option>2 Adults, 2 Children</option>
                        <option>3 Adults</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Rooms
                      </label>
                      <select className="w-full p-3 border rounded-lg">
                        <option>1 Room</option>
                        <option>2 Rooms</option>
                        <option>3 Rooms</option>
                      </select>
                    </div>
                  </div>

                  {/* Price Breakdown */}
                  <div className="mt-6 pt-6 border-t">
                    <div className="space-y-2">
                      <div className="flex justify-between text-gray-600">
                        <span>Room price (1 night)</span>
                        <span>₹{hotel.price}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Discount</span>
                        <span className="text-green-600">-₹500</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Taxes & fees</span>
                        <span>₹{Math.round(hotel.price * 0.18)}</span>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total</span>
                          <span>₹{Math.round(hotel.price + (hotel.price * 0.18))}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 space-y-3">
                    <button
                      onClick={() => router.push(`/hotels/${hotel.id}/book`)}
                      className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300"
                    >
                      BOOK NOW
                    </button>
                    
                    <button
                      onClick={() => router.back()}
                      className="w-full py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                      View Other Hotels
                    </button>
                    
                    <div className="text-center">
                      <p className="text-sm text-gray-500">
                        <span className="text-green-600 font-medium">✅</span> Free cancellation • Best price guaranteed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 bg-white rounded-xl shadow-sm p-4 border">
                <h3 className="font-bold text-gray-800 mb-3">Why Book With Us?</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <span>Lowest Price Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">✓</span>
                    </div>
                    <span>Secure & Safe Booking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold">✓</span>
                    </div>
                    <span>24/7 Customer Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}