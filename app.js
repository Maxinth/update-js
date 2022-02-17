import axios from "axios";

const getData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));

  console.log(process.env);
  //   axios
  //     .get(`${process.env.BASE_URL}/admin/Sales/Stats`)
  //     .then((res) => {
  //       console.log("successfully fetched");
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.error("AN ERROR OCCURRED!", err);
  //     });
};

getData();
