import React from 'react'
import '../../styles/workoutblock.css'

export default function workoutBlock({ onCreateWorkout }) {
    const onSubmitHadler = event => {
        event.preventDefault();
        const { name, reps, date } = event.target.elements;
        console.log(name.value, reps.value, date.value);
        if (name.value && reps.value && date.value) {
            onCreateWorkout(name.value, reps.value, date.value);
        }
        name.value = '';
        reps.value = '';
        date.value = '';


    }
    return (

        <form onSubmit={onSubmitHadler} className="workout-block">
            <input type="text" placeholder="Nome" name="name" className="form__field" />
            <input type="number" placeholder="Rip, time" name="reps" className="form__field" />
            <input type="date" name="date" className="form__field" />
            <button className="save-button">Save</button>
        </form>
    )
}