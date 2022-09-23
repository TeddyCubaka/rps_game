import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RobotContext, RobotImageContext } from "./robotContext";
import "./robot-style.css";
import RobotCard from "./robot-card";

export default function RobotHome() {
  const robotImage = useContext(RobotImageContext);
  const robots = useContext(RobotContext);
  const robotDetails = { imageUrl: "", name: "", function: "" };

  return (
    <RobotContext.Provider value={{ robotImage, robots, robotDetails }}>
      <div className="robot-home">
        <h2>Did you want freind ?</h2>
        <p>Then, create any robot you want.</p>
        <table>
          <thead>
            <tr>
              <th>Robot you create</th>
              <th>Default robot</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td>
                <Link to="/robot">Create a robot</Link>
              </td>
              <td>Search a robot</td>
            </tr>
          </tfoot>
          <tbody>
            {robotImage.map((image, index) => (
              <tr key={index}>
                <td>
                  {index + 1}
                  {robots[index] ? (
                    <RobotCard
                      robot={robots[index]}
                      index={index}
                      key={index}
                    />
                  ) : (
                    <span> ... </span>
                  )}
                </td>
                <td>
                  <img src={image} alt="" className="img-test" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </RobotContext.Provider>
  );
}
