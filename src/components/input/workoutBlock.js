import React from 'react'
import '../../styles/workoutblock.css'

export default function workoutBlock() {
    return (<div className="workout-block"> <input type="text"placeholder="Nome"/> <input type="text"/> <input type="number"placeholder="Rip, time"/> <input type="date"/> <button className="save-button">Save</button> </div>)
}