import React from "react";
import "./ActivityIcon.css";

const ActivityIcon = (props) => {
  const onClick = (type) => {
    props.setActivityType(type);
  };

  return (
    <section className="container">
      <div className="activity-text">Add Activity</div>
      <div className="activity-icon">
        <div>
          <a href="#">
            <img
              src="./running.svg"
              alt="running"
              onClick={() => onClick("running")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./swimming.svg"
              alt="swimming"
              onClick={() => onClick("swimming")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./cycling.svg"
              alt="cycling"
              onClick={() => onClick("cycling")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./workout.svg"
              alt="workout"
              onClick={() => onClick("workout")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="./yoga.svg" alt="yoga" onClick={() => onClick("yoga")} />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./football.svg"
              alt="football"
              onClick={() => onClick("football")}
            />
          </a>
        </div>
      </div>
      <div className="activity-icon">
        <div>
          <a href="#">
            <img
              src="./ping-pong.svg"
              alt="ping-pong"
              onClick={() => onClick("ping-pong")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./tennis.svg"
              alt="tennis"
              onClick={() => onClick("tennis")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./basketball.svg"
              alt="basketball"
              onClick={() => onClick("basketball")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./boxing.svg"
              alt="boxing"
              onClick={() => onClick("boxing")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="./golf.svg" alt="golf" onClick={() => onClick("golf")} />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./other.svg"
              alt="other"
              onClick={() => onClick("other")}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ActivityIcon;
