import React, { useState, useEffect } from "react";
import "./ActivityForm.css";

const ActivityForm = (props) => {
  const [activityName, setActivityName] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [activityDuration, setActivityDuration] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isDurationValid, setIsDurationValid] = useState(false);
  const [isDescriptionValid, setIsDescriptionValid] = useState(false);

  const handleChangeActivityName = (e) => {
    const newValue = e.target.value;
    if (newValue.length > 64) {
      return;
    } else {
      setActivityName(e.target.value);
    }
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
    const newValue = e.target.value;
    if (newValue.length > 144) {
      return;
    } else {
      setActivityDescription(e.target.value);
    }
  };

  // ------------------------------------------------ Input Duration---------------------------------------------
  const onBlur = (event) => {
    const activityDuration = event.target.value;
    const seconds = Math.max(0, getSecondsFromHHMMSS(activityDuration));

    const time = toHHMMSS(seconds);
    setActivityDuration(time);
  };

  const getSecondsFromHHMMSS = (activityDuration) => {
    const [str1, str2, str3] = activityDuration.split(":");

    const val1 = Number(str1);
    const val2 = Number(str2);
    const val3 = Number(str3);

    if (!isNaN(val1) && isNaN(val2) && isNaN(val3)) {
      return val1;
    }

    if (!isNaN(val1) && !isNaN(val2) && isNaN(val3)) {
      return val1 * 60 + val2;
    }

    if (!isNaN(val1) && !isNaN(val2) && !isNaN(val3)) {
      return val1 * 60 * 60 + val2 * 60 + val3;
    }

    return 0;
  };

  const toHHMMSS = (secs) => {
    const secNum = parseInt(secs.toString(), 10);
    const hours = Math.floor(secNum / 3600);
    const minutes = Math.floor(secNum / 60) % 60;
    const seconds = secNum % 60;

    return [hours, minutes, seconds]
      .map((val) => (val < 10 ? `0${val}` : val))
      .filter((val, index) => val !== "00" || index > 0)
      .join(":")
      .replace(/^0/, "");
  };
  // ------------------------------------------------End of Input Duration---------------------------------------------

  useEffect(() => {
    if (activityName.length > 3) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }
  }, [activityName]);

  useEffect(() => {
    if (activityDuration.length > 0) {
      setIsDurationValid(true);
    } else {
      setIsDurationValid(false);
    }
  }, [activityDuration]);

  useEffect(() => {
    if (activityDescription.length > 9 && activityDescription.length < 72) {
      setIsDescriptionValid(true);
    } else {
      setIsDescriptionValid(false);
    }
  }, [activityDescription]);

  if (isNameValid && isDurationValid && isDescriptionValid) {
  }
  // ------------------------------------------On submit---------------------------------------

  return (
    <main className="container">
      <div className="form-container">
        <div className="form-width">
          <form>
            {/*-------------------------------------------------  Activity Name---------------------------------------------------- */}
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
                isNameValid={isNameValid}
                value={activityName}
                onChange={handleChangeActivityName}
              />
              {/* <div
                className="form-valid-check"
                style={{ display: isNameValid ? "none" : "block" }}
              >
                Activity Name must have more than 3 character
              </div> */}
              {/*------------------------------------------------- Activity Date---------------------------------------------------- */}
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

            {/*-------------------------------------------------  Activity type---------------------------------------------------- */}
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
                // 00ADB5
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

            {/*-------------------------------------------------  Activity Duration---------------------------------------------------- */}
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
                placeholder="hh:mm:ss"
                isDurationValid={isDurationValid}
                value={activityDuration}
                onChange={handleChangeActivityDuration}
                onBlur={onBlur}
              />
            </div>

            {/*------------------------------------------------- Activity Description---------------------------------------------------- */}
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
                isDescriptionValid={isDescriptionValid}
                value={activityDescription}
                onChange={handleChangeActivityDescription}
                // style={{
                //   color: isDescriptionValid ? "black" : "lightcoral",
                //   borderColor: isDescriptionValid ? "black" : "lightcoral",
                //   onFocus: isDescriptionValid ? "black" : "lightcoral",
                // }}
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
