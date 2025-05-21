import About from "@/components/about";
import Clients from "@/components/clients";
import Contact from "@/components/contact";
import CTA from "@/components/cta";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Solutions from "@/components/solutions";
 export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Solutions />
        <Services />
        <Clients />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

