import "./index.css";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { copy } from "./Translations";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Embassy from "./pages/Embassy";

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [lang, setLang] = useState("en"); 
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <ScrollToHash />
      <Header t={t} onToggle={() => setLang(lang === "en" ? "ar" : "en")} />
      <main>
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/embassy" element={<Embassy t={t} />} />
        </Routes>
      </main>
      <Footer t={t} />
    </div>
  );
}
