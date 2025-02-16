import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <SocialLinks />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}

export default App;
