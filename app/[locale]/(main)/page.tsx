'use client'
import Home from "./_components/Home";
import Team from "./_components/Team";
import Services from "./_components/Services";
import WhyChooseUs from "./_components/WhyChooseUs";
import Vouches from "./_components/Vouches";
import FAQ from "./_components/FAQ";
import { useRef } from "react";

export default function Page() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const scrollToServices = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  }

return (
  <div className="font-playfair">
    <Home scrollToServices={scrollToServices} />
    <Team scrollToServices={scrollToServices} />
    <Services servicesRef={targetRef} />
    <WhyChooseUs scrollToServices={scrollToServices}  />
    <Vouches />
    <FAQ />
  </div>
);
}
