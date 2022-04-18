import { useState, useEffect } from "react";
import Axios from "axios";
import "../../App.css";
import "./ActivityHistory.css";

const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);
const cutDate = (text) => text.slice(0, 10);

const client = Axios.create({
  baseURL: "http://localhost:4000",
  validateStatus: () => true,
});

const ActivityHistory = (props) => {
  const [activityDetail, setActivityDetail] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await client.get("/record");
      console.log(response.status);
      console.log(response.data);

      if (response.status === 200) {
        setActivityDetail(response.data);
      } else {
        alert("Cannot connect to server");
      }
    })();
  }, []);
  return (
    <>
      <main className="container">
        <div className="activity-history-text-container">
          <div className=" activity-text">Activity History</div>
          <div className="activity-text">All</div>
        </div>
        <div className="activity-container">
          {activityDetail.map((props) => {
            return (
              <div className="card-container card-border">
                <div className="card-img-container">
                  <img
                    className="card-img"
                    src={"./" + props.type + ".png"}
                    alt=""
                  />
                </div>
                <div className="card-detail">
                  <div className="card-topic ">
                    <div>Date:</div>
                    <div>Name:</div>
                    <div>Duration:</div>
                    <div>Type:</div>
                    <div>Description:</div>
                  </div>
                  <div className="card-topic-detail">
                    <div>{cutDate(props.date)}</div>
                    <div>{props.name}</div>
                    <div>{props.duration}</div>
                    <div>{capitalize(props.type)}</div>
                    <div>{props.description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      ;
    </>
  );
};

export default ActivityHistory;
