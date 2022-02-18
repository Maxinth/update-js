// import axios from "axios";
// const axios = require("axios");

const baseUrl = "https://kreatesell.io/api/admin/Authorization/signin";

const formData = {
  username: "super.admin@kreatesell.com",
  password: "P@ssw0rd1!",
};
const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

  //   axios
  //     .post(baseUrl, {
  //       method: "POST",
  //       ...formData,
  //     })
  //     .then((res) => {
  //       console.log("successfully fetched");
  //       console.log(res.data);
  //       localStorage.setItem("token", res.token);
  //     })
  //     .catch((err) => {
  //       console.error("AN ERROR OCCURRED!", err.error);
  //     });
};

getData();

// function getToken() {
//   return localStorage.getItem("token");
// }

// getToken();
