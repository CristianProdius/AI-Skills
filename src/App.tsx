import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./assets/pages/HomePage";
import Despre from "./assets/pages/Despre";
import Contact from "./assets/pages/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/despre" element={<Despre />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
