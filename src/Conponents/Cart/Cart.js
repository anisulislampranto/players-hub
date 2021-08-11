import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    const totalSalary = cart.reduce((total, player) => total + player.salary,0);
    const addedPlayers = cart.reduce((players, player) => players + player.name + '. ' ,[] );
    
    return (
        <div>
            <div className='club-header' >
                <h1>PSG football club</h1>
            </div>
            <div className='summery-section'>
                <h2>Players Summery{}</h2>
                <h3>Total Number of Player: {cart.length} </h3>
                <h3>Total Salary: ${totalSalary}</h3>
                <h3 className='added-player'>Added players: {addedPlayers}</h3>
            </div>
        </div>
    );
};

export default Cart;