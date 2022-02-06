let book = {
  topic: "JavaScript",
  edition: 7,
};

const topic = book.topic;

let val = book?.topic;

// logs
console.log(val);
