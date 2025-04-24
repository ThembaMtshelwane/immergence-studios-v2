import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Image from "./components/Image";
import Services from "./components/Services";
import Team from "./components/Team";

const App = () => {
  return (
    <section className="font-tagesschrift">
      <Hero />
      <About />
      <Services />
      <Image />
      <Team />
      <Contact />
    </section>
  );
};

export default App;
