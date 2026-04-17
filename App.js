import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import BookCounseltation from "./Pages/BookCounseltation";
import BookCounseltationForm from "./Pages/BookCounseltationForm";
import TermsAndConditions from "./Pages/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Rules from "./Pages/Rules";
import Demo from "./Pages/Demo";

function App() {
  return (
    <div className="bg-light-background    w-full ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-consultation" element={<BookCounseltation />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/rules-procedures" element={<Rules />} />
        <Route path="/demo" element={<Demo />} />
        <Route
          path="/book-consultation-form"
          element={<BookCounseltationForm />}
        />
      </Routes>
    </div>
  );
}

export default App;
