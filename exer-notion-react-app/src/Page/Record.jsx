import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
// import ActivityIcon from "../Components/ActivityIcon/ActivityIcon.jsx";
// import ActivityForm from "../Components/ActivityForm/ActivityForm";
import ActivityHistory from "../Components/ActivityHistory/ActivityHistory";

import "../App.css";

const Record = () => {
  return (
    <>
      <Navbar />
      <ActivityHistory />
      <Footer />
    </>
  );
};

export default Record;
