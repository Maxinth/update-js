import axios from "axios";

const baseUrl = "https://kreatesell.io/api/admin/Authorization/AddPermisions";

const getData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));

  axios
    .get(baseUrl)
    .then((res) => {
      console.log("successfully fetched");
      console.log(res.data);
    })
    .catch((err) => {
      console.error("AN ERROR OCCURRED!", err);
    });
};

getData();
