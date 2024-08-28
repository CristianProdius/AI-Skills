import Header from "../components/Header";
import Hero from "../components/Hero";
import Parteners from "../components/Parteners";
import Curriculum from "../components/Curriculum";
import Social from "../components/Social";
import DespreCurs from "../components/DespreCurs";
import DeCeParticipi from "../components/DeCeParticipi";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Parteners />
      <DespreCurs />
      <Social />
      <Curriculum />
      <DeCeParticipi />
      <Footer />
    </div>
  );
};

export default HomePage;
