const categoriesArr = document.querySelector("#categories")

console.log('Number of categories: ', categoriesArr.children.length);

const itemsArr = document.querySelectorAll('.item');
    
itemsArr.forEach(categories => {
    console.log('Category:', categories.firstElementChild.textContent);
    console.log('Elements:', categories.lastElementChild.children.length)
});