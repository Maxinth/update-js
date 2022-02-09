let café = 1; // This constant is named "caf\u{e9}"
café = 2; // This constant is different: "cafe\u{301}"
café; // => 1: this constant has one value
café; // => 2: this indistinguishable constant has a different value

console.log(café);
