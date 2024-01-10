const today = {
    breakfast: "Oatmeal",
    lunch: "Chicken Salad",
    dinner: "Grilled Salmon"
  };
  
  const tomorrow = {
    breakfast: "Avocado Toast",
    lunch: "Vegetarian Wrap",
    dinner: "Pasta Primavera"
  };
  
  document.getElementById('todayBreakfast').textContent = today.breakfast;
  document.getElementById('todayLunch').textContent = today.lunch;
  document.getElementById('todayDinner').textContent = today.dinner;
  
  document.getElementById('tomorrowBreakfast').textContent = tomorrow.breakfast;
  document.getElementById('tomorrowLunch').textContent = tomorrow.lunch;
  document.getElementById('tomorrowDinner').textContent = tomorrow.dinner;
  
  function addMeal() {
    const mealType = document.getElementById('mealType').value;
    const mealName = document.getElementById('mealName').value.trim();
  
    if (mealName !== '') {
      if (mealType === 'breakfast') {
        today.breakfast = mealName;
      } else if (mealType === 'lunch') {
        today.lunch = mealName;
      } else if (mealType === 'dinner') {
        today.dinner = mealName;
      }
  
      document.getElementById('todayBreakfast').textContent = today.breakfast;
      document.getElementById('todayLunch').textContent = today.lunch;
      document.getElementById('todayDinner').textContent = today.dinner;
  
      document.getElementById('mealType').selectedIndex = 0;
      document.getElementById('mealName').value = '';
    }
  }
  
  function createCalendar(year, month) {
    const calendar = document.getElementById('calendar');
  
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
  
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
  
    const monthName = months[month];
createCalendar(2024, 1);
}