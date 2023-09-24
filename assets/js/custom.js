var initialMouseX = null;
var initialRotation = 0;

var today = new Date();
var currentTime = today.getHours();
if ((currentTime) => 18) {
  document.body.classList.add("night");
}

$(document).bind("mousemove", function (e) {
  if (initialMouseX === null) {
    initialMouseX = e.pageX;
    initialRotation = getRotationValue($(".spin img"));
  }

  var mouseX = e.pageX;
  var rotationDelta = (mouseX - initialMouseX) * 0.5; // Ajusta el factor para controlar la velocidad de rotación

  var newRotation = initialRotation + Math.abs(rotationDelta);

  $("#log").text("e.pageX: " + e.pageX + ", e.pageY: " + e.pageY);
  $(".spin img").css("transform", "rotate(" + newRotation / 2 + "deg)");

  // console.log(newRotation)
});

function getRotationValue(element) {
  var matrix = element.css("transform").split("(")[1].split(")")[0].split(",");
  var a = matrix[0];
  var b = matrix[1];
  var angle = Math.atan2(b, a);
  return angle * (180 / Math.PI);
}
