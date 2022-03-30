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
              src="./running(1).png"
              alt="running"
              onClick={() => onClick("running")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./swimming(1).png"
              alt="swimming"
              onClick={() => onClick("swimming")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./bike(1).png"
              alt="cycling"
              onClick={() => onClick("cycling")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./dumbbell(1).png"
              alt="workout"
              onClick={() => onClick("workout")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./yoga(1).png"
              alt="yoga"
              onClick={() => onClick("yoga")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./soccer-ball(1).png"
              alt="soccer-ball"
              onClick={() => onClick("soccer-ball")}
            />
          </a>
        </div>
      </div>
      <div className="activity-icon">
        <div>
          <a href="#">
            <img
              src="./ping-pong(1).png"
              alt="ping-pong"
              onClick={() => onClick("ping-pong")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./tennis(1).png"
              alt="tennis"
              onClick={() => onClick("tennis")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./basketball(1).png"
              alt="basketball"
              onClick={() => onClick("basketball")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./boxing-gloves.png"
              alt="boxing-gloves"
              onClick={() => onClick("boxing-gloves")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./golf(1).png"
              alt="golf"
              onClick={() => onClick("golf")}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./ellipsis.png"
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
