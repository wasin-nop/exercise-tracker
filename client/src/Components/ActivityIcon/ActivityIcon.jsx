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
              src="./running.png"
              alt="running"
              onClick={() => onClick("running")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./swimming.png"
              alt="swimming"
              onClick={() => onClick("swimming")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./cycling.png"
              alt="cycling"
              onClick={() => onClick("cycling")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./workout.png"
              alt="workout"
              onClick={() => onClick("workout")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="./yoga.png" alt="yoga" onClick={() => onClick("yoga")} />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./football.png"
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
              src="./ping-pong.png"
              alt="ping-pong"
              onClick={() => onClick("ping-pong")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./tennis.png"
              alt="tennis"
              onClick={() => onClick("tennis")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./basketball.png"
              alt="basketball"
              onClick={() => onClick("basketball")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./boxing.png"
              alt="boxing"
              onClick={() => onClick("boxing")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="./golf.png" alt="golf" onClick={() => onClick("golf")} />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./other.png"
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
