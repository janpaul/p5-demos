import p5 from "p5";

const isPrime = (n: number): boolean => {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

new p5(p => {
  let x, y;
  let step = 1;
  let stepSize = 5;
  let numSteps = 1;
  let state = 0;
  let turnCounter = 0;
  let totalSteps;
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    x = p.width / 2;
    y = p.height / 2;
    p.background(0);
    const cols = p.width / stepSize;
    const rows = p.height / stepSize;
    totalSteps = cols * rows;
  };

  p.draw = () => {
    p.stroke(255, 20, 20);
    p.fill(255, 20, 20);
    if (isPrime(step)) {
      p.circle(x, y, stepSize / 2);
    }
    switch (state) {
      case 0:
        x += stepSize;
        break;
      case 1:
        y -= stepSize;
        break;
      case 2:
        x -= stepSize;
        break;
      case 3:
        y += stepSize;
        break;
    }

    if (step % numSteps === 0) {
      state = (state + 1) % 4;
      turnCounter++;
      if (turnCounter % 2 === 0) {
        numSteps++;
      }
    }
    step++;
    if (step > totalSteps) {
      p.noLoop();
    }
  };
});


