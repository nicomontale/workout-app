import React from 'react';


import Header from './header/Header';
import WorkoutList from './WorkoutList/WorkoutList';
import WorkoutItem from './WorkoutList/WorkoutItem';
import WorkoutBlock from './input/workoutBlock';

function App() {
  return (<div className="container"> <Header /> <WorkoutBlock /> <WorkoutList>
    <WorkoutItem name="Push-ups 5 sets" reps={50} date={new Date().toLocaleDateString()} />


  </WorkoutList> </div>);
}

export default App;