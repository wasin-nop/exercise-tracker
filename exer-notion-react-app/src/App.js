import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";
import Form from "./Page/Form.jsx";
import Record from "./Page/Record";

const App = () => {
  const [activityType, setActivityType] = useState("running");
  return (
    // <>
    //   <Navbar />
    //   <Form />
    //   <Footer />
    // </>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="record" element={<Record />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
