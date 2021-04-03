export const timeout = (duration = 0) => new Promise(resolve => {
  setTimeout(resolve, duration);
});
