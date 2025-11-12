import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 fade-in">
                About Professor Dr. Mehmet Veli Karaaltın
              </h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  [Insert Bio Text Here - Professional background, education, certifications, achievements]
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  [Insert additional biographical information and professional philosophy]
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
