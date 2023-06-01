import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes";
import Attributions from "./routes/Attributions";
import Description from "./routes/Description";
import Contribution from "./routes/Contribution";
import HumanPractices from "./routes/HumanPractices";
import Header from "./components/layout/Header";
import Engineering from "./routes/Engineering";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/attributions" element={<Attributions />} />
          <Route path="/description" element={<Description />} />
          <Route path="/contribution" element={<Contribution />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/human-practices" element={<HumanPractices />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
