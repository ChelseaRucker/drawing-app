//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");


//When clicking on control list items
$(".controls li").click(function() {
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});

//When new color is pressed
$("#revealColorSelect").click(function() {
	//Show/hide color selected
	changeColor();
	$("#colorSelect").toggle();
});

//Update new color span
function changeColor() {
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();
	$("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

	//when color sliders change
	$("input[type=range]").change(changeColor);
