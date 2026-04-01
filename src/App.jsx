import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header";
import HomeBody from "./component/home";
import Footer from "./component/footer";
import { changeLanguage } from "./component/changelanguage";

const App = () => {

  useEffect(() => {
    const savedLang = localStorage.getItem("site_lang");

    if (savedLang) {
      changeLanguage(savedLang);
    } else {
      changeLanguage("mr");   // DEFAULT LANGUAGE = MARATHI
    }
  }, []);


  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomeBody />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/portfolio" element={<h1>Portfolio Page</h1>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>


  );
};

export default App;
