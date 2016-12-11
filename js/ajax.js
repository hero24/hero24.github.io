;(function(){
	document.addEventListener("DOMContentLoaded",function(){
		var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function(){
			if(this.readyState === XMLHttpRequest.DONE){
				var data = JSON.parse(this.responseText);
				var working_on = document.getElementById("working_on");
				var linked = [];
				for(var i = 0;i<data.length;i++){
					if(!linked.find((data[i].repo.url))){
						linked.push(data[i].repo.url);
						var repoRequest = new XMLHttpRequest();
						repoRequest.onreadystatechange = function(){
							if(this.readyState == XMLHttpRequest.DONE){
								var repoDetails = JSON.parse(this.responseText);
								console.log(repoDetails);
								var node = document.createElement('a');
								node.setAttribute('href',repoDetails.html_url);
								console.log(node);
								node.appendChild(document.createTextNode(repoDetails.name));
								working_on.appendChild(node);
							}
						};
						repoRequest.open('GET',data[i].repo.url,true);
						repoRequest.send(null);
					}
				}
			}
		};
		httpRequest.open('GET', 'https://api.github.com/users/hero24/events/public?type=owner', true);
		httpRequest.send(null);
	},false);
})();
