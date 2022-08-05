import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    console.log(props.phonetic.audio),
    (
      <div className="Phonetics">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>

        <span className="Phonetics-text">{props.phonetic.text}</span>
      </div>
    )
  );
}
