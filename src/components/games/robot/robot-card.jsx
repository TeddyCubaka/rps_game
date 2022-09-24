import React from "react";

export default function RobotCard({ robot, index }) {
  return (
    <div className="robot-card">
      {index ? <span> {index} </span> : false}
      <div>
        {
          robot.imageUrl ?
        <img src={robot.imageUrl} alt={robot.alt ? robot.alt : false} className="img-test" />
        : false
        }
        {
          robot.image ?
        <img src={robot.image.imageUrl} alt={robot.image.alt ? robot.image.alt : false} className="img-test" />
          : false
        }
      </div>
      <div>
        <div>{robot.name} </div>
        {robot.function ?
          <div>{robot.function} </div>
        : false}
      </div>
    </div>
  );
}
