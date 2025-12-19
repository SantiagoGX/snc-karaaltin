import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, ChevronRight, Camera, ImageIcon } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import contactHeroImage from "@/assets/contact-hero.png";

const Contact = () => {
  const [wantsToSharePhotos, setWantsToSharePhotos] = useState(false);
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
        {/* Hero Section - Hakimi Style with Diagonal Overlap */}
        <section className="bg-[#5a5653] pt-20 pb-24 lg:pb-32 relative">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12 items-center pt-16 lg:pt-20 min-h-[500px] lg:min-h-[600px]">
              {/* Left: Hero Image - Vertical Format */}
              <div className="fade-in flex justify-start">
                <img
                  src={contactHeroImage}
                  alt="Dr. Karaaltín Clinic"
                  className="w-full max-w-[400px] h-auto object-contain rounded-xl mb-[-80px] lg:mb-[-100px]"
                />
              </div>

              {/* Right: Title & Subtitle - Centered Vertically */}
              <div className="fade-in flex flex-col justify-center" style={{ animationDelay: "0.2s" }}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-wide mb-6 text-white">
                  CONTACT
                </h1>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
                  We're here to help. Reach out to our clinic for consultations, questions, or appointment requests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Banner - Overlapping Hero with Shadow */}
        <section className="relative z-10 -mt-16 lg:-mt-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 fade-in" style={{ animationDelay: "0.4s" }}>
              {/* Address */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-gray-700" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                    Address
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Teşvikiye, Sakayık Sk. No:47,<br />
                  34365 Şişli/İstanbul, Turkey
                </p>
                <a
                  href="https://www.google.com/maps/place/Prof.+Dr.+Mehmet+Veli+Karaalt%C4%B1n/@41.0428434,28.9958192,17z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs font-semibold uppercase tracking-widest text-gray-900 hover:text-gray-600 transition-colors duration-300"
                >
                  Get Directions →
                </a>
              </div>

              {/* Phone */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <Phone className="w-6 h-6 text-gray-700" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                    Phone
                  </h3>
                </div>
                <a
                  href="tel:+902123254242"
                  className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium"
                >
                  +90 212 325 42 42
                </a>
                <a
                  href="sms:+902123254242"
                  className="inline-block mt-3 text-xs font-semibold uppercase tracking-widest text-gray-900 hover:text-gray-600 transition-colors duration-300"
                >
                  Text Our Office →
                </a>
              </div>

              {/* Hours */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <Clock className="w-6 h-6 text-gray-700" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                    Hours
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Video Section - Centered Layout */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start justify-center">
              {/* Left: Contact Form */}
              <div className="fade-in-up">
                <h2 className="text-3xl lg:text-4xl font-serif font-light tracking-wide mb-2 text-gray-900">
                  Book Your Consultation
                </h2>
                <p className="text-sm text-gray-600 mb-8">
                  All fields marked with <span className="text-red-500">*</span> are required
                </p>

                <form className="space-y-8">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="John"
                        required
                        className="w-full border-0 border-b border-gray-300 rounded-none px-0 focus:border-gray-900 focus:ring-0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Doe"
                        required
                        className="w-full border-0 border-b border-gray-300 rounded-none px-0 focus:border-gray-900 focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="john.doe@example.com"
                        required
                        className="w-full border-0 border-b border-gray-300 rounded-none px-0 focus:border-gray-900 focus:ring-0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        required
                        className="w-full border-0 border-b border-gray-300 rounded-none px-0 focus:border-gray-900 focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Height & Weight (Optional) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Height <span className="text-gray-400 text-xs">(Optional)</span>
                      </label>
                      <Input
                        placeholder="5'8&quot;"
                        className="w-full border-0 border-b border-gray-300 rounded-none px-0 focus:border-gray-900 focus:ring-0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Weight <span className="text-gray-400 text-xs">(Optional)</span>
                      </label>
                      <Input
                        placeholder="150 lbs"
                        className="w-full border-0 border-b border-gray-300 rounded-none px-0 focus:border-gray-900 focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Area/Procedure of Interest */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Area/Procedure of Interest <span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="e.g., Rhinoplasty, Breast Augmentation"
                      required
                      className="w-full border-0 border-b border-gray-300 rounded-none px-0 focus:border-gray-900 focus:ring-0"
                    />
                  </div>

                  {/* Concerns */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Your Concerns or Questions <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      placeholder="Tell us about your goals and any questions you may have..."
                      rows={5}
                      required
                      className="w-full min-h-[120px] resize-none border-0 border-b border-gray-300 rounded-none px-0 focus:border-gray-900 focus:ring-0"
                    />
                  </div>

                  {/* Image Uploads Section */}
                  <div className="space-y-4 pt-4">
                    {/* Checkbox to enable photo uploads */}
                    <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <Checkbox
                        id="share-photos"
                        checked={wantsToSharePhotos}
                        onCheckedChange={(checked) => setWantsToSharePhotos(checked === true)}
                        className="mt-0.5"
                      />
                      <div className="flex-1">
                        <label
                          htmlFor="share-photos"
                          className="text-sm font-medium text-gray-900 cursor-pointer flex items-center gap-2"
                        >
                          <ImageIcon className="w-4 h-4 text-gray-600" />
                          I would like to share photos for the doctor to review
                        </label>
                        <p className="text-xs text-gray-500 mt-1">
                          Optional: Upload up to 4 images to help us better understand your goals
                        </p>
                      </div>
                    </div>
                    
                    {/* Conditional Image Upload Grid */}
                    {wantsToSharePhotos && (
                      <div className="space-y-4 animate-fade-in">
                        <h3 className="text-lg font-medium text-gray-900">Upload Your Photos (Maximum 4)</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Front View */}
                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">
                              Front View
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-900 transition-colors cursor-pointer">
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
                                  jpg, png, pdf, heif · Max 20MB
                                </p>
                              </label>
                            </div>
                          </div>

                          {/* Side View */}
                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">
                              Side View
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-900 transition-colors cursor-pointer">
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
                                  jpg, png, pdf, heif · Max 20MB
                                </p>
                              </label>
                            </div>
                          </div>

                          {/* Other Side View */}
                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">
                              Other Side View
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-900 transition-colors cursor-pointer">
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
                                  jpg, png, pdf, heif · Max 20MB
                                </p>
                              </label>
                            </div>
                          </div>

                          {/* Additional Photo */}
                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">
                              Additional Photo <span className="text-gray-400 font-normal">(optional)</span>
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-900 transition-colors cursor-pointer">
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
                                  jpg, png, pdf, heif · Max 20MB
                                </p>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white uppercase tracking-widest text-sm py-6 group"
                  >
                    START YOUR JOURNEY
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>

              {/* Right: Video - Vertical Format */}
              <div className="fade-in-up flex justify-center lg:justify-start" style={{ animationDelay: "0.2s" }}>
                <div className="w-full max-w-[400px] rounded-lg overflow-hidden shadow-lg">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  >
                    <source src="/cta-video.mp4" type="video/mp4" />
                  </video>
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
