import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <span className="cities float-right">
          Chicago Tokyo Madrid Istanbul London
        </span>

        <br />
        <div className="d-flex justify-content-center w-100">
          <form id="search-form" className="d-flex align-items-center">
            <input
              type="text"
              placeholder="City"
              className="cities"
              autoComplete="off"
              autofocus="on"
              id="city-input"
            />
            <input
              type="submit"
              value="Search"
              className="search btn btn-primary"
              id="search-button"
            />
            <button className="btn btn-success" id="current-button">
              Current
            </button>
          </form>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6">
          <p>
            <span id="city">Nashville, TN</span>
            <br />
            Last updated: <span id="currentTime"></span>
            <br />
            <span className="description" id="description">
              {" "}
            </span>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="sunny"
              id="icon"
              className="float-left"
            />
            <span id="current-temperature"> 79°F </span>
            <a href="#" className="active" id="celsius-link">
              °C
            </a>{" "}
            |
            <a href="#" className="" id="fahrenheit-link">
              °F
            </a>
          </p>
        </div>
        <div className="col-6">
          <p>
            Feels like: 80°F
            <br />
            Humidity:{" "}
            <span className="humidity" id="humidity">
              {" "}
            </span>
            %
            <br />
            Wind:{" "}
            <span className="wind" id="wind">
              {" "}
            </span>
            mph
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <p>
            Friday
            <br />
            85°F 🌥️
          </p>
        </div>
        <div className="col-2">
          <p>
            Saturday
            <br />
            88°F ☀️
          </p>
        </div>
        <div className="col-2">
          <p>
            Sunday
            <br />
            90°F ☀️
          </p>
        </div>
        <div className="col-2">
          <p>
            Monday
            <br />
            91°F 🌤️
          </p>
        </div>
        <div className="col-2">
          <p>
            Tuesday
            <br />
            91°F 🌥️
          </p>
        </div>
        <div className="col-2">
          <p>
            Wednesday
            <br />
            93°F 🌥️
          </p>
        </div>
      </div>
      <a
        href="https://github.com/aenia12/Plus.Amin.WeatherApp"
        target="_blank"
        rel="noreferrer"
      >
        Open-sourced on Github
      </a>
      by Aenia Amin
      <script src="app.js"></script>
    </div>
  );
}
