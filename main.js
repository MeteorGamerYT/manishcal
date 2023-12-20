var screen = document.getElementById('outputScreen');

function num(n) {
  screen.value+= n;
}

function clearall() {
  screen.value= '';
}

function performEvaluation() {
  screen.value = eval(screen.value);
}