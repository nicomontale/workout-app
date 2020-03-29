import React from 'react'
import '../../styles/workoutitem.css';

export default function WorkoutItem({
    name, reps, id, date, onDelete, progress
}

) {
    return (
        <li onClick=
            {
                () => onDelete(id)
            }>
            <div className="workout-item">
                <span className="workout_item_name">
                    {name}
                </span>
                <span
                    className={`workout_item_count ${
                        progress ? (progress > 0 && "up") || "down" : ""
                        }`}
                >
                    {reps} reps
        {progress ? (progress > 0 && ` ${progress}%↑`) || ` ${progress}%↓` : ""}
                </span>
                <span className="workout_item_date"> {
                    date
                }

                </span> <span className="cross">X</span> </div> </li>)
}