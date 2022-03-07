const initData = require("./base");

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

const all = [...OW, ...SA, ...ST];

// ALL INITIALLY CHECKED, remove one.
const filterFromAll = (id, id2) =>
  all.filter((item) => item.alliance !== id && item.alliance !== id2);

// const filterOwFromAll = filterFromAll("OW");
// const filterSTFromAll = filterFromAll("ST");
// const filterSAFromAll = filterFromAll("SA");

console.log(filterFromAll("OW", "ST").length);
