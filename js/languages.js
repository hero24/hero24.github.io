;(function(){
  document.addEventListener("DOMContentLoaded",function(){
    var langColors = new XMLHttpRequest();
    langColors.onreadystatechange = function(){
      if(this.readyState == XMLHttpRequest.DONE){
        var lang_rainbow = document.getElementById('lang_rainbow')
        var rainbowHR = lang_rainbow.getContext("2d");
        var width = lang_rainbow.width;
        var height = lang_rainbow.height;
        var gradient = rainbowHR.createLinearGradient(0,0,height,width);
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
                        console.log(gitLangDetails[k]===key+':');
                        if(gitLangDetails[k]===key+':'){
                          found = true
                        }
                        if(found && gitLangDetails[k].includes("color:")){
                          color = gitLangDetails[k].split('"')[1];
                          break;
                        }
                      }
                      gradient.addColorStop(i/10,color);
                      langs.innerHTML += key + ' ' + color;;
                    }
                  }
                  console.log(lang); 
                  console.log(color);
                }
              }
              repoLangs.open('GET',langDetails[i].languages_url,true);
              repoLangs.send(null);
            }
          }
          rainbowHR.fillStyle = gradient;
          rainbowHR.fillRect(0,0,height,width);
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
