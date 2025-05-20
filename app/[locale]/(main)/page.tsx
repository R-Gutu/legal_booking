import Home from "./_components/Home";
import Team from "./_components/Team";
import Services from "./_components/Services";


export default function page() {
  return (
    <div className="font-playfair">
      <Home/>
      <Team/>
      <Services />
    </div>
  );
}
