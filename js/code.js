  function overlayon() {
    document.getElementById("overlay").style.opacity = 1;
  }
  function overlayoff() {
    document.getElementById("overlay").style.opacity = 0;
  }
  
  function bringToFront() {
    document.getElementById("overlay").style.zIndex = 1;
  }

  function myFunction() {
    document.getElementById("overlay").style.zIndex = "1";
}

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


