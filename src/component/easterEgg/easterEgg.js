import React from 'react';

const EasterEgg = ({ name }) => {

    let icon = null;

    switch (name) {
        case "Mos":
            icon = 'fas fa-broadcast-tower';
            break;
        case "Hayk":
            icon = 'fas fa-futbol';
            break;
        case "Grish":
            icon = 'fas fa-dumbbell';
            break;
        case "Rub":
            icon = 'fas fa-cubes';
            break;
        case "Kris":
            icon = 'fab fa-jedi-order';
            break;
        case "Yur":
            icon = ' fas fa-bolt';
            break;
    }

    return (
        <div className="easter-egg">
            <h1>This isn't a city but I know you,</h1>
            <h2><i className="fas fa-smile-wink"></i>{'\u00A0'}
                {name} <i className={icon}></i>
            </h2>
        </div>
    );
};

export default EasterEgg;