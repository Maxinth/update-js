/**
Write a program that prints out the numbers 1 to 100 (inclusive). If the number is divisible by 3, 
print Crackle instead of the number. If it's divisible by 5, print Pop. If it's divisible by both 3 and 5, print CracklePop. You can use any language.
 */

const printNum = () => {
  //   let num = Math.floor(Math.random() * 101);
  //   console.log(`num is ${num}`);

  for (let i = 1; i < 101; i++) {
    // console.log(`i is ${i}`);
    if (i % 5 === 0 && i % 3 === 0) {
      console.log(`CracklePop`);
    }

    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(`Crackle`);
    }
    if (i % 5 === 0 && i % 3 !== 0) {
      console.log(`Pop`);
    }
    console.log(i);
  }
};

printNum();
