// TYPES, VALUES and Variables
let val = Infinity;
val = Number.POSITIVE_INFINITY; // still Infinity
val = 1 / 0;

// negative infinity
val = -Infinity;
val = Number.NEGATIVE_INFINITY;
val = -1 / 0;
val = -Number.MAX_VALUE * 2;

// NaN
val = NaN;
val = Number.NaN;
val = 0 / 0;
val = Infinity / Infinity;

// underflow
/**
 *
 * LOGS
 */
// log goes here
console.log(typeof val);
console.log(val);
