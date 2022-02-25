let itemName = "Hello, world";
let s = itemName;
let val = itemName.substring(1, 4);
val = itemName.slice(1, 4);
val = itemName.slice(-3);

val = s.split(", ");
val = s.indexOf("l", 6);
val = s.indexOf("zz");
val = s.lastIndexOf("l");
val = s.startsWith("Hell");
val = s.startsWith(" Hello");
val = s.endsWith(", world");

console.log(val);
