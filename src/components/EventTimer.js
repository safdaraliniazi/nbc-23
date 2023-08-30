import React from 'react'
import { useRef, useState } from "react";
const EventTimer = () => {

var target_date = new Date("Nov 9, 2023").getTime();
  var days, hours, minutes, seconds;
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;

  let [time, changeTime] = useState(seconds_left);

  function checkTime() {
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
    // find the amount of "seconds" between now and target
    changeTime(seconds_left);
  }
  setInterval(checkTime, 1000);

  days = parseInt(seconds_left / 86400);
  seconds_left = seconds_left % 86400;

  hours = parseInt(seconds_left / 3600);
  seconds_left = seconds_left % 3600;

  minutes = parseInt(seconds_left / 60);
  seconds = parseInt(seconds_left % 60);

  return (
    <>
        <div className="event-countdown text-center mb-3">
            <h4 className="countdown-intro mb-2 text-center mb-3">
              Event Starts In:
            </h4>
            <div id="countdown-box" className="countdown-box">
              <span className="days">
                <span className="number">{days}</span>
                <span className="unit">Days</span>
              </span>
              <span className="hours">
                <span className="number">{hours}</span>
                <span className="unit">Hrs</span>
              </span>
              <span className="minutes">
                <span className="number">{minutes}</span>
                <span className="unit">Mins</span>
              </span>
              <span className="secs">
                <span className="number">{seconds}</span>
                <span className="unit">Secs</span>
              </span>
            </div>
          </div>
    </>
  )
}

export default EventTimer