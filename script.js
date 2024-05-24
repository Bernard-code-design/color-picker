// Wait for the document to finish loading before running this code
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the DOM elements we'll use
  const colorPicker = document.getElementById("colorPicker");
  const colorDisplay = document.getElementById("colorDisplay");
  const colorValue = document.getElementById("colorValue");

  // Add an event listener to the color picker input
  colorPicker.addEventListener("input", function () {
    // Get the value (the selected color) from the color picker
    const selectedColor = colorPicker.value;

    // Update the background color of the color display element to match the selected color
    colorDisplay.style.backgroundColor = selectedColor;

    // Update the text content of the color value element to show the selected color
    colorValue.textContent = selectedColor;
  });
});
