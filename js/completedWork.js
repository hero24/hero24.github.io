;(function(){
  document.addEventListener("DOMContentLoaded",function(){
    var completedWork = document.getElementById('completed');
    var repoRequest = new XMLHttpRequest();
    repoRequest.onreadystatechange = function(){
      if(this.readyState == XMLHttpRequest.DONE){
        var incomingData = JSON.parse(this.responseText);
        for(var i = 0;i<incomingData.length;i++){
          var statusQuery = new XMLHttpRequest();
          statusQuery.onreadystatechange = function(){
            if(this.readyState == XMLHttpRequest.DONE){
              var responseJSON = JSON.parse(this.responseText);
              for(var i = 0; i < responseJSON.length;i++){
                var link = document.createElement('a');
                link.href = responseJSON[i].html_url;
                link.appendChild(document.createTextNode(responseJSON[i].name));
                completedWork.appendChild(link);
              }
            }
          };
          statusQuery.open('GET',incomingData[i].releases_url.replace('{/id}',''),true);
          statusQuery.send(null);
        }
      }
    };
    repoRequest.open('GET','https://api.github.com/users/hero24/repos',true);
    repoRequest.send(null);
  },false);
})();
