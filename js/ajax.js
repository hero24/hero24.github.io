;(function(){
	document.addEventListener("DOMContentLoaded",function(){
		var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function(){
			if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
				alert(httpRequest.responseText);
			}
		};
		httpRequest.open('GET', 'https://api.github.com/users/hero24/repos?type=owner', true);
		httpRequest.send(null);
	},false);
})();
