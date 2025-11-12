import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-center fade-in">
                Book Your Consultation
              </h1>
              <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
                Take the first step towards your transformation. Contact us today to schedule a consultation.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="fade-in">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          First Name
                        </label>
                        <Input placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Last Name
                        </label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <Input type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        placeholder="Tell us about your goals and what procedure you're interested in..."
                        rows={6}
                      />
                    </div>
                    <Button size="lg" className="w-full">
                      Submit Consultation Request
                    </Button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8 fade-in" style={{ animationDelay: "0.2s" }}>
                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-6">
                      Contact Information
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-gold mt-1" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <a
                            href="tel:+90XXXXXXXXXX"
                            className="text-muted-foreground hover:text-gold transition-colors"
                          >
                            +90 XXX XXX XX XX
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-gold mt-1" />
                        <div>
                          <p className="font-medium">Email</p>
                          <a
                            href="mailto:info@drkaraaltin.com"
                            className="text-muted-foreground hover:text-gold transition-colors"
                          >
                            info@drkaraaltin.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-gold mt-1" />
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-muted-foreground">
                            Istanbul, Turkey
                            <br />
                            [Insert Full Address]
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary p-6 rounded-lg">
                    <h3 className="text-xl font-serif font-semibold mb-3">
                      Office Hours
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="text-muted-foreground">Closed</span>
                      </p>
                    </div>
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
