let numberDivs = 64;
let backgroundColor = "#90caf9";
let color = "pink";
let rainbow = false;



function createGrid() {

    document.documentElement.style
.setProperty('--square-number', numberDivs);

let divs = "";

for (let i = 0; i < (numberDivs**2); i++) {
    
divs = divs + `<div class="square inactive"></div>`;
    

};


const container = document.querySelector('.container');
container.innerHTML = divs;



}


    
    




const colorPicker = document.getElementById("color");
colorPicker.addEventListener("change", function (event){
    
  document.querySelectorAll(".inactive").forEach(function (square) {
        

        square.style.backgroundColor = event.target.value;
        console.log(event.target.value)
      
    });
});


const colorPickerInk = document.getElementById("ink");

colorPickerInk.addEventListener("change", function (event){

color = event.target.value;

});



createGrid();
listen();





const eraseButton = document.getElementById("erase");
eraseButton.addEventListener("click", erase);



function erase(){
    
    const square = document.querySelectorAll(".square");
    
    square.forEach(function (square) {

      square.classList.add("inactive");
          square.style.backgroundColor = backgroundColor;
          
    
        
      });


}


let rainbowButton = document.getElementById("rainbowMode");
rainbowButton.addEventListener("click", function () {
 
rainbow = !rainbow;

if (rainbow === true){
  rainbowButton.classList.add("rainbowActive");
} else if (rainbow == false) {
  rainbowButton.classList.remove("rainbowActive")
};


});



function listen() {


    const square = document.querySelectorAll(".square");
    

    square.forEach(function (square) {

    square.setAttribute('draggable', 'false');
    square.addEventListener('mouseover', event => {
    square.classList.remove("inactive");

      if (rainbow === false) {

      
      square.style.backgroundColor = color;
      } else {
        

      square.style.backgroundColor = randomColor();
      }
    
    })
  })

}



function randomColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(bgColor);
return bgColor;
}

// slider 
let slider = document.getElementById("slider");
let slider_label = document.getElementById("grid-size-label")
slider_label.innerHTML = numberDivs + " x " + numberDivs;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  numberDivs = this.value;
  console.log(this.value);
  createGrid();
  listen();
  slider_label.innerHTML = numberDivs + " x " + numberDivs;
  
} ;


