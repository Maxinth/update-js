let s = "Hello, world";

// creating modified version of the string
let val = s.replace("llo", "ya");
val = s.toLowerCase();
val = s.toUpperCase();
val = s.normalize();
val = s.normalize("NFKC");

// es2017
val = "x".padStart(3);

console.log({ val, s });
