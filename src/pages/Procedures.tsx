import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Procedures = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 fade-in">
                Procedures & Techniques
              </h1>
              <p className="text-lg text-muted-foreground mb-12">
                [Insert Procedure Descriptions - Comprehensive list of surgical procedures and techniques offered]
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Procedures;
