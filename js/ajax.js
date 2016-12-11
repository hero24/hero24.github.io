;(function(){
	document.addEventListener("DOMContentLoaded",function(){
		var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function(){
			if(this.readyState === XMLHttpRequest.DONE){
				document.getElementById("working_on").innerHTML = this.responseText;
			}
		};
		httpRequest.open('GET', 'https://api.github.com/users/hero24/repos?client_id=e60a7d85f37e798afe66&type=owner', true);
		//httpRequest.setRequestHeader('Authorization', 'token 9d8791a7f504e9152db516a43712ab72cf7f6406');
		httpRequest.send(null);
	},false);
})();
