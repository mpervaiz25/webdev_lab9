function init(){
  var button = document.getElementById('entrybutton');

  function showMeText(){
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Mashell Pervaiz: " + textbox.value);
		
		var h2Element = document.querySelector('h2');
		h2Element.textContent = textbox.value; // Updates the <h2> content
		
  }

  button.addEventListener('click', showMeText);
  }
  
window.addEventListener('load', init);