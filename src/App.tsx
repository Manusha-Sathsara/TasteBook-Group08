import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfService from "./Pages/TermsOfService";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <SocialLinks />
      <PrivacyPolicy />
      <TermsOfService />
      <Footer />
    </>
  );
}

export default App;
