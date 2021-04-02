export const timeout = (duration = 0) => new Promise(resolve => {
  setTimeout(resolve, duration);
});

export const extractTransition = (element) => {
  const style = getComputedStyle(element);
  const results = new Map();
  if (style.transition) {
    style.transition.split(/\s*,\s*/g).forEach(chunk => {
      const [name, duration, easing, delay] = chunk.trim().split(/\s+/g);
      results.set(name, {
        duration: parseFloat(duration) * 1000,
        easing,
        delay: parseFloat(delay) * 1000,
      });
    });
  }
  return results;
};