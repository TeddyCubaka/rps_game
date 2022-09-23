import React from "react";

export default function RobotCard({ robot, index }) {
  return (
    <div className="robot-card">
      <div className="robot-card">
        {index ? <span> {index} </span> : flase}
        <div>
          <img src={robot.imageUrl} alt="" className="img-test" />
        </div>
        <div>
          <div>{robot.name} </div>
          <div>{robot.function} </div>
        </div>
      </div>
    </div>
  );
}
