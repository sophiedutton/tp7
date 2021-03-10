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

window.onload = function() {
	
	loadFileInto("ingredients.html", "ingredients");
	
	loadFileInto("equipment.html", "equipment");
	
	loadFileInto("directions.html", "directions");
	
};

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
