// import axios from "axios";
// const axios = requirejs("axios");
//
// const { default: axios } = require("axios");

const baseUrl = "https://kreatesell.io/api/admin/Authorization/signin";

const formData = {
  username: "super.admin@kreatesell.com",
  password: "P@ssw0rd1!",
};

// document.addEventListener("DOMContentLoaded", function () {
//   requirejs(["axios"], function (lodash) {
//     const headerEl = document.getElementById("header");
//     headerEl.textContent = lodash.upperCase("hello world");
//   });
// });
const getData = async () => {
  const response = await fetch(baseUrl, {
    method: "POST",
    ...formData,
    header: {
      "Content-Type": "application/json",
      "Access-Control-Origin": "*",
    },
  });

  const data = await response.json();
  console.log(data);
};

// const getData = () => {
//   axios
//     .post(baseUrl, {
//       ...formData,
//       header: {
//         "Content-Type": "application/json",
//         "Access-Control-Origin": "*",
//       },
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log("ERROR OCCURRED!"));
// };

getData();

// function getToken() {
//   return localStorage.getItem("token");
// }

// getToken();
