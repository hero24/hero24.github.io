;(function(){
	document.addEventListener("DOMContentLoaded",function(){
		var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function(){
			if(this.readyState === XMLHttpRequest.DONE){
				document.getElementById("working_on").innerHTML = this.responseText;
			}
		};
		httpRequest.setRequestHeader('Authorization', 'token efd41ce41979f46ba21abff5bf5f03358260adfb');
		httpRequest.open('GET', 'https://api.github.com/users/hero24/repos?type=owner', true);
		httpRequest.send(null);
	},false);
})();
