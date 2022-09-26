// muda de a cor da navbar durante o scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.backgroundColor = "rgb(243, 226, 149)";
    document.getElementById("navbar").style.zIndex="2"
    // sobrepoe a imagem à navbar durante o scroll up
    document.getElementById("main-img").style.zIndex="3";
  } else {
    document.getElementById("navbar").style.backgroundColor = "#fff";
    // sobrepoe a navbar à imagem durante o scroll down
    document.getElementById("main-img").style.zIndex="0";
  }
  prevScrollpos = currentScrollPos;
  if(window.width=='900px'){
    document.getElementById("navbar").style.backgroundColor = "rgb(243, 226, 149)";
    // sobrepoe a imagem à navbar durante o scroll up
    document.getElementById("main-img").style.zIndex="0";
  } else {
    document.getElementById("navbar").style.backgroundColor = "#fff";
    // sobrepoe a navbar à imagem durante o scroll down
    document.getElementById("main-img").style.zIndex="0";
  }
}