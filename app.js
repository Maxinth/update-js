const initData = require("./base");

const runFilter = (id) => {
  return initData.filter((item) => item.alliance === id);
};

// individual checks
const OW = runFilter("OW");
const ST = runFilter("ST");
const SA = runFilter("SA");

// console.log({ OW, ST, SA }); 17,20,27 === 64

// two filters checked
const OWandST = [...OW, ...ST].length;
const OWandSA = [...OW, ...ST].length;
const STandSA = [...ST, ...SA].length;

// all checked
const all = [...OW, ...SA, ...ST];

// custom reusable functions - assuming all filters have been initially checked

// ALL INITIALLY CHECKED, remove one.
const filterOneFromAll = (id) => all.filter((item) => item.alliance !== id);

// filter two from all
const filterTwoFromAll = (id, id2) =>
  all.filter((item) => item.alliance !== id && item.alliance !== id2);

// when all filters are unchecked
const allFiltersUnchecked = initialData;

//
