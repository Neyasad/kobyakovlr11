import React from 'react'
import { useState } from 'react';
import {ReactComponent as Cart} from "../../pic/cart.svg"
import styles from "./Pizzacard.module.css"

function Pizzacard(props) {

    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(prev => prev + 1);
    }

    function decrement() {
        setCounter(prev => prev - 1);
    }

    var off = document.querySelector("#minus");
    function butOff(){
        if (counter === 0)
            off.disabled = true;
        else
            off.disabled = false;
    }

  return (
    <div className={styles.pizBlocks}>
        <img className={styles.img} src={props.image} alt="pizzaImage"/>
        <div>
            <h1 className={styles.name}>{props.title}</h1>
            <h2 className={styles.description}>{props.description}</h2>
        </div>
        <select class="form-control" name="Diam" id="Diam" placeholder="Диаметр">                        
            <option>22 см</option>
            <option>30 см</option>
            <option>35 см</option>
        </select>
        <h1>От {props.price} ₽</h1>
        <div className={styles.count}>
            <button onClick={increment} className='btn btn-light'>
                +
            </button>
            <h2 className={styles.quantity}>{counter}</h2>
            <button onClick={decrement} id="minus" onChange={butOff} className='btn btn-light'>
                -
            </button>
            <button className='btn btn-success'>
                <Cart />
            </button>
        </div>
        
    </div>
  )
}

export default Pizzacard