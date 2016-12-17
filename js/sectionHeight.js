;(function(){
  document.addEventListener('RemoteContentLoaded',function(){
    var workingOn = document.getElementById('working_on');
    var completed = document.getElementById('completed');
    var resources = document.getElementById('resources');
    var height = (workingOn.clientHeight > completed.clientHeight)? workingOn.clientHeight : completed.clientHeight;
    var height = (height > resources.clientHeight) ? height : resources.clientHeight;
    workingOn.style.height = height;
    completed.style.height = height;
    resources.style.height = height;
    completed.setAttribute("style","height:"+height+"px;");
    console.log(height);
  },false);
})();
