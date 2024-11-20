function move() {
  for (let i = 1; i < 6; i++) {
    const height = 50 * Math.floor(Math.random() * 6 + 1);
    const id = `#box${i}`;
    document.querySelector(id).style.height = `${height}px`;
  }
}

let myinterval;

function start() {
  clearInterval(myinterval);
  myinterval = setInterval(move, 1000);
}

function stop() {
  clearInterval(myinterval);
}

function reset() {
  clearInterval(myinterval);
  for (let i = 1; i < 6; i++) {
    const id = `#box${i}`;
    document.querySelector(id).style.height = '300px';
  }
}
