import { createContext, useState, useEffect } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState(() => {
    const savedWorkouts = localStorage.getItem('workouts');
    return savedWorkouts ? JSON.parse(savedWorkouts) : [];
  });

  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};