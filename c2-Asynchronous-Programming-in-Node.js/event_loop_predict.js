setTimeout(() => {
  console.log("A");
}, 0);

Promise.resolve().then(() => {
  console.log("B");
});

process.nextTick(() => {
  console.log("c");
});

setTimeout(() => {
  console.log("D");
}, 0);

console.log("E");

Promise.resolve().then(() => {
  console.log("B");
});
