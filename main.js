const workoutName = document.getElementById("workout-name");
const workoutDuration = document.getElementById("workout-duration");
const caloriesBurned = document.getElementById("calories-burned");
const workoutList = document.getElementById("workout-list");
const logWorkoutBtn = document.getElementById("log-workout");
const mealcontainer = document.getElementById("meal-list");

document.addEventListener("DOMContentLoaded", () => {
  const savedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
  renderWorkouts(savedWorkouts);
});

function renderWorkouts(workouts) {
  workoutList.innerHTML = "";
  workouts.forEach((workout) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <h4>${workout.name}</h4>
            <p>Duration: ${workout.duration} mins</p>
            <p>Calories: ${workout.calories}</p>     `;
    workoutList.appendChild(li);
  });
}
logWorkoutBtn.addEventListener("click", () => {
  let name = workoutName.value.trim();
  let calories = caloriesBurned.value.trim();
  let duration = workoutDuration.value.trim();
  if (name && calories && duration) {
    const workouts = JSON.parse(localStorage.getItem("Workouts")) || [];
    const newWorkout = {
      name,
      duration,
      calories,
    };
    workouts.push(newWorkout);
    localStorage.setItem("workouts", JSON.stringify("workouts"));

    renderWorkouts(workouts);

    workoutName.value = "";
    workoutDuration.value = "";
    caloriesBurned.value = "";
  } else {
    alert("Please fill in all fields!");
  }
});

const API_KEY = "AIzaSyAdatd1AFZXSJZy45UgeAI3HxRDRYsvDHY";

async function generateResponse() {
  mealcontainer.textContent = "";

  const queryInput = document.getElementById("meal-query").value.trim();
  if (!queryInput) {
    alert("Please enter a meal name.");
    return;
  }
  const query = `Provide only the nutritional information for ${queryInput} in the following format: protein: X gm, carbs: Y gm, fats: Z gm, calories: A kcal.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: query }] }] }),
      }
    );

    const data = await response.json();
    if (data?.candidates?.length > 0) {
      const text = data.candidates[0].content.parts[0].text;
      displayResponse(text);
    } else {
      displayResponse("No nutritional data found.");
    }
  } catch (error) {
    console.error("Error:", error);
    displayResponse("Error fetching data.");
  }
}

function displayResponse(text) {
  mealcontainer.textContent = text;
}

document
  .getElementById("search-meal")
  .addEventListener("click", generateResponse);


  