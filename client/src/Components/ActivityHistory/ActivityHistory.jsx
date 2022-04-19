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
        <div className=" activity-history-text">Activity History</div>
        {/* <div className="activity-history-text-container">
          <div className="activity-text">All</div>
        </div> */}
        <div className="activity-container">
          {activityDetail.map((props) => {
            console.log(props);
            return (
              <div className="card-container card-border" key={props._id}>
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
                <div className="edit-del-button">
                  <a href="#">
                    <svg
                      fill="#000000"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20px"
                      height="20px"
                    >
                      {" "}
                      <path d="M 19.171875 2 C 18.448125 2 17.724375 2.275625 17.171875 2.828125 L 16 4 L 20 8 L 21.171875 6.828125 C 22.275875 5.724125 22.275875 3.933125 21.171875 2.828125 C 20.619375 2.275625 19.895625 2 19.171875 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z" />
                    </svg>
                  </a>
                  {/* <a href="#">
                    <svg
                      fill="#000000"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20px"
                      height="20px"
                    >
                      <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 6.0683594 22 L 17.931641 22 L 19.634766 7 L 4.3652344 7 z" />
                    </svg>
                  </a> */}

                  <svg
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20px"
                    height="20px"
                  >
                    <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 6.0683594 22 L 17.931641 22 L 19.634766 7 L 4.3652344 7 z" />
                  </svg>
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
