import { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import WorkoutForm from '../components/WorkoutForm';

function Workout() {
  const { workouts } = useContext(WorkoutContext);

  return (
    <section className="py-16 bg-gray-100" id="workout">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="zoom-in-down">
          Log Your <span className="text-blue-600">Workout</span>
        </h2>
        <div className="max-w-md mx-auto">
          <WorkoutForm />
        </div>
        {workouts.length > 0 && (
          <div className="mt-8" data-aos="zoom-in-up">
            <h3 className="text-2xl mb-4">Workout History</h3>
            <ul className="space-y-4">
              {workouts.map((workout, index) => (
                <li key={index} className="p-4 bg-white rounded shadow">
                  <h4 className="font-semibold">{workout.name}</h4>
                  <p>Duration: {workout.duration} mins</p>
                  <p>Calories: {workout.calories}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default Workout;