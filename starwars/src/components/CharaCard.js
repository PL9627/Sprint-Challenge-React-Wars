import React from 'react';

const CharaCard = (props) => {
    return (
        <div>
            <li className = "CharaCard">
                <p>{props.name}</p>
                <p>{props.birth_year}</p>
            </li>
        </div>
    );
}