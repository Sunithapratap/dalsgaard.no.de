
window.onload = function() {
  
  var URL = window.URL || window.webkitURL;
  
  document.querySelector("button.load").addEventListener('click', function() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', "jp-sup.jpg", true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
      if (this.status == 200) {
        var blob = this.response;
        alert(blob.constructor);
        var img = document.createElement('img');
        img.onload = function(e) {
          URL.revokeObjectURL(img.src);
        };
        img.src = URL.createObjectURL(blob);
        document.getElementById("content").appendChild(img);
      } else {
        alert(this.statusText);
      }
    };
    xhr.send();

  }, false);
  
};