
//on load
  window.onload = function(){
    lang_dk ();
  }


//open menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
//Close menu
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  //Switch Language
  function switchLanguage() {
    if (document.getElementById("swLa").src == "http://127.0.0.1:5500/Images/LA_DK_IMG.png"){
    document.getElementById("swLa").src="Images/LA_EN_IMG.png"  
    } else {
      document.getElementById("swLa").src="Images/LA_DK_IMG.png" 
    }
    
  }

  function lang_dk(){
    
      document.getElementById("welcome_txt").innerHTML = welcome_dk;
  }

  function lang_en(){

  }

  var welcome_dk = "Jeg har haft en interesse for computere siden jeg var barn."

