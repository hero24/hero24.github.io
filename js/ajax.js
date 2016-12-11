;(function(){
	document.addEventListener("DOMContentLoaded",function(){
		var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function(){
			if(this.readyState === XMLHttpRequest.DONE){
				var data = JSON.parse(this.responseText);
				var working_on = document.getElementById("working_on");
				for(var i = 0;i<data.length;i++){
					var node = document.createElement('p');
					node.appendChild(document.createTextNode(data[i].repo.url));
					working_on.appendChild(node);
				}
			}
		};
		httpRequest.open('GET', 'https://api.github.com/users/hero24/events/public?client_id=e60a7d85f37e798afe66&type=owner', true);
		httpRequest.send(null);
	},false);
})();
