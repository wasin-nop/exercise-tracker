import React, { useState, useEffect } from "react";
import "./ActivityForm.css";

const ActivityForm = (props) => {
  const [activityName, setActivityName] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [activityDuration, setActivityDuration] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isDurationInvalid, setIsDurationInvalid] = useState(false);
  const [isDescriptionInvalid, setIsDescriptionInvalid] = useState(false);

  // const [value, setValue] = useState({ value: "" });

  const handleChangeActivityName = (e) => {
    setActivityName(e.target.value);
  };

  const handleChangeActivityDate = (e) => {
    setActivityDate(e.target.value);
  };

  const handleChangeActivityType = (e) => {
    props.setActivityType(e.target.value);
  };

  const handleChangeActivityDuration = (e) => {
    setActivityDuration(e.target.value);
  };

  const handleChangeActivityDescription = (e) => {
    setActivityDescription(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   alert("A name was submitted: " + setValue());
  //   e.preventDefault();
  // };
  useEffect(() => {
    if (activityName.length > 3 && activityName !== "") {
      setIsNameInvalid(true);
    } else {
      setIsNameInvalid(false);
    }
  }, [activityName]);

  useEffect(() => {
    if (activityDuration > 0) {
      setIsDurationInvalid(true);
    } else {
      setIsDurationInvalid(false);
    }
  }, [activityDuration]);

  useEffect(() => {
    if (
      activityDescription.length > 9 &&
      activityDescription !== "" &&
      activityDescription.length < 139
    ) {
      setIsDescriptionInvalid(true);
    } else {
      setIsDescriptionInvalid(false);
    }
  }, [activityDescription]);

  return (
    <main className="container">
      <div className="form-container">
        <div className="form-width">
          <form>
            {/*Activity Name */}
            <div>
              <label for="activity-name" className="input-topic">
                Activity Name:
              </label>
              <br />
              <input
                type="text"
                className="form-control"
                id="activity-name"
                name="activity-name"
                placeholder="Keep running in Mt.Everest" // Not Empty and longer than 4 characters
                isNameInvalid={isNameInvalid}
                value={activityName}
                onChange={handleChangeActivityName}
              />
            </div>
            <div>
              <label for="date" className="input-topic">
                Date:
              </label>
              <br />
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                // value="2022-01-01"
                min="2022-01-01"
                // max="2022-12-31"
                value={activityDate}
                onChange={handleChangeActivityDate}
              />
            </div>
            {/*End Activity Name */}

            {/*Activity type */}
            <div>
              <label for="activity-type-choice" className="input-topic">
                Activity Type
              </label>
              <br />
              <select
                className="form-control"
                id="activity-type-choice"
                name="activity-type-choice"
                value={props.activityType}
                onChange={handleChangeActivityType}
              >
                <option value="running">Running</option>
                <option value="swimming">Swimming</option>
                <option value="cycling">Cycling</option>
                <option value="workout">Workout</option>
                <option value="yoga">Yoga</option>
                <option value="football">Football</option>
                <option value="ping-pong">Ping Pong</option>
                <option value="tennis">Tennis</option>
                <option value="basketball">Basketball</option>
                <option value="boxing">Boxing</option>
                <option value="golf">Golf</option>
                <option value="other">Other</option>
              </select>
            </div>
            {/* End Activity type */}

            {/* Activity Duration */}
            <div>
              <label for="activity-duration" className="input-topic">
                Activity Duration
              </label>
              <br />
              <input
                type="text"
                className="form-control"
                id="activity-duration"
                name="activity-duration"
                placeholder="hr:min:sec"
                isDurationInvalid={isDurationInvalid}
                value={activityDuration}
                onChange={handleChangeActivityDuration}
              />
            </div>
            {/* ENDActivity Duration */}

            {/* Activity Description */}
            <div>
              <label for="description" className="input-topic">
                Described this journal
              </label>
              <br />
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="3"
                placeholder="I'm so tired but my friend keep running ... so I have to catch up"
                // Not Empty and longer than 10 characters but less than 140 characters
                this
                monster
                isDescriptionInvalid={isDescriptionInvalid}
                value={activityDescription}
                onChange={handleChangeActivityDescription}
              ></textarea>
            </div>
            <a href="#">
              <input
                type="button"
                className="submit-button"
                id="submit"
                value="Submit"
              />
            </a>
            {/* End Activity Description */}
          </form>
        </div>
        <div>
          <img className="form-image" src="./running_at_sunset.jpg" alt="" />
        </div>
      </div>
    </main>
  );
};

export default ActivityForm;
