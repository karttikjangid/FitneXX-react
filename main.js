// const apikey = "256324b7c3e2571849f5d04307ab7d5f"
// const applicationid = "cdcc438c"
// const endpoint = 'https://trackapi.nutritionix.com/v2/natural/nutrients';

// fetch(endpoint,{
//     method:'POST',
//     headers:{
//     'Content-Type':'application/json',
//     'x-app-id':'applicationid',
//     'x-app-key':'apikey'
//     },
// })
// .then(response=>response.json()

// )
// .then(data=>{
//     console.log('Nutritional Information:',data);
// })
// .catch(error=>{
//     console.error(error);
// });

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  menu.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  menu.classList.remove("active");
};

const typed = new Typed(".multiple-text", {
  strings: [
    "FitneXX",
    "Weight Gain",
    "Strength Training",
    "fat loss",
    "Weight Lifting",
    "Running",
  ],
  typeSpeed: 50,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});

// DOM Elements
const workoutList = document.getElementById("workout-list");
const mealList = document.getElementById("meal-list");
const logWorkoutBtn = document.getElementById("log-workout");
const searchMealBtn = document.getElementById("search-meal");

// Nutritionix API Configuration
const apiKey = "256324b7c3e2571849f5d04307ab7d5f";
const appId = "cdcc438c";
const nutritionixEndpoint =
  "https://trackapi.nutritionix.com/v2/natural/nutrients";

// Chart.js Configuration
const progressChart = new Chart(document.getElementById("progressChart"), {
  type: "line",
  data: {
    labels: [], // Dates or workout sessions
    datasets: [
      {
        label: "Calories Burned",
        data: [], // Calories burned data
        borderColor: "#45ffca",
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Log Workout
logWorkoutBtn.addEventListener("click", () => {
  const workoutName = document.getElementById("workout-name").value;
  const duration = document.getElementById("workout-duration").value;
  const calories = document.getElementById("calories-burned").value;

  if (workoutName && duration && calories) {
    const workoutItem = document.createElement("li");
    workoutItem.textContent = `${workoutName} - ${duration} mins, ${calories} kcal`;
    workoutList.appendChild(workoutItem);

    // Update Chart
    progressChart.data.labels.push(workoutName);
    progressChart.data.datasets[0].data.push(calories);
    progressChart.update();
  }
});

// Search Meal
searchMealBtn.addEventListener("click", async () => {
  const query = document.getElementById("meal-query").value;
  if (query) {
    const response = await fetch(nutritionixEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": appId,
        "x-app-key": apiKey,
      },
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    displayMeals(data.foods);
  }
});

// Display Meals
function displayMeals(foods) {
  mealList.innerHTML = "";
  foods.forEach((food) => {
    const mealItem = document.createElement("li");
    mealItem.textContent = `${food.food_name} - ${food.nf_calories} kcal`;
    mealList.appendChild(mealItem);
  });
}

// Typed.js Initialization
const typed2 = new Typed(".multiple-text", {
  strings: [
    "FitneXX",
    "Weight Gain",
    "Strength Training",
    "Fat Loss",
    "Weight Lifting",
    "Running",
  ],
  typeSpeed: 50,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});
