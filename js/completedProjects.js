;(function(){
  document.addEventListener("DOMContentLoaded",function(){
    var languageRequest = new XMLHttpRequest();
    languageRequest.onreadystatechange = function(){
      if(this.readyState == XMLHttpRequest.DONE){
        var langDetails = JSON.parse(this.responseText);
        for(var i = 0;i< langDetails.length;i++){
          var langs = document.getElementById('langs');
          langs.innerHTML += langDetails[i].releases_url;
          langs.innerHTML += langDetails[i].languages_url;
        }
      }
    };
    languageRequest.open('GET','https://api.github.com/users/hero24/repos',true);
    languageRequest.send(null);
  },false);
})();
// 

