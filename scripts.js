// JavaScript for TP6

// generic AJAX function to load fromFile into object with ID whereTo
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// prepares code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
		
			if ((this.readyState == 4) && (this.status == 200)) {
				document.getElementById(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
				
			}
		
	} // end ajax.onreadystatechange

	// now that everything is set, initiate request
	ajax.send();
}

// object constructor for recipe prototype
function Recipe(recipeName, imagesrc1, imagesrc2, contributorName, ingredientFilename, equipmentFilename, directionsFilename) {
  this.name = recipeName;
  this.imagesrc = imagesrc1;
  this.imagesrc = imagesrc2;
  this.contributor = contributorName;
  this.ingFile = ingredientFilename;
  this.equipFile = equipmentFilename;
  this.dirFile = directionsFilename;
  
  //update the screen with this object's recipe information
  this.displayRecipe = function() {
    
    //update the recipe title
    document.querySelector("#titleBanner h1").innerHTML = this.name;
    
    //update the recipe contributor
    document.querySelector("#titleBanner h3").innerHTML = "Contributed By: " + this.contributor;
    
    //update image 1
    document.querySelector("#image1").style.backgroundImage = "url(" + this.imagesrc +")";
    
    //update image 1
    document.querySelector("#image2").style.backgroundImage = "url(" + this.imagesrc +")";
    
    //update the 3 columns of information
    loadFileInto(this.ingFile, "ingredients");
    loadFileInto(this.equipFile, "equipment");
    loadFileInto(this.dirFile, "directions");
  }
}

LemonChickenPiccata = new Recipe(
  "Lemon Chicken Piccata",
  "chicken.jpg",
  "chicken2.jpg",
  "LemonLush",
  "ingredients.html",
  "equipment.html",
  "directions.html"
);


headerClick = document.querySelector("#titleBanner h1");

headerClick.onclick = function () {
  headerClick.classList.toggle("click");
};

liClick = document.querySelector("div#ingredients");
liClick.onclick = function () {
  liClick.classList.toggle("ingClicked");
};

liClick2 = document.querySelector("div#equipment");
liClick2.onclick = function () {
  liClick2.classList.toggle("equipClicked");
};

liClick3 = document.querySelector("div#directions");
liClick3.onclick = function () {
  liClick3.classList.toggle("dirClicked");
};

x = document.getElementById("thanks");
x.innerHTML = "Hope you enjoy your meal!";
x.style.fontSize = "50px";
x.style.fontFamily = "Bebas Neue";
x.style.textAlign = "center";


