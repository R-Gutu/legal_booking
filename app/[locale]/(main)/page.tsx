import Home from "./_components/Home";
import Team from "./_components/Team";
import Services from "./_components/Services";
import WhyChooseUs from "./_components/WhyChooseUs";
import Vouches from "./_components/Vouches";
import FAQ from "./_components/FAQ";

export default function page() {
  return (
    <div className="font-playfair">
      {/* <Home/> */}
      {/* <Team/> */}
      {/* <Services /> */}
      {/* <WhyChooseUs /> */}
      <Vouches />
      <FAQ />
    </div>
  );
}
