const initData = require("./base");
// console.log(initData);

const runFilter = (id) => {
  return initData.filter((item) => item.alliance === id);
};

const OW = runFilter("OW");
const ST = runFilter("ST");
const SA = runFilter("SA");

// console.log({ OW, ST, SA });
