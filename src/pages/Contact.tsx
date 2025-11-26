import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, ChevronRight, Camera } from "lucide-react";
import { useState } from "react";
import contactHeroImage from "@/assets/contact-hero.png";

const Contact = () => {
  const [files, setFiles] = useState<{
    front?: File;
    side?: File;
    otherSide?: File;
    additional?: File;
  }>({});

  const handleFileChange = (view: keyof typeof files, file: File | undefined) => {
    setFiles(prev => ({ ...prev, [view]: file }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#5a5653] pt-20 pb-16 lg:pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 items-center max-w-7xl mx-auto pt-16 lg:pt-24">
              {/* Left: Image */}
              <div className="fade-in">
                <div className="aspect-[4/3] bg-gray-200 rounded-none overflow-hidden">
                  <img
                    src={contactHeroImage}
                    alt="Dr. Karaaltın Surgery Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right: Title & Subtitle */}
              <div className="fade-in flex flex-col items-start lg:items-end text-left lg:text-right" style={{ animationDelay: "0.2s" }}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-wide mb-6 text-white">
                  CONTACT
                </h1>
                <p className="text-lg text-white/90 leading-relaxed max-w-xl">
                  We're here to help. Reach out to our clinic for consultations, questions, or appointment requests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-0 -mt-24 lg:-mt-32 relative z-10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl p-8 lg:p-12 fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {/* Address */}
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <MapPin className="h-8 w-8 text-[#0d1f3a]" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-3 text-gray-900">
                    ADDRESS
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Vişnezade, Balıklı Apt, Bayıldım Cd.<br />
                    No:14/16, Floor 1, Apartment 3<br />
                    34353 Beşiktaş / Istanbul, Türkiye
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest text-[#0d1f3a] hover:opacity-70 transition-opacity inline-flex items-center gap-1"
                  >
                    GET DIRECTIONS <ChevronRight className="h-3 w-3" />
                  </a>
                </div>

                {/* Phone */}
                <div className="text-center border-l border-r border-gray-200">
                  <div className="flex justify-center mb-4">
                    <Phone className="h-8 w-8 text-[#0d1f3a]" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-3 text-gray-900">
                    PHONE
                  </h3>
                  <div className="text-sm text-gray-600 mb-4 space-y-1">
                    <a href="tel:+902123254242" className="block hover:text-[#0d1f3a] transition-colors">
                      +90 212 325 42 42
                    </a>
                    <a href="tel:+905465533285" className="block hover:text-[#0d1f3a] transition-colors">
                      +90 546 553 3285
                    </a>
                  </div>
                  <a
                    href="https://wa.me/905465533285"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest text-[#0d1f3a] hover:opacity-70 transition-opacity inline-flex items-center gap-1"
                  >
                    TEXT OUR OFFICE <ChevronRight className="h-3 w-3" />
                  </a>
                </div>

                {/* Hours */}
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <Clock className="h-8 w-8 text-[#0d1f3a]" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-3 text-gray-900">
                    HOURS
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <span className="font-medium">MON–FRI:</span> 09:00–18:00
                    </p>
                    <p>
                      <span className="font-medium">SAT–SUN:</span> 11:00–16:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Form */}
                <div className="fade-in">
                  <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide mb-12">
                    GET STARTED
                  </h2>

                  <form className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          placeholder="John"
                          required
                          className="border-gray-300 focus:border-[#0d1f3a] focus:ring-[#0d1f3a]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          placeholder="Doe"
                          required
                          className="border-gray-300 focus:border-[#0d1f3a] focus:ring-[#0d1f3a]"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="border-gray-300 focus:border-[#0d1f3a] focus:ring-[#0d1f3a]"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        required
                        className="border-gray-300 focus:border-[#0d1f3a] focus:ring-[#0d1f3a]"
                      />
                    </div>

                    {/* Height & Weight */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Height
                        </label>
                        <Input
                          placeholder="5'8&quot;"
                          className="border-gray-300 focus:border-[#0d1f3a] focus:ring-[#0d1f3a]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Weight
                        </label>
                        <Input
                          placeholder="150 lbs"
                          className="border-gray-300 focus:border-[#0d1f3a] focus:ring-[#0d1f3a]"
                        />
                      </div>
                    </div>

                    {/* Procedure Interest */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        Area / Procedure of Interest
                      </label>
                      <Input
                        placeholder="e.g., Rhinoplasty, Breast Augmentation, BBL"
                        className="border-gray-300 focus:border-[#0d1f3a] focus:ring-[#0d1f3a]"
                      />
                    </div>

                    {/* Concerns Textarea */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        Describe your concerns or what you would like to improve:
                      </label>
                      <Textarea
                        placeholder="Please share any details about your goals, concerns, or questions..."
                        rows={6}
                        className="border-gray-300 focus:border-[#0d1f3a] focus:ring-[#0d1f3a] resize-none"
                      />
                    </div>

                    {/* Image Uploads */}
                    <div className="space-y-4 pt-4">
                      <h3 className="text-lg font-medium text-gray-900">Image Uploads (Maximum 4 Images)</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Front View */}
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">
                            Image Upload — Front View
                          </label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#0d1f3a] transition-colors cursor-pointer">
                            <input
                              type="file"
                              accept=".jpg,.jpeg,.png,.pdf,.heif"
                              onChange={(e) => handleFileChange('front', e.target.files?.[0])}
                              className="hidden"
                              id="front-view"
                            />
                            <label htmlFor="front-view" className="cursor-pointer">
                              <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600 mb-1">
                                {files.front ? files.front.name : 'Choose file'}
                              </p>
                              <p className="text-xs text-gray-500">
                                Accepted: jpg, png, pdf, jpeg, heif
                              </p>
                              <p className="text-xs text-gray-500">Max: 20MB</p>
                            </label>
                          </div>
                        </div>

                        {/* Side View */}
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">
                            Image Upload — Side View
                          </label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#0d1f3a] transition-colors cursor-pointer">
                            <input
                              type="file"
                              accept=".jpg,.jpeg,.png,.pdf,.heif"
                              onChange={(e) => handleFileChange('side', e.target.files?.[0])}
                              className="hidden"
                              id="side-view"
                            />
                            <label htmlFor="side-view" className="cursor-pointer">
                              <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600 mb-1">
                                {files.side ? files.side.name : 'Choose file'}
                              </p>
                              <p className="text-xs text-gray-500">
                                Accepted: jpg, png, pdf, jpeg, heif
                              </p>
                              <p className="text-xs text-gray-500">Max: 20MB</p>
                            </label>
                          </div>
                        </div>

                        {/* Other Side View */}
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">
                            Image Upload — Other Side View
                          </label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#0d1f3a] transition-colors cursor-pointer">
                            <input
                              type="file"
                              accept=".jpg,.jpeg,.png,.pdf,.heif"
                              onChange={(e) => handleFileChange('otherSide', e.target.files?.[0])}
                              className="hidden"
                              id="other-side-view"
                            />
                            <label htmlFor="other-side-view" className="cursor-pointer">
                              <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600 mb-1">
                                {files.otherSide ? files.otherSide.name : 'Choose file'}
                              </p>
                              <p className="text-xs text-gray-500">
                                Accepted: jpg, png, pdf, jpeg, heif
                              </p>
                              <p className="text-xs text-gray-500">Max: 20MB</p>
                            </label>
                          </div>
                        </div>

                        {/* Additional Photo */}
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">
                            Image Upload — Additional Photo (optional)
                          </label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#0d1f3a] transition-colors cursor-pointer">
                            <input
                              type="file"
                              accept=".jpg,.jpeg,.png,.pdf,.heif"
                              onChange={(e) => handleFileChange('additional', e.target.files?.[0])}
                              className="hidden"
                              id="additional-photo"
                            />
                            <label htmlFor="additional-photo" className="cursor-pointer">
                              <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600 mb-1">
                                {files.additional ? files.additional.name : 'Choose file'}
                              </p>
                              <p className="text-xs text-gray-500">
                                Accepted: jpg, png, pdf, jpeg, heif
                              </p>
                              <p className="text-xs text-gray-500">Max: 20MB</p>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Privacy Notice */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Your information and uploaded images are kept confidential and used solely for medical assessment and appointment coordination. We do not share your data with third parties.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#0d1f3a] hover:bg-[#0d1f3a]/90 text-white uppercase tracking-widest text-sm py-6 group"
                    >
                      START YOUR JOURNEY
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </div>

                {/* Right Side Video */}
                <div className="hidden lg:block fade-in sticky top-24" style={{ animationDelay: "0.2s" }}>
                  <div className="aspect-[9/16] bg-gray-200 rounded-lg overflow-hidden max-h-[600px]">
                    <video
                      src="/cta-video.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
