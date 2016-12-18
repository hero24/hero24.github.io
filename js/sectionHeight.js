;(function(){
  document.addEventListener('RemoteContentLoaded',function(){
    if(document.remoteContentLoaded.workingOn && document.remoteContentLoaded.completed){
      var workingOn = document.getElementById('working_on');
      var completed = document.getElementById('completed');
      var resources = document.getElementById('resources');
      completed.setAttribute("style",'');
      workingOn.setAttribute("style",'');
      resources.setAttribute("style",'');
      var height = (workingOn.clientHeight > completed.clientHeight)? workingOn.clientHeight : completed.clientHeight;
      var height = (height > resources.clientHeight) ? height : resources.clientHeight;
      workingOn.style.height = height;
      completed.style.height = height;
      resources.style.height = height;
      var height = "height:"+height+"px;";
      completed.setAttribute("style",height);
      workingOn.setAttribute("style",height);
      resources.setAttribute("style",height);
      console.log(height);
    }
  },false);
})();
