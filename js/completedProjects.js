;(function(){
  document.addEventListener("DOMContentLoaded",function(){
    var languageRequest = new XMLHttpRequest();
    languageRequest.onreadystatechange = function(){
      if(this.readyState == XMLHttpRequest.DONE){
        var langDetails = JSON.parse(this.responseText);
        var langs = document.getElementById('langs');
        langs.innerHTML += this.responseText;
      }
    };
    languageRequest.open('GET','https://api.github.com/users/hero24/repos',true);
    languageRequest.send(null);
  },false);
}})();
// 

