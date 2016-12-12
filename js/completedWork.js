;(function(){
  document.addEventListner("DOMContentLoaded",function(){
    var completedWork = document.getElementById('completed');
    var repoRequest = new XMLHttpRequest();
    repoRequest.onreadystatechange = function(){
      if(this.readyState == XMLHttpRequest.DONE){
        var incomingData = JSON.parse(this.responseText);
        for(var i = 0;i<incomingData.length;i++){
          var completed = false;
          var statusQuery = new XMLHttpRequest();
          statusQuery.onreadystatechange = function(){
            if(this.readyState == XMLHttpRequest.DONE){
              if(JSON.parse(this.responseText).length > 0){
                completed = true;
              }
            }
            if(completed){
              completedWork.innerHTML += incomingData[i].html_url;
            }
          };
          statusQuery.open('GET',incomingData[i].releases_url,true);
          statusQuery.send(null);
        }
      }
    };
    repoRequest.open('GET','https://api.github.com/users/hero24/repos',true);
    repoRequest.send(null);
  },false);
})();
