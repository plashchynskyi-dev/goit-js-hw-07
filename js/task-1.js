const categoriesElem = document.querySelector(`ul#categories`);
const categoriesItems = categoriesElem.querySelectorAll(`li.item`);
console.log(`Number of categories: ${categoriesItems.length}`);
categoriesItems.forEach(item => {
  const categoryTitle = `Category: ${item.querySelector(`h2`).textContent}`;
  const categoryElements = item.querySelectorAll(`li`);
  console.log(categoryTitle);
  console.log(`Elements: ${categoryElements.length}`);
});
