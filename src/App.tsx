import "./App.css";
import Footer from "./Pages/components/Footer";
import Hero from "./Pages/components/Hero";
import NavBar from "./Pages/components/NavBar";
import SocialLinks from "./Pages/components/SocialLinks";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfService from "./Pages/TermsOfService";
import QA from "./Pages/QA";
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <SocialLinks />
      <PrivacyPolicy />
      <TermsOfService />
      <QA />
      <Footer />
    </>
  );
}

export default App;
