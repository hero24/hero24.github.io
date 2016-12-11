;(function(){
	document.addEventListener("DOMContentLoaded",function(){
		var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function(){
			if(this.readyState === XMLHttpRequest.DONE){
				alert(httpRequest.responseText);
			}
		};
		httpRequest.open('GET', 'https://api.github.com/users/hero24/repos?type=owner', true);
		httpRequest.send(null);
	},false);
})();
