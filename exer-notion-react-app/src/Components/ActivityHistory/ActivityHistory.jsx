// import Navbar from "../Components/Navbar/Navbar";
// import Footer from "../Components/Footer/Footer";
// import ActivityIcon from "../Components/ActivityIcon/ActivityIcon.jsx";
// import ActivityForm from "../Components/ActivityForm/ActivityForm";

import "../../App.css";
import "./ActivityHistory.css";
import ActivityForm from "../ActivityForm/ActivityForm";

const ActivityHistory = (props) => {
  const activityDetail = [
    { activityName: "Run with Heang bro", activityType: "running" },
  ];
  const activityMap = activityDetail.map((props) => {
    return (
      <div className="card-container card-border">
        <div className="card-img-container">
          <img className="card-img" src="./running(1).png" alt="" />
        </div>
        <div className="card-detail">
          <div className="card-topic ">
            <div>Date:</div>
            <div>
              Name: <span></span>
            </div>
            <div>
              Duration: <span></span>
            </div>
            <div>
              Type: <span></span>
            </div>
            <div>
              Description: <span></span>
            </div>
          </div>
          <div className="card-topic-detail">
            <div>
              {/* props.activityDate 18 Jan 2022*/}
              {props.activityDate}
            </div>
            <div>
              {/* props.activityName Keep running*/}
              {props.activityName}
            </div>
            <div>
              {/* props.activityDuration 1:41:12*/}
              {props.activityDuration}
            </div>
            <div>
              {/* props.activityType Running*/}
              {props.activityType}
            </div>
            <div>
              {/* props.activityDescription  I'm so tired but my friend keep running ... so I have to catch up
              this monster*/}
              {props.activityDescription}
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <main className="container">
        <div className="activity-history-text-container">
          <div className=" activity-text">Activity History</div>
          <div className="activity-text">All</div>
        </div>
        <div className="activity-container"></div>
      </main>
      ;
    </>
  );
};

export default ActivityHistory;
