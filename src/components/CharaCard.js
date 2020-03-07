import React from "react";
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  width: 30%;
  margin: 0 0 2% 35%;
  background: gray;
`;

const CharaCard = (props) => {
  return (
      <Card>
        <div>
          <p>{props.name}</p>
          <p>{props.birth_year}</p>
        </div>
      </Card>
  );
};

export default CharaCard;
