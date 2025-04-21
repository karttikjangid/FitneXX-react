import MealForm from '../components/MealForm';

function MealPlanner() {
  return (
    <section className="py-16 bg-gray-100" id="meal-planner">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="zoom-in-down">
          Plan Your <span className="text-blue-600">Meals</span>
        </h2>
        <div className="max-w-md mx-auto">
          <MealForm />
        </div>
      </div>
    </section>
  );
}

export default MealPlanner;