import { useState, useEffect } from "react";
import AnimatedCursor from "./components/AnimatedCursor";
import LoadingScreen from "./components/LoadingScreen";
import PopupForm from "./components/PopupForm";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Features from "./components/Features";
import ClientShowcase from "./components/ClientShowcase";
import Reviews from "./components/Reviews";
import FeaturePoster from "./components/FeaturePoster";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // Show popup 5 seconds after loading completes
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      <AnimatedCursor />
      
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <main className="relative">
          <Navbar />
          <Hero />
          <Services />
          <WhyChooseUs />
          <Features />
          <ClientShowcase />
          <Reviews />
          <FeaturePoster />
          <Footer />
          <FloatingButtons />
          
          <PopupForm isOpen={showPopup} onClose={() => setShowPopup(false)} />
        </main>
      )}
    </>
  );
}

