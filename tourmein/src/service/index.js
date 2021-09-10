import axios from "axios";

let Service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 3000,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

let isGuide = {
  async getOne(email) {
    let response = await Service.get(`/users/${email}`);
    let doc = response.data;
    return {
      isguide: doc.isguide,
      phone: doc.phone,
      languages: doc.languages,
      ivisited: doc.ivisited,
      wouldvisit: doc.wouldvisit,
      aboutme: doc.aboutme,
    };
  },
};

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

  async login(email, password) {
    let response = await Service.post("/auth", {
      email: email,
      password: password,
    });

    let user = response.data;

    localStorage.setItem("user", JSON.stringify(user));

    return true;
  },

  logout() {
    localStorage.removeItem("user");
  },

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },

  getToken() {
    let user = Auth.getUser();
    if (user && user.token) {
      return user.token;
    } else {
      return false;
    }
  },

  prijavljen() {
    let user = Auth.getUser();
    if (user && user.token) {
      return true;
    }
    return false;
  },

  state: {
    get prijavljen() {
      return Auth.prijavljen();
    },

    get userEmail() {
      let user = Auth.getUser();
      if (user) {
        return user.email;
      }
    },
  },
};

export { Service, Auth, isGuide };
