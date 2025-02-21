import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="category" element={<Category />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="qa" element={<QA />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
        <Route path="termsofservice" element={<TermsOfService />} />
        <Route path="recipe01" element={<Recipe01 />} />
        <Route path="recipe02" element={<Recipe02 />} />
        <Route path="recipe03" element={<Recipe03 />} />
        <Route path="recipe04" element={<Recipe04 />} />
      </Route>
    )
  );
  return (
    <>
      <NavBar />
      <Hero />
      <SocialLinks />
    </>
  );
}

export default App;
