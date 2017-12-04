var app = function() {

  var createCatClass = function() {
    var element = document.createElement("ul");
    element.classList.add("cat");
    return element;
  };

  var createCatName = function(name) {
    var element = document.createElement("li");
    element.append(name);
    return element;
  };

  var createCatFaveFood = function(faveFood) {
    var element = document.createElement("li");
    element.append(faveFood);
    return element;
  };

  var createCatImage = function(image) {
    var element = document.createElement("li");
    var pic = document.createElement("img");
    element.appendChild(pic);
    pic.src = image;
    pic.width = 500;
    return element;
  };

  var appendElements = function(catClass, catName, catFaveFood, catImage) {

    catClass.appendChild(catName);
    catName.appendChild(catFaveFood);
    catFaveFood.appendChild(catImage);

    // add everything to the cats section
    var cats = document.querySelector("#cats");
    cats.appendChild(catClass);
  };

  var addCat = function(name, faveFood, image) {
    var catClass = createCatClass();
    var catName = createCatName(name);
    var catFaveFood = createCatFaveFood(faveFood);
    var catImage = createCatImage(image);

    appendElements(catClass, catName, catFaveFood, catImage);
  };

  var newName = "Charlie ";
  var newFaveFood = "people's limbs";
  var name = "Name: " + newName;
  var faveFood = "Favourite food: " + newFaveFood;
  var image = "./images/charlie.jpg"

  addCat(name, faveFood, image);






};

window.onload = app;
