console.log("first");
setTimeout(() => {
  console.log("run only once");
}, 0);

setTimeout(() => {
  console.log("runs every two seconds!!");
}, 2000);
console.log("third");
