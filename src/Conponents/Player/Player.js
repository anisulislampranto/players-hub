import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

const Player = (props) => {
    const {id, name, salary, image, country } = props.player;
    const buttonHandle= props.buttonHandle;
    
    return (
        <div className='player-container' >
            <img src={image} alt="" />
            <h1> Name: {name}</h1>
            <p>Salary Per Annum: ${salary}</p>
            <p>Country: {country}</p>
            <button className='addPlayerBtn' onClick={()=>buttonHandle(props.player)}> <FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
        </div>
    );
};

export default Player;