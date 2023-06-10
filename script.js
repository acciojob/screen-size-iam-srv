//your JS code here. If required.
// Function to handle window resize event
function dimention() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  
  let dimensionsDiv = document.getElementById('container');
  dimensionsDiv.textContent = "Width: " + width + ", Height: " + height;
  
}
window.addEventListener('resize', dimention);


dimention();
