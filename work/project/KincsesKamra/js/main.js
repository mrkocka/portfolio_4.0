

/*Navbar colorSwitch*/
var nav = document.getElementById('nav');
  window.onscroll = function(){
      if (window.pageYOffset >100){
        nav.style.background = "rgba(0, 0, 0, 0.801)";
      }
      else{
        nav.style.background = "transparent";
      }

  }



/*Navbar ButtonSwitch*/

document.getElementById("HButton").addEventListener("click", menuX);
      function menuX(){
        document.getElementById("HBmenu").style.display = "flex";
      }
    
document.getElementById("XButton").addEventListener("click",menuH);
      function menuH(){
        document.getElementById("HBmenu").style.display = "none";
      }



      function finish(){
        document.getElementById("HBmenu").style.display = "none";
      }



