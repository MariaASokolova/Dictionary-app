import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <strong>Example: </strong>
              {definition.example}
              <br />

              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
      <h3>{props.meaning.definitions[0].definition}</h3>
      <h3>{props.meaning.definitions[0].example}</h3>
    </div>
  );
}
