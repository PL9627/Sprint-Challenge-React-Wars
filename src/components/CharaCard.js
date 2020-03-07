import React from "react";

const CharaCard = (props) => {
  return (
      <div>
        <p>{props.name}</p>
        <p>{props.birth_year}</p>
      </div>
  );
};

export default CharaCard;
