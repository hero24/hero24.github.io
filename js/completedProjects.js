;(function(){
  document.addEventListener("DOMContentLoaded",function(){
    var languageRequest = new XMLHttpRequest();
    languageRequest.onreadystatechange = function(){
      if(this.readyState == XMLHttpRequest.DONE){
        var langDetails = JSON.parse(this.responseText);
        console.log(langDetails);
        console.log(langDetails.length);
        var langs = document.getElementById('langs');
        langs.innerHTML += langDetails.releases_url;
        langs.innerHTML += langDetails.languages_url;
      }
    };
    languageRequest.open('GET','https://api.github.com/users/hero24/repos',true);
    languageRequest.send(null);
  },false);
})();
// 

