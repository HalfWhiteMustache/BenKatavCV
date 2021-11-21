

var x = document.getElementsByClassName("progress")[0].getAttribute("width");
var i = 0;
function move(x) {
  if (i == 0) {
    i = 1;
    var elem = document.getElementsByTagName("Shtml")
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= x) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
function textareaLengthCheck(el) {
  var textArea = el.value.length;
  var charactersLeft = 200 - textArea;
  var count = document.getElementById('lblRemainingCount');
  count.innerHTML = "Characters left: " + charactersLeft;
}

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("prof");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";}
