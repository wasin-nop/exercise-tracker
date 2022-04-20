import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Form from "./Page/Form.jsx";
import Records from "./Page/Records";
import Update from "./Components/ActivityUpdate/Update";

const App = () => {
  // const [activityType, setActivityType] = useState("running");
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/records" element={<Records />} />
        <Route path="/records/:id" element={<Update />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
