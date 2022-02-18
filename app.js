// import axios from "axios";
// const axios = require("axios");
//
// const { default: axios } = require("axios");

const baseUrl = "https://kreatesell.io/api/admin/Authorization/signin";

const formData = {
  username: "super.admin@kreatesell.com",
  password: "P@ssw0rd1!",
};
const getData = async () => {
  const response = await fetch(baseUrl, {
    method: "POST",
    ...formData,
    header: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
};

// axios
// const getData = () => {
//   axios
//     .post(baseUrl, {
//       ...formData,
//       header: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log("ERROR OCCURRED!"));
// };

getData();

// function getToken() {
//   return localStorage.getItem("token");
// }

// getToken();
