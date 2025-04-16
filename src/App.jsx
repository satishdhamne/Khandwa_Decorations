// App.js
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
// // import ScrollToTop from "./components/utils/ScrollToTop";
// import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <div className="app-container min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
