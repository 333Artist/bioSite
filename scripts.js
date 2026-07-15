document.addEventListener("DOMContentLoaded", function() {
  var coll = document.getElementsByClassName("collapsible");
  var i;


  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      // Toggle the active class on the button
      this.classList.toggle("active2");
      
      var content = this.nextElementSibling;
      
      // If content is found, toggle its height
      if (content) {
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }
    });
  }
   

});


  