import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharaCard from './CharaCard';

const CharaList = () => {
    const [chara, setChara] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
        .then(response => {
            setChara(response.data)
        })
    }, []);

    return (
        <div>
            <ul>
                {
                    chara.map(charas => {
                        return (
                            <CharaCard 
                                name = {charas.name}
                                birth_year = {charas.birth_year}
                            />
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default CharaList;