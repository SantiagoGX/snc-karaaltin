import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "London, UK",
    text: "Dr. Karaaltın transformed my confidence. His expertise and caring approach made the entire experience exceptional.",
    rating: 5,
  },
  {
    name: "Michael R.",
    location: "Dubai, UAE",
    text: "World-class results with minimal downtime. I traveled specifically to work with Dr. Karaaltın and it exceeded all expectations.",
    rating: 5,
  },
  {
    name: "Elena V.",
    location: "Moscow, Russia",
    text: "The most skilled surgeon I've ever consulted. His attention to detail and natural-looking results are unmatched.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="pt-8 lg:pt-12 pb-8 lg:pb-12 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Patient Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from patients who trusted Dr. Karaaltın for their transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-background border-border fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
