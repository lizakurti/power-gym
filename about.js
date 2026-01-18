// COUNTER ANIMATION FOR ABOUT PAGE

function animateCounter(id, target) {
  let count = 0;
  const speed = 30;
  const element = document.getElementById(id);

  const interval = setInterval(function () {
    if (count < target) {
      count++;
      element.innerText = count;
    } else {
      clearInterval(interval);
    }
  }, speed);
}

window.addEventListener("load", function () {
  animateCounter("stat1", 500);
  animateCounter("stat2", 12);
  animateCounter("stat3", 20);
  animateCounter("stat4", 5);
});
