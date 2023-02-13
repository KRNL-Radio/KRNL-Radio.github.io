export function measureFPS(ms: number = 10_000) {
  // returns the average frames per second over the last x ms
  let lastTime = performance.now();
  let frames = 0;
  let fps = 0;
  return new Promise((resolve) => {
    let raf = () => {
      let now = performance.now();
      frames++;

      // are we over the time limit?
      if (now - lastTime > ms) {
        fps = (frames / (now - lastTime)) * 1000;
        resolve(fps);
      } else {
        requestAnimationFrame(raf);
      }
    };
    raf();
  });
}
