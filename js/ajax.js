;(function(){
	document.addEventListener("DOMContentLoaded",function(){
		var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function(){
			if(this.readyState === XMLHttpRequest.DONE){
				var data = JSON.parse(this.responseText);
				var working_on = document.getElementById("working_on");
				for(var i = 0;i<data.length;i++){
					var repoRequest = new XMLHttpRequest();
					repoRequest.onreadystatechange = function(){
						if(this.readyState == XMLHttpRequest.DONE){
							var repoDetails = JSON.parse(this.responseText);
							var node = document.createElement('a');
							node.setAttribute('href',repoDetails.html_url);
							node.appendChild(document.createTextNode(repoDetails.name));
							working_on.appendChild(node);
						}
					};
					repoRequest.open('GET',data[i].repo.url + '?client_id=e60a7d85f37e798afe66',true);
					repoRequest.send(null);
				}
			}
		};
		httpRequest.open('GET', 'https://api.github.com/users/hero24/events/public?client_id=e60a7d85f37e798afe66&type=owner', true);
		httpRequest.send(null);
	},false);
})();
