import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Home from "./pages/Home"
import AppDesign from "./pages/AppDesign"
import About from "./pages/About"
import Contact from "./pages/Contact"
import GraphicDesign from "./pages/GraphicDesign"
import Location from "./pages/Location"
import WebDesign from "./pages/WebDesign"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app-design" element={<AppDesign />} />
            <Route path="/web-design" element={<WebDesign />} />
            <Route path="/graphics-design" element={<GraphicDesign />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Location />} />
          </Routes>
          </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
