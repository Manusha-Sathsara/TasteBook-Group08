import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfService from "./Pages/TermsOfService";
import QA from "./Pages/QA";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Category from "./Pages/Category";
import RootLayout from "./layout/RootLayout";
import Recipe01 from "./Pages/Recipes/Recipe01";
import Recipe02 from "./Pages/Recipes/Recipe02";
import Recipe03 from "./Pages/Recipes/Recipe03";
import Recipe04 from "./Pages/Recipes/Recipe04";
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
  return <RouterProvider router={router} />;
}

export default App;
