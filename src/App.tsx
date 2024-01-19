import Home from "./components/Home";
import WidthButton from "./components/WidthButton";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Contact from "./components/Contact";
import EPortal from "./components/EPortal";
import Advertisement from "./components/Advertisement";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Billing from "./components/Billing";
import Person from "./components/Persons/Person";
import PersonDetails from "./components/Persons/PersonDetails";
import Layout from "./components/Layout";
import Dashboard from "./components/Host/Dashboard";
import Income from "./components/Host/Income";
import Review from "./components/Host/Review";
import HostLayout from "./components/Host/HostLayout";
import Details from "./components/Persons/Details";
import PersonPricing from "./components/Persons/PersonPricing";
import PersonPhotos from "./components/Persons/PersonPhotos";
import "./Server";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tracker" element={<WidthButton />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="e-portal" element={<EPortal />} />
          <Route path="advertisement" element={<Advertisement />} />
          <Route path="billing" element={<Billing />} />

          <Route path="person" element={<Person />} />
          <Route path="person/:id" element={<PersonDetails />}>
            <Route index element={<Details />} />
            <Route path="pricing" element={<PersonPricing />} />
            <Route path="photos" element={<PersonPhotos />} />
          </Route>

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
