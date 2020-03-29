import React from 'react'
import '../../styles/workoutlist.css';
export default function WorkoutList({ children }) {
    return (
        <div className="workout-list">
            {children}
        </div>
    )
}
