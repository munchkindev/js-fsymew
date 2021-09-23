function carousel(n) {
  var i;
  var x = document.getElementsByClassName('slider');
  if (n === 6) {
    delayedCarousel(1);
  }
  //for (i = 0; i < x.length; i++) {
  x[n].style.display = 'block';
  if (n === 1) x[5].style.display = 'none';
  //}
  //slideIndex++;
  //if (n > x.length) {/*slideIndex = 1*/
  x[n - 1].style.display = 'none';
  //setTimeout(carousel, 5000); // Change image every 5 seconds
}
function delayedCarousel(n) {
  setTimeout(function () {
    carousel(n);
  }, 3000);
}

function changeSlide(n) {
  showDivs((n += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName('slider');
  if (n > x.length) {
    n = 1;
  }
  if (n < 1) {
    n = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    x[i].style.width = '100%';
  }
  x[n - 1].style.display = 'block';
}
