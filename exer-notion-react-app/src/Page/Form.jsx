import { useState } from "react";

import ActivityIcon from "../Components/ActivityIcon/ActivityIcon.jsx";
import ActivityForm from "../Components/ActivityForm/ActivityForm";

import "../App.css";

const Form = () => {
  const [activityType, setActivityType] = useState("running");
  return (
    <>
      <ActivityIcon setActivityType={setActivityType} />
      <ActivityForm
        activityType={activityType}
        setActivityType={setActivityType}
      />
    </>
  );
};

export default Form;
