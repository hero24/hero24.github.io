;(function(){
	document.addEventListener("DOMContentLoaded",function(){
		var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function(){
			if(this.readyState === XMLHttpRequest.DONE){
				document.getElementById("working_on").innerHTML = this.responseText;
			}
		};
		httpRequest.open('GET', 'https://api.github.com/users/hero24/repos?access_token=9d8791a7f504e9152db516a43712ab72cf7f6406&type=owner', true);
		//httpRequest.setRequestHeader('Authorization', 'token efd41ce41979f46ba21abff5bf5f03358260adfb');
		httpRequest.send(null);
	},false);
})();
