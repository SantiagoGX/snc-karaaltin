import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, ChevronRight, Camera, ImageIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import contactHeroImage from "@/assets/contact-hero.png";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useTranslation();
  const [wantsToSharePhotos, setWantsToSharePhotos] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    height: '',
    weight: '',
    areaOfInterest: '',
    concerns: '',
  });
  const [files, setFiles] = useState<{
    front?: File;
    side?: File;
    otherSide?: File;
    additional?: File;
  }>({});

  const handleFileChange = (view: keyof typeof files, file: File | undefined) => {
    setFiles(prev => ({ ...prev, [view]: file }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast.success(t('contact.successMessage', 'Your consultation request has been sent successfully! We will contact you shortly.'));
      setFormData({
        firstName: '', lastName: '', email: '', phone: '',
        height: '', weight: '', areaOfInterest: '', concerns: '',
      });
    } catch (error: any) {
      console.error('Error sending form:', error);
      toast.error(t('contact.errorMessage', 'There was an error sending your request. Please try again.'));
    } finally {
      setIsSubmitting(false);
    }
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
                  {t('contact.title')}
                </h1>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
                  {t('contact.subtitle')}
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
                    {t('contact.address')}
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
                  {t('contact.getDirections')} →
                </a>
              </div>

              {/* Phone */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <Phone className="w-6 h-6 text-gray-700" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                    {t('contact.phone')}
                  </h3>
                </div>
                <a
                  href="tel:+902123254242"
                  className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium"
                >
                  +90 212 325 42 42
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=905465533285&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-xs font-semibold uppercase tracking-widest text-gray-900 hover:text-gray-600 transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp →
                </a>
              </div>

              {/* Hours */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <Clock className="w-6 h-6 text-gray-700" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                    {t('contact.hours')}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {t('contact.hoursMonFri', 'Monday - Friday: 9:00 AM - 6:00 PM')}<br />
                  {t('contact.hoursSat', 'Saturday: 10:00 AM - 4:00 PM')}<br />
                  {t('contact.hoursSun', 'Sunday: Closed')}
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
                  {t('contact.bookConsultation', 'Book Your Consultation')}
                </h2>
                <p className="text-sm text-gray-600 mb-8">
                  {t('contact.requiredFields', 'All fields marked with')} <span className="text-red-500">*</span> {t('contact.areRequired', 'are required')}
                </p>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        {t('contact.firstName')} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="John"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full border-0 border-b border-gray-300 rounded-none px-0 focus:border-gray-900 focus:ring-0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        {t('contact.lastName')} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Doe"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full border-0 border-b border-gray-300 rounded-none px-0 focus:border-gray-900 focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        {t('contact.email')} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="john.doe@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full border-0 border-b border-gray-300 rounded-none px-0 focus:border-gray-900 focus:ring-0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        {t('contact.phoneNumber')} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full border-0 border-b border-gray-300 rounded-none px-0 focus:border-gray-900 focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Height & Weight (Optional) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        {t('contact.height')}
                      </label>
                      <Input
                        placeholder="5'8&quot;"
                        value={formData.height}
                        onChange={(e) => handleInputChange('height', e.target.value)}
                        className="w-full border-0 border-b border-gray-300 rounded-none px-0 focus:border-gray-900 focus:ring-0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        {t('contact.weight')}
                      </label>
                      <Input
                        placeholder="150 lbs"
                        value={formData.weight}
                        onChange={(e) => handleInputChange('weight', e.target.value)}
                        className="w-full border-0 border-b border-gray-300 rounded-none px-0 focus:border-gray-900 focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Area/Procedure of Interest */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      {t('contact.areaOfInterest')} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder={t('contact.selectProcedure')}
                      required
                      value={formData.areaOfInterest}
                      onChange={(e) => handleInputChange('areaOfInterest', e.target.value)}
                      className="w-full border-0 border-b border-gray-300 rounded-none px-0 focus:border-gray-900 focus:ring-0"
                    />
                  </div>

                  {/* Concerns */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      {t('contact.concerns')} <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      placeholder={t('contact.concernsPlaceholder')}
                      rows={5}
                      required
                      value={formData.concerns}
                      onChange={(e) => handleInputChange('concerns', e.target.value)}
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
                          {t('contact.sharePhotos')}
                        </label>
                        <p className="text-xs text-gray-500 mt-1">
                          {t('contact.sharePhotosDesc')}
                        </p>
                      </div>
                    </div>
                    
                    {/* Conditional Image Upload Grid */}
                    {wantsToSharePhotos && (
                      <div className="space-y-4 animate-fade-in">
                        <h3 className="text-lg font-medium text-gray-900">{t('contact.uploadPhotosTitle')}</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Front View */}
                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">
                              {t('contact.frontView')}
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
                                  {files.front ? files.front.name : t('contact.chooseFile', 'Choose file')}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {t('contact.acceptedFormats')}
                                </p>
                              </label>
                            </div>
                          </div>

                          {/* Side View */}
                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">
                              {t('contact.sideView')}
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
                                  {files.side ? files.side.name : t('contact.chooseFile', 'Choose file')}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {t('contact.acceptedFormats')}
                                </p>
                              </label>
                            </div>
                          </div>

                          {/* Other Side View */}
                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">
                              {t('contact.otherSideView')}
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
                                  {files.otherSide ? files.otherSide.name : t('contact.chooseFile', 'Choose file')}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {t('contact.acceptedFormats')}
                                </p>
                              </label>
                            </div>
                          </div>

                          {/* Additional Photo */}
                          <div>
                            <label className="block text-sm font-medium mb-2 text-gray-700">
                              {t('contact.additionalPhoto')}
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
                                  {files.additional ? files.additional.name : t('contact.chooseFile', 'Choose file')}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {t('contact.acceptedFormats')}
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
                      {t('contact.privacyNotice')}
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white uppercase tracking-widest text-sm py-6 group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t('contact.sending', 'Sending...')}
                      </>
                    ) : (
                      <>
                        {t('contact.submitButton')}
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
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
