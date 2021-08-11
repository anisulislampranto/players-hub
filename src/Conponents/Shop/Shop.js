import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Shop.css'
import data from '../../data.json'
import Player from '../Player/Player';


const Shop = () => {

    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        setPlayers(data)
        console.log(players)
    },[])

    const buttonHandle = (player) => {
        console.log('added', player);
        const newCart = [...cart, player];
        setCart(newCart)
        
    }

    return (
        <div className='players-container' >
            <div className='players' >
                {
                    players.map(player =>  <Player player={player} buttonHandle={buttonHandle} ></Player> )
                }
            </div>
            <div>
                <Cart players={players} cart={cart} ></Cart>
            </div>

        </div>
    );
};

export default Shop;