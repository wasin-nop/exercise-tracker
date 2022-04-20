import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ActivityForm.css";
import { useNavigate } from "react-router-dom";

const ActivityForm = (props) => {
  // const [focused, setFocused] = useState(false);
  const [activityName, setActivityName] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [activityDuration, setActivityDuration] = useState(0);
  const [activityDescription, setActivityDescription] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isDateValid, setIsDateValid] = useState(false);
  const [isTypeValid, setIsTypeValid] = useState(false);
  const [isDurationValid, setIsDurationValid] = useState(false);
  const [isDescriptionValid, setIsDescriptionValid] = useState(false);

  // const [isSubmitValid, setIsSubmitValid] = useState(false);
  // const [posts, setPost] = useState(null);
  // const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChangeActivityName = (e) => {
    const newValue = e.target.value;
    if (newValue.length > 28) {
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
  // const onBlur = (event) => {
  //   const activityDuration = event.target.value;
  //   const seconds = Math.max(0, getSecondsFromHHMMSS(activityDuration));

  //   const time = toHHMMSS(seconds);
  //   setActivityDuration(time);
  // };

  // const getSecondsFromHHMMSS = (activityDuration) => {
  //   const [str1, str2, str3] = activityDuration.split(":");

  //   const val1 = Number(str1);
  //   const val2 = Number(str2);
  //   const val3 = Number(str3);

  //   if (!isNaN(val1) && isNaN(val2) && isNaN(val3)) {
  //     return val1;
  //   }

  //   if (!isNaN(val1) && !isNaN(val2) && isNaN(val3)) {
  //     return val1 * 60 + val2;
  //   }

  //   if (!isNaN(val1) && !isNaN(val2) && !isNaN(val3)) {
  //     return val1 * 60 * 60 + val2 * 60 + val3;
  //   }

  //   return 0;
  // };

  // const toHHMMSS = (secs) => {
  //   const secNum = parseInt(secs.toString(), 10);
  //   const hours = Math.floor(secNum / 3600);
  //   const minutes = Math.floor(secNum / 60) % 60;
  //   const seconds = secNum % 60;

  //   return [hours, minutes, seconds]
  //     .map((val) => (val < 10 ? `0${val}` : val))
  //     .filter((val, index) => val !== "00" || index > 0)
  //     .join(":")
  //     .replace(/^0/, "");
  // };
  // ------------------------------------------------Use Effect validate---------------------------------------------

  useEffect(() => {
    if (activityName.length > 2) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }
  }, [activityName]);

  useEffect(() => {
    if (activityDate !== "") {
      setIsDateValid(true);
    } else {
      setIsDateValid(false);
    }
  }, [activityDate]);

  useEffect(() => {
    if (activityDuration.length > 0 && activityDuration.length > 0) {
      setIsDurationValid(true);
    } else {
      setIsDurationValid(false);
    }
  }, [activityDuration]);

  useEffect(() => {
    const validTypes = [
      "running",
      "ping-pong",
      "swimming",
      "basketball",
      "cycling",
      "workout",
      "boxing",
      "yoga",
      "tennis",
      "golf",
      "other",
      "football",
    ];
    const isTypeValid = validTypes.includes(props.activityType);
    setIsTypeValid(isTypeValid);
  }, [props.activityType]);

  useEffect(() => {
    if (activityDescription.length < 144) {
      setIsDescriptionValid(true);
    } else {
      setIsDescriptionValid(false);
    }
  }, [activityDescription]);

  // useEffect(() => {
  //   if (
  //     isDateValid &&
  //     isNameValid &&
  //     isTypeValid &&
  //     isDurationValid &&
  //     isDescriptionValid
  //   ) {
  //     setIsSubmitValid(true);
  //   } else {
  //     setIsSubmitValid(false);
  //   }
  // }, [
  //   isDateValid,
  //   isNameValid,
  //   isTypeValid,
  //   isDurationValid,
  //   isDescriptionValid,
  // ]);

  // ------------------------------------------On submit---------------------------------------
  // const submitValid =
  //   isDateValid &&
  //   isNameValid &&
  //   isTypeValid &&
  //   isDurationValid &&
  //   isDescriptionValid;

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(submitValid);

    if (!isNameValid) {
      alert(`Name must at least 3 character`);
      return;
    }
    if (!isDateValid) {
      alert(`You must choose you activity date`);
      return;
    }
    if (!isTypeValid) {
      alert(`You must choose you activity type`);
      return;
    }
    if (!isDurationValid) {
      alert(`Duration must be a positive number`);
      return;
    }
    if (!isDescriptionValid) {
      alert(`Description must not longer than 144 character`);
      return;
    }

    // fetch req body
    let activity = {
      date: activityDate,
      name: activityName,
      duration: activityDuration,
      type: props.activityType,
      description: activityDescription,
      timeStamp: new Date(),
    };
    // console.log(activity);

    const client = axios.create({
      baseURL: "http://localhost:4000",
    });
    client
      .post("/records", activity)
      .then((response) => {
        console.log(response);
        alert("activity create");
        navigate({
          pathname: "/records",
        });
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert(error.response.data.message);
        } else {
          alert(`Please try again later`);
        }
      });
  };
  // const handleFocus = (e) => {
  //   setFocused(true);
  // };

  return (
    <main className="container">
      <div className="form-container">
        <div className="form-width">
          <form>
            {/*-------------------------------------------------  Activity Name---------------------------------------------------- */}
            <div>
              <label htmlFor="activity-name" className="input-topic">
                Activity Name:
              </label>
              <br />
              <input
                type="text"
                className="form-control"
                id="activity-name"
                name="activity-name"
                placeholder="Keep running in Mt.Everest" // Not Empty and longer than 4 characters
                value={activityName}
                onChange={handleChangeActivityName}
                required
                // pattern="^[A-Za-z0-9]{3,16}$"
                // onBlur={handleFocus}
                // focused={"false"}
              />
              <span className="error-message">
                Activity name at least 3 characters
              </span>
              {/* <div
                className="form-valid-check"
                style={{ display: isNameValid ? "none" : "block" }}
              >
                Activity Name must have more than 3 character
              </div> */}
              {/*------------------------------------------------- Activity Date---------------------------------------------------- */}
            </div>
            <div>
              <label htmlFor="date" className="input-topic">
                Date:
              </label>
              <br />
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                min="2022-01-01"
                value={activityDate}
                onChange={handleChangeActivityDate}
                required
              />
            </div>

            {/*-------------------------------------------------  Activity type---------------------------------------------------- */}
            <div>
              <label htmlFor="activity-type-choice" className="input-topic">
                Activity Type
              </label>
              <br />
              <select
                className="form-control form-select"
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
              <label htmlFor="activity-duration" className="input-topic">
                Activity Duration
              </label>
              <br />
              <input
                type="number"
                className="form-control"
                id="activity-duration"
                name="activity-duration"
                placeholder="hh:mm:ss"
                value={activityDuration}
                onChange={handleChangeActivityDuration}
                pattern="[0-9]+"
                // onBlur={onBlur}
                required
              />
            </div>

            {/*------------------------------------------------- Activity Description---------------------------------------------------- */}
            <div>
              <label htmlFor="description" className="input-topic">
                Described this journal
              </label>
              <br />
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="3"
                placeholder="I'm so tired but my friend keep running ... so I have to catch up  this
                monster"
                // Not Empty and longer than 10 characters but less than 140 characters

                value={activityDescription}
                onChange={handleChangeActivityDescription}
                // style={{
                //   color: isDescriptionValid ? "black" : "lightcoral",
                //   borderColor: isDescriptionValid ? "black" : "lightcoral",
                //   onFocus: isDescriptionValid ? "black" : "lightcoral",
                // }}
              ></textarea>
            </div>

            <button
              className="submit-button"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="form-image-container">
          <img className="form-image" src="./running_at_sunset.jpg" alt="" />
        </div>
      </div>
    </main>
  );
};

export default ActivityForm;
