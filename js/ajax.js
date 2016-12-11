;(function(){
	document.addEventListener("DOMContentLoaded",function(){
		var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function(){
			if(this.readyState === XMLHttpRequest.DONE){
				var data = JSON.parse(this.responseText);
				for(var i = 0;i<data.length;i++){
					document.getElementById("working_on").appendChild(document.createTextNode('<br />'+data[i].repo.url));
				}
			}
		};
		httpRequest.open('GET', 'https://api.github.com/users/hero24/events/public?client_id=e60a7d85f37e798afe66&type=owner', true);
		httpRequest.send(null);
	},false);
})();
