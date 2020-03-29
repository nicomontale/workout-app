import React, { useState } from 'react';


import Header from './header/Header';
import WorkoutList from './WorkoutList/WorkoutList';
import WorkoutItem from './WorkoutList/WorkoutItem';
import WorkoutBlock from './input/workoutBlock';
import { ID } from '../helpers/id';

function App() {
  const [exercises, setExercises] = useState([]);
  const createWorkoutSession = (name, reps, date) => {
    const newWorkoutSession = { id: ID(), name, reps, date };
    const newState = [...exercises];

    newState.push(newWorkoutSession);
    setExercises(newState);
  }

  const onDeleteItem = id => {
    const newExercise = exercises.filter(ex => ex.id !== id)
    setExercises(newExercise);

  }
  const calculateProgress = (name, id) => {
    const currentExercises = exercises.filter(
      exercise => exercise.name === name
    );

    const index = currentExercises.findIndex(e => e.id === id);

    if (index) {
      const previousExercise = currentExercises[index - 1];
      const currentExercise = currentExercises[index];
      const repsImprovements = currentExercise.reps - previousExercise.reps;

      return Math.round((+repsImprovements / +previousExercise.reps) * 100);
    }
  };
  return (
    <div className="container">
      <Header />
      <WorkoutBlock onCreateWorkout={createWorkoutSession} />
      <WorkoutList>

        {
          exercises.map(({ id, name, reps, date }) => (
            <WorkoutItem
              key={id}
              id={id}
              name={name}
              progress={
                calculateProgress(name, id)
              }
              reps={reps}

              date={date}
              onDelete={onDeleteItem}
            />
          ))
        }


      </WorkoutList>
    </div>
  );
};

export default App;