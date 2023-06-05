import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes";
import Attributions from "./routes/Attributions";
import Description from "./routes/Description";
import Contribution from "./routes/Contribution";
import HumanPractices from "./routes/HumanPractices";
import Header from "./components/layout/Header";
import Engineering from "./routes/Engineering";
import Education from "./routes/specialPrize/Education";
import Model from "./routes/specialPrize/Model";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        {/* Standard */}
        <Route path="/attributions" element={<Attributions />} />
        <Route path="/description" element={<Description />} />
        <Route path="/contribution" element={<Contribution />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/human-practices" element={<HumanPractices />} />

        {/* Special Prizes */}
        <Route path="/education" element={<Education />} />
        <Route path="/model" element={<Model />} />
      </Routes>
    </div>
  );
};

export default App;
