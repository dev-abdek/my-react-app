import Home from "./components/Home";
import WidthButton from "./components/WidthButton";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Contact from "./components/Contact";
import EPortal from "./components/EPortal";
import Advertisement from "./components/Advertisement";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Billing from "./components/Billing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<WidthButton />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/e-portal" element={<EPortal />} />
        <Route path="/advertisement" element={<Advertisement />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
