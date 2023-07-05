document.addEventListener('DOMContentLoaded', function() {
    var elements = document.getElementsByClassName('typewriter');
    for (var i = 0; i < elements.length; i++) {
      var txtElement = elements[i];
      var txt = txtElement.innerText;
      txtElement.innerText = '';
  
      for (var j = 0; j < txt.length; j++) {
        (function(j) {
          setTimeout(function() {
            txtElement.innerText += txt.charAt(j);
          }, j * 100);
        })(j);
      }
    }
  });
  