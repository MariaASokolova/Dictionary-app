import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              {definition.example}
            </p>
          </div>
        );
      })}
      <h3>{props.meaning.definitions[0].definition}</h3>
      <h3>{props.meaning.definitions[0].example}</h3>
    </div>
  );
}
