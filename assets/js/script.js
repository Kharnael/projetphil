function toggleMute() {
    var button=document.getElementById("MuteButton")
    var video=document.getElementById("bgVideo")
    
    if(video.muted){
      video.muted = false;
    } else {
      video.muted = true;
    }
    
    button.classList.toggle('muted');
  }