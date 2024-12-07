function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById('entrybutton');// Find the button with the ID 'entrybutton' in the HTML file code
 
 function showMeText() {// A Function to execute when the button is clicked on
	 var textbox = document.getElementById('entryinput');// Gets the inputted text with the ID 'entryinput'
   document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Mashell Pervaiz: " + textbox.value);// Display an alert with my name and the input
  }






window.addEventListener('load', init);