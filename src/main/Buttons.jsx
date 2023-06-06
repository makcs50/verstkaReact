import React from 'react'
import {container, number, buttons, blue, orange} from './Main.module.css';


const Buttons = () => {
  return (
<>
    <div className={number}>0</div>
    <div className={buttons}>
        <button className={blue}>Увеличить</button>
        <button className={orange}>Уменьшить</button>
        <button>Сбросить</button>
  </div>
</>


  )
}

export default Buttons;