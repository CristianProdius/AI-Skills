import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./assets/pages/HomePage";
import Despre from "./assets/pages/Despre";
import Contact from "./assets/pages/Contact";
import Curs from "./assets/pages/Curs";
import TermeniPage from "./assets/pages/TemeniPage";
import DataPolicy from "./assets/pages/DataPlicy";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/despre" element={<Despre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/curs" element={<Curs />} />
        <Route path="/termeni" element={<TermeniPage />} />
        <Route path="/data-policy" element={<DataPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
