"use client";

import { HOTELS } from "@/services/Options";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaArrowLeft, FaUser, FaPhone, FaCalendar, FaUserFriends, FaCreditCard, FaShieldAlt, FaLock, FaCheckCircle, FaInfoCircle, FaHotel } from "react-icons/fa";

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

interface BookHotelProps {
  params: {
    id: string;
  };
}

export default function BookHotel({ params }: BookHotelProps) {
  const router = useRouter();
  const hotel = HOTELS.find((h) => h.id === params.id) as Hotel | undefined;

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    checkIn: "",
    checkOut: "",
    rooms: 1,
    adults: 2,
    children: 0,
    specialRequest: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState("");

  useEffect(() => {
    // Set default dates
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    setFormData(prev => ({
      ...prev,
      checkIn: today.toISOString().split('T')[0],
      checkOut: tomorrow.toISOString().split('T')[0]
    }));
  }, []);

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🏨</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Hotel Not Found</h1>
          <p className="text-gray-600 mb-6">The hotel you're trying to book doesn't exist.</p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Browse Hotels
          </button>
        </div>
      </div>
    );
  }

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    }
    return 1;
  };

  const nights = calculateNights();
  const roomPrice = hotel.price * nights * formData.rooms;
  const discount = 500;
  const tax = Math.round(roomPrice * 0.18);
  const totalPrice = roomPrice - discount + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Please enter your name";
    if (!formData.mobile.trim() || formData.mobile.length !== 10) return "Please enter a valid 10-digit mobile number";
    if (!formData.email.trim() || !formData.email.includes('@')) return "Please enter a valid email";
    if (!formData.checkIn || !formData.checkOut) return "Please select check-in and check-out dates";
    return "";
  };

  const handleBooking = async () => {
    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setBookingStep(3);
    }, 2000);
  };

  const renderStep1 = () => (
    <>
      {/* Hotel Summary Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <FaArrowLeft className="text-gray-600" />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Complete Your Booking</h1>
          </div>
          
          <div className="flex gap-4 p-4 border rounded-xl">
            <div className="w-24 h-24 relative rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800 mb-1">{hotel.name}</h2>
              <p className="text-gray-600 mb-2">{hotel.location}</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded">
                  <FaHotel /> {hotel.rating} ★
                </span>
                <span className="text-gray-600">{hotel.reviews.toLocaleString()} reviews</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">₹{hotel.price}</div>
              <div className="text-sm text-gray-500">per night</div>
            </div>
          </div>
        </div>
      </div>

      {/* Guest Details Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <FaUser className="text-blue-600" />
          Guest Details
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                name="mobile"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="10-digit mobile number"
                value={formData.mobile}
                onChange={handleInputChange}
                maxLength={10}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      {/* Stay Details Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <FaCalendar className="text-blue-600" />
          Stay Details
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Check-in Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                name="checkIn"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                value={formData.checkIn}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Check-out Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                name="checkOut"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                value={formData.checkOut}
                onChange={handleInputChange}
                min={formData.checkIn}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rooms <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setFormData(prev => ({ ...prev, rooms: Math.max(1, prev.rooms - 1) }))}
                className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-gray-50"
              >
                -
              </button>
              <span className="text-lg font-semibold">{formData.rooms}</span>
              <button
                onClick={() => setFormData(prev => ({ ...prev, rooms: prev.rooms + 1 }))}
                className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Guests <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Adults</label>
                <select
                  name="adults"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  value={formData.adults}
                  onChange={handleInputChange}
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Children</label>
                <select
                  name="children"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  value={formData.children}
                  onChange={handleInputChange}
                >
                  {[0, 1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Special Requests (Optional)
          </label>
          <textarea
            name="specialRequest"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            rows={3}
            placeholder="Any special requests or requirements..."
            value={formData.specialRequest}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );

  const renderStep2 = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <FaCreditCard className="text-blue-600" />
        Select Payment Method
      </h2>

      <div className="space-y-4 mb-8">
        {[
          { id: "card", label: "Credit/Debit Card", icon: "💳" },
          { id: "upi", label: "UPI", icon: "📱" },
          { id: "netbanking", label: "Net Banking", icon: "🏦" },
          { id: "wallet", label: "Wallet", icon: "💰" },
          { id: "cod", label: "Pay at Hotel", icon: "🏨" }
        ].map(method => (
          <div
            key={method.id}
            className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${
              selectedPayment === method.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-blue-300"
            }`}
            onClick={() => setSelectedPayment(method.id)}
          >
            <div className="text-2xl">{method.icon}</div>
            <div className="flex-1">
              <div className="font-medium">{method.label}</div>
              {method.id === "cod" && (
                <div className="text-sm text-green-600">Available for this hotel</div>
              )}
            </div>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              selectedPayment === method.id
                ? "border-blue-500 bg-blue-500"
                : "border-gray-300"
            }`}>
              {selectedPayment === method.id && (
                <div className="w-2 h-2 rounded-full bg-white" />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
        <div className="flex items-start gap-3">
          <FaInfoCircle className="text-yellow-600 mt-1 flex-shrink-0" />
          <div className="text-sm text-yellow-800">
            <p className="font-medium mb-1">Important Note:</p>
            <p>Your booking is confirmed only after successful payment. Free cancellation available until 24 hours before check-in.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="text-center py-12">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <FaCheckCircle className="text-green-500 text-4xl" />
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Booking Confirmed! 🎉</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Your booking at <span className="font-semibold text-blue-600">{hotel.name}</span> has been successfully confirmed. 
        Booking details have been sent to <span className="font-medium">{formData.email}</span>
      </p>
      
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto mb-8">
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">📋</div>
          <h3 className="text-xl font-bold text-gray-800">Booking Summary</h3>
        </div>
        
        <div className="space-y-3 text-left">
          <div className="flex justify-between">
            <span className="text-gray-600">Booking ID:</span>
            <span className="font-mono font-semibold">MMT-{Date.now().toString().slice(-8)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Hotel:</span>
            <span className="font-medium">{hotel.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Dates:</span>
            <span className="font-medium">{formData.checkIn} to {formData.checkOut}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Guests:</span>
            <span className="font-medium">{formData.adults} Adult{formData.adults > 1 ? 's' : ''}{formData.children > 0 ? `, ${formData.children} Child${formData.children > 1 ? 'ren' : ''}` : ''}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total Amount:</span>
            <span className="text-xl font-bold text-green-600">₹{totalPrice.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => router.push("/")}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </button>
        <button
          onClick={() => window.print()}
          className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors ml-4"
        >
          Print Booking Details
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Progress Steps */}
        {bookingStep < 3 && (
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step === bookingStep
                      ? "bg-blue-600 text-white"
                      : step < bookingStep
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-24 h-1 ${
                      step < bookingStep ? "bg-green-500" : "bg-gray-200"
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span className={`${bookingStep === 1 ? "font-bold text-blue-600" : ""}`}>Guest Details</span>
              <span className={`${bookingStep === 2 ? "font-bold text-blue-600" : ""}`}>Payment</span>
              <span>Confirmation</span>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="lg:w-2/3">
            {bookingStep === 1 && renderStep1()}
            {bookingStep === 2 && renderStep2()}
            {bookingStep === 3 && renderStep3()}
          </div>

          {/* Right Sidebar - Price Summary */}
          {bookingStep < 3 && (
            <div className="lg:w-1/3">
              <div className="sticky top-6">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                    <h3 className="text-xl font-bold mb-2">Price Summary</h3>
                    <p className="text-sm opacity-90">{nights} Night{nights > 1 ? 's' : ''} • {formData.rooms} Room{formData.rooms > 1 ? 's' : ''}</p>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Room Price</span>
                        <span>₹{roomPrice.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Special Discount</span>
                        <span className="text-green-600">- ₹{discount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Taxes & Fees</span>
                        <span>₹{tax.toLocaleString()}</span>
                      </div>
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total Amount</span>
                          <span className="text-blue-600">₹{totalPrice.toLocaleString()}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Inclusive of all taxes</p>
                      </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <FaShieldAlt className="text-green-500" />
                          <span>Secure & Safe Booking</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <FaLock className="text-green-500" />
                          <span>Your data is protected</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <FaCheckCircle className="text-green-500" />
                          <span>Free Cancellation Available</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 space-y-3">
                      {bookingStep === 1 ? (
                        <button
                          onClick={() => setBookingStep(2)}
                          className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={!formData.name || !formData.mobile || !formData.email}
                        >
                          Proceed to Payment
                        </button>
                      ) : (
                        <button
                          onClick={handleBooking}
                          className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={isLoading || !selectedPayment}
                        >
                          {isLoading ? (
                            <span className="flex items-center justify-center gap-2">
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Processing...
                            </span>
                          ) : (
                            `Pay ₹${totalPrice.toLocaleString()}`
                          )}
                        </button>
                      )}

                      <p className="text-center text-xs text-gray-500">
                        By proceeding, I agree to the Terms & Conditions and Privacy Policy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}