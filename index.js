// ILL GOTTEN GAIN FROM W3SCHOOL EXAMPLE
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  // if ($(window).scrollTop() <= 110) {
  //   document.getElementById("navbar").style.transition = 'auto';
  //   document.getElementById("navbar").style.top = "0";
  //   document.getElementById("navbar").style.position = "static";
  //   document.getElementsByTagName("body")[0].style.paddingTop = "0";
  // } else if (prevScrollpos > currentScrollPos) {
  //   // document.getElementById("navbar").style.transition = 'top .2s linear';
  //   document.getElementById("navbar").style.transition = 'top 0.2s linear;';
  //   document.getElementById("navbar").style.top = "0";
  //   document.getElementById("navbar").style.position = "fixed";
  //   document.getElementsByTagName("body")[0].style.paddingTop = "60px";
  // } else {
  //   // document.getElementById("navbar").style.transition = 'top .2s linear';
  //   document.getElementById("navbar").style.top = "-60px";
  // }
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
  }
  else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}









currentYear = new Date().getFullYear();

document.getElementsByClassName('copyright')[0].innerText = `copyright © ${new Date().getFullYear()}`;




// if ($(window).scrollTop() === 0) {
//   alert('top of the morning to ya');
// };
