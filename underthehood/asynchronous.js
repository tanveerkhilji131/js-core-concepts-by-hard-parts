function printhello(){
    console.log("hello");
}
setTimeout(printhello,1000);

console.log("Me first");
// output:
// Me first
// hello

// becouse  printhello world inside a settimeout and this is a web feture i mean javaScript this feture send a browser and browser handle a timeer after complete this to back a js and print hello