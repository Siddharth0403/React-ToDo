import React from "react";
import { CiStickyNote } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

function Note({ data }) {
  const count = data.star;
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<CiStar key={i} />);
  }

  return (
    <div className="mainNote">
      <div className="head">
        <h3 className="icon">{data.icon && <CiStickyNote />}</h3>
        <h3>{data.title}</h3>
      </div>
      <p className="para">{data.text}</p>
      {data.bottom && (
        <div className="footer" style={{ backgroundColor: data.noteColor }}>
          <h4>{data.day}</h4>
          <h4>{stars}</h4>
        </div>
      )}
    </div>
  );
}

export default Note;
