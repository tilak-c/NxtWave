window.onload = function() {
    let recipeObj = {
        title: "Tomato Pasta",
        imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
        ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
    };
    document.querySelector(".recipe-title").textContent = recipeObj.title;
    document.querySelector('img').src = recipeObj.imgSrc;
    const ulElement = document.querySelector('.ingredients-list');

    for (let i = 0; i < recipeObj.ingredients.length; i++) {
        let a = document.createElement('li');
        a.textContent = recipeObj.ingredients[i];
        ulElement.appendChild(a);
    }
}
