const initData = require("./base");
// console.log(initData);

const runFilter = (id) => {
  return initData.filter((item) => item.alliance === id);
};

const OW = runFilter("OW");
const ST = runFilter("ST");
const SA = runFilter("SA");

// console.log({ OW, ST, SA }); 17,20,27 === 64

const OWandST = [...OW, ...ST].length;
const OWandSA = [...OW, ...ST].length;
const STandSA = [...ST, ...SA].length;

const all = [...OW, ...SA, ...ST].length;

console.log(all);
