const foodData = require('./food.json');

function listFoodByCategory(category) {
  return foodData.filter((food) => food.category.toLowerCase() === category.toLowerCase())
                 .map((food) => food.foodname);
}

function listFoodByCalorie(condition, threshold) {
  if (condition === 'above') {
    return foodData.filter((food) => food.calorie > threshold)
                   .map((food) => food.foodname);
  } else if (condition === 'below') {
    return foodData.filter((food) => food.calorie < threshold)
                   .map((food) => food.foodname);
  }
}

function sortFoodByContent(type, order) {
  if (type === 'protein') {
    return order === 'highestToLowest' ?
      foodData.slice().sort((a, b) => b.protiens - a.protiens).map((food) => food.foodname) :
      foodData.slice().sort((a, b) => a.protiens - b.protiens).map((food) => food.foodname);
  } else if (type === 'carb') {
    return order === 'lowestToHighest' ?
      foodData.slice().sort((a, b) => a.cab - b.cab).map((food) => food.foodname) :
      foodData.slice().sort((a, b) => b.cab - a.cab).map((food) => food.foodname);
  }
}

console.log("List of all food items:", foodData.map((food) => food.foodname));
console.log("List of vegetables:", listFoodByCategory('Vegetable'));
console.log("List of fruits:", listFoodByCategory('Fruit'));
console.log("List of proteins:", listFoodByCategory('Protein'));
console.log("List of nuts:", listFoodByCategory('Nuts'));
console.log("List of grains:", listFoodByCategory('Grain'));
console.log("List of dairy:", listFoodByCategory('Dairy'));
console.log("Food items with calories above 100:", listFoodByCalorie('above', 100));
console.log("Food items with calories below 100:", listFoodByCalorie('below', 100));
console.log("Food items sorted by protein content - highest to lowest:", sortFoodByContent('protein', 'highestToLowest'));
console.log("Food items sorted by carb content - lowest to highest:", sortFoodByContent('carb', 'lowestToHighest'));
