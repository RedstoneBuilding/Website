window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.padding = "0px 0px";
    document.getElementById("logo").style.height = "80px";
    document.getElementById("logo").style.width = "80px";
    document.getElementById("navbar").style.height = "2%";
  } else {
    document.getElementById("navbar").style.padding = "1px 5%";
    document.getElementById("logo").style.height = "100px";
    document.getElementById("logo").style.width = "100px";
    document.getElementById("navbar").style.height = "4%";
  }
}
