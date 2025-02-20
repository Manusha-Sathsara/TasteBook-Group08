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
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
