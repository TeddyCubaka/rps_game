import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RobotContext, RobotImageContext } from "./robotContext";

export default function CreateRobot() {
  const robots = useContext(RobotContext);
  const robotImage = useContext(RobotImageContext);
  const robotDetails = { image: {}, name: "", function: "" };
  const [error, setError] = useState("");
  return (
    <div className="create-div robot-home">
      <label forhtml="name">Name your robot</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        onChange={(e) => {
          robotDetails.name = e.target.value;
        }}
      />
      <ul>
        <details>
          <summary>Choose a profil for your robot</summary>
          {robotImage.map((image, index) => (
            <img
              src={image.imageUrl}
              alt={image.alt}
              key={index}
              className="img-test"
              onClick={() => {
                robotDetails.image = image;
                console.log(image)
              }}
            />
          ))}
        </details>
      </ul>
      <label forhtml="name">Give a funcion to your robot</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        onChange={(e) => {
          robotDetails.function = e.target.value;
        }}
      />
      <button
        onClick={() => {
          if(robotDetails.imageUrl == "")robotDetails.imageUrl = robotImage[0];
          if (
            robotDetails.name !== "" &&
            robotDetails.function !== ""
          ) {
            robots.push(robotDetails);
            setError("");
          } else {
            setError("Remplissez tout les champs");
          }
        }}
      >
        Create a new robot
      </button>
      <Link to="/robot">Back to home</Link>
      <span> {error} </span>
    </div>
  );
}
