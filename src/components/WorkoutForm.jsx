import { useState, useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';

function WorkoutForm() {
  const { addWorkout } = useContext(WorkoutContext);
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Workout name is required';
    if (!duration || duration <= 0) newErrors.duration = 'Valid duration is required';
    if (!calories || calories <= 0) newErrors.calories = 'Valid calories are required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addWorkout({ name, duration, calories });
    setName('');
    setDuration('');
    setCalories('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" data-aos="zoom-in-up">
      <div>
        <input
          type="text"
          placeholder="Workout Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div>
        <input
          type="number"
          placeholder="Duration (mins)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full p-2 border rounded"
        />
        {errors.duration && <p className="text-red-500 text-sm">{errors.duration}</p>}
      </div>
      <div>
        <input
          type="number"
          placeholder="Calories Burned"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          className="w-full p-2 border rounded"
        />
        {errors.calories && <p className="text-red-500 text-sm">{errors.calories}</p>}
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Log Workout
      </button>
    </form>
  );
}

export default WorkoutForm;