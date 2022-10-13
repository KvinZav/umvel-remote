export const waitFor = (delay) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(true)
  }, delay);
})