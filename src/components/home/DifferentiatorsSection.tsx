import { Award, Lightbulb, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const differentiators = [
  {
    icon: Award,
    title: "International Recognition",
    description:
      "Board-certified with international acclaim and memberships in prestigious medical societies worldwide.",
  },
  {
    icon: Lightbulb,
    title: "Patented Techniques",
    description:
      "Pioneering innovative surgical methods with patented techniques that minimize recovery time and maximize results.",
  },
  {
    icon: Users,
    title: "Facial Reconstruction Expert",
    description:
      "Specialized expertise in complex facial reconstruction and aesthetic enhancement procedures.",
  },
  {
    icon: Heart,
    title: "Personalized Care Plans",
    description:
      "Every patient receives a customized treatment plan tailored to their unique needs and goals.",
  },
];

const DifferentiatorsSection = () => {
  return (
    <section className="pt-8 lg:pt-12 pb-8 lg:pb-12 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Why Choose Dr. Karaaltın?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Decades of excellence, innovation, and patient-centered care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-shadow duration-300 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gold/10">
                  <item.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
