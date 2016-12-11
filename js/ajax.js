;(function(){
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function(){
		if(httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200){
			alert(httpRequest.responseText);
		}
	};
	httpRequest.open('GET', 'https://api.github.com/users/hero24/repos?type=owner', true);
	httpRequest.setRequestHeader('Authorization', 'token efd41ce41979f46ba21abff5bf5f03358260adfb');
	httpRequest.send(null);
})();
