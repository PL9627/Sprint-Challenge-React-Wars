import React, { useState, useEffect } from "react";
import axios from "axios";
import CharaCard from "./CharaCard";

const CharaList = () => {
  const [chara, setChara] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
    .then((response) => {
      console.log(response)
      setChara(response.data.results);
    });
  }, []);

  return (
    <div>
        {
          chara.map((item) => {
            return (
              <CharaCard name={item.name} birth_year={item.birth_year} />
            )
          })
        }
    </div>
  );
};

export default CharaList;
