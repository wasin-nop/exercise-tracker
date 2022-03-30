// import logo from "./logo.svg";
import { useState } from "react";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ActivityIcon from "../Components/ActivityIcon/ActivityIcon.jsx";
import ActivityForm from "../Components/ActivityForm/ActivityForm";

import "../App.css";

const Form = () => {
  const [activityType, setActivityType] = useState("running");
  return (
    <>
      <Navbar />
      <ActivityIcon setActivityType={setActivityType} />
      <ActivityForm
        activityType={activityType}
        setActivityType={setActivityType}
      />
      <Footer />
    </>
  );
};

export default Form;
