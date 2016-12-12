;(function(){
  document.addEventListener("DOMContentLoaded",function(){
    var langColors = new XMLHttpRequest();
    langColors.onreadystatechange = function(){
      if(this.readyState == XMLHttpRequest.DONE){
        var colors = [];
        var gitLangDetails = this.responseText.split('\n');
        console.log(gitLangDetails);
        var languageRequest = new XMLHttpRequest();
        languageRequest.onreadystatechange = function(){
          if(this.readyState == XMLHttpRequest.DONE){
            var langDetails = JSON.parse(this.responseText);
            for(var i = 0;i< langDetails.length;i++){
              var langs = document.getElementById('langs');
              repoLangs = new XMLHttpRequest();
              repoLangs.onreadystatechange = function(){
                if(this.readyState == XMLHttpRequest.DONE){
                  var lang = JSON.parse(this.responseText);
                  var color;
                  for (var key in lang) {
                    if (lang.hasOwnProperty(key)){
                      for(var k = 0, found = false;k<gitLangDetails.length;k++){
                        console.log(gitLangDetails[k].includes(key));
                        if(gitLangDetails[k].includes(key)){
                          found = true
                          langs.innerHTML += this.responseText;
                        }
                        if(found && gitLangDetails[k].includes("color:")){
                          color = gitLangDetails[k];
                          break;
                        }
                      }
                    }
                  }
                  console.log(lang); 
                  console.log(color);
                  //langs.innerHTML += langDetails[i].releases_url;
                }
              }
              repoLangs.open('GET',langDetails[i].languages_url,true);
              repoLangs.send(null);
            }
          }
        };
        languageRequest.open('GET','https://api.github.com/users/hero24/repos',true);
        languageRequest.send(null);
      }
    }
    langColors.open('GET','https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml',true);
    langColors.send(null);
  },false);
})();
// 

