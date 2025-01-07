
//asynchronous
// not happening in same time
//synchronous => happening at same time
//node =>single threaded

console.log("history");
setTimeout(() => {
    console.log('2 sec')
}, 2000);
console.log('world');