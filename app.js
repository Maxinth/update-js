import axios from "axios";

const getData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));

  axios
    .get("https://kreatesell.io/api/admin/Sales/Stats")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

getData();
