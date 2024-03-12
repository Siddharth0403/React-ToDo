import React from "react";
import Note from "./Note";

function Background() {
  const data = [
    {
      icon: true,
      title: "Note 1",
      text: "Hello World we are coding React Js right NOW...!",
      bottom: true,
      noteColor: "black",
      day: "Monday",
      star: 6,
    },
    {
      icon: true,
      title: "Note 2",
      text: "Aloo, Bhindi, Milk, Dhaniya",
      bottom: false,
      noteColor: "black",
      day: "Tuesday",
      star: 3,
    },
    {
      icon: true,
      title: "Note 3",
      text: "Testing Shastra",
      bottom: true,
      noteColor: "pink",
      day: "Friday",
      star: 5,
    },
  ];
  return (
    <>
      <div className="bg">
        <h1
          className="
      bgText"
        >
          Docs
        </h1>
        <div className="alignNotes">
          {data.map((item, index) => (
            <Note data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Background;
