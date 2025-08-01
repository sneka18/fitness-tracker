// script.js
let totalWater = 0;
let totalCalories = 0;
let workouts = [];

function logWater() {
  const water = parseInt(document.getElementById('waterGlasses').value);
  if (!isNaN(water)) {
    totalWater += water;
    document.getElementById('totalWater').textContent = totalWater;
    document.getElementById('waterGlasses').value = '';
    updateChart();
  }
}

function addWorkout() {
  const type = document.getElementById('workoutType').value;
  const duration = parseInt(document.getElementById('duration').value);
  if (type && !isNaN(duration)) {
    workouts.push(duration);
    document.getElementById('workoutType').value = '';
    document.getElementById('duration').value = '';
    updateChart();
  }
}

function saveGoals() {
  const weight = document.getElementById('weightGoal').value;
  const steps = document.getElementById('stepsGoal').value;
  alert(`Goals Saved:\nWeight: ${weight}kg\nSteps: ${steps}`);
}

function addCalories() {
  const item = document.getElementById('foodItem').value;
  const cal = parseInt(document.getElementById('calories').value);
  if (item && !isNaN(cal)) {
    totalCalories += cal;
    document.getElementById('totalCalories').textContent = totalCalories;
    document.getElementById('foodItem').value = '';
    document.getElementById('calories').value = '';
    updateChart();
  }
}

let chart;
function updateChart() {
  const ctx = document.getElementById('progressChart').getContext('2d');
  const data = {
    labels: ['Workouts (mins)', 'Water (glasses)', 'Calories'],
    datasets: [{
      label: 'Progress Summary',
      data: [workouts.reduce((a, b) => a + b, 0), totalWater, totalCalories],
      backgroundColor: ['#ff6b6b', '#4ecdc4', '#ffa502'],
      borderWidth: 1
    }]
  };

  if (chart) {
    chart.data = data;
    chart.update();
  } else {
    chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
