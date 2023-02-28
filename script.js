
function toggleBlock() {
    var myBlock = document.getElementById("menu");
    var overlay = document.getElementById("overlay");
    var body = document.body;
    
    if (myBlock.style.display === "block") {
      myBlock.style.display = "none";
      overlay.style.display = "none";
      body.style.overflow = "auto";
    } else {
      myBlock.style.display = "block";
      overlay.style.display = "block";
      body.style.overflow = "hidden";
    }
  }

  document.addEventListener("click", function(event) {
    var myBlock = document.getElementById("menu");
    if (!event.target.closest("#menu") && !event.target.matches("button")) {
       myBlock.style.display = "none";
       document.getElementById("overlay").style.display = "none";
       document.body.style.overflow = "auto";
    }
 });