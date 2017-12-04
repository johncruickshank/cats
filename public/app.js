var addCats = function() {

  var catArray = [
    {name: "Charlie", faveFood: "people's limbs", image: "./images/charlie.jpg"},
    {name: "Boba", faveFood: "sock fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
    {name: "Barnaby", faveFood: "tuna", image: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
    {name: "Max", faveFood: "Whiskas Temptations", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}
  ];

  for (var i = 0; i < catArray.length; i++) {
    addCat(catArray[i].name, catArray[i].faveFood, catArray[i].image);
  };

};

var createCatClass = function() {
  var element = document.createElement("ul");
  element.classList.add("cat");
  return element;
};

var createCatName = function(name) {
  var element = document.createElement("li");
  element.append("Name: " + name);
  return element;
};

var createCatFaveFood = function(faveFood) {
  var element = document.createElement("li");
  element.append("Favourite food: " + faveFood);
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

window.onload = addCats;
