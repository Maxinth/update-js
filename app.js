// import axios from "axios";
// const axios = require("axios");

const baseUrl = "https://kreatesell.io/api/admin/Authorization/signin";

const formData = {
  username: "super.admin@kreatesell.com",
  password: "P@ssw0rd1!",
};
const getData = async () => {
  const response = await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(formData),
    header: {
      "content-type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
};

getData();

// function getToken() {
//   return localStorage.getItem("token");
// }

// getToken();
