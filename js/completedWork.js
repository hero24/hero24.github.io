/*
 * JavaScript is the only language that I'm aware of that people feel they don't need to learn before they start using it.
 * ~ Douglas Crockford
 */
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
		completedWork.appendChild(document.createElement('br');
              }
              var event = new Event("RemoteContentLoaded");
	      document.remoteContentLoaded.completed = true;
	      document.dispatchEvent(event);
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
