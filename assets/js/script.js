function toggleMute() {
    var button=document.getElementById("MuteButton")
    var video=document.getElementById("bgVideo")
    video.volume = 0.5;
    
    if(video.muted){
      video.muted = false;
    } else {
      video.muted = true;
    }
    
    button.classList.toggle('muted');
  }

  /* validation formulaire */
  

  // OLD TV