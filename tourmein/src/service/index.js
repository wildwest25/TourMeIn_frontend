import axios from "axios";

let Service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 3000,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

let Auth = {
  async register(
    email,
    password,
    firstname,
    lastname,
    gender,
    dob,
    country,
    isguide,
    city
  ) {
    let response = await Service.post("/users", {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      dob: dob,
      country: country,
      isguide: isguide,
      city: city,
    });
    let user = response.data;
    localStorage.setItem("user", JSON.stringify(user));
    return true;
  },
};

export { Service, Auth };
