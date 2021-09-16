import axios from "axios";

let Service = axios.create({
  baseURL: "https://tourmeinbackend.herokuapp.com/",
  timeout: 6000,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

let tour = {
  async getOne(email) {
    let response = await Service.get(`/tour/${email}`);
    let doc = response.data;
    return {
      accepted: doc.accepted,
    };
  },
};

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
      firstname: doc.firstname,
      lastname: doc.lastname,
      languages: doc.languages,
      monuments: doc.monuments,
      starthour: doc.starthour,
      startminute: doc.startminute,
      endhour: doc.endhour,
      endminute: doc.endminute,

      monday: doc.monday, //postavljamo sve ove vrijednosti na false kako ne bi bile pre-selectane
      tuesday: doc.tuesday,
      wednesday: doc.wednesday,
      thursday: doc.thursday,
      friday: doc.friday,
      saturday: doc.saturday,
      sunday: doc.sunday,

      perhour: doc.perhour,
      perLandmark: doc.perLandmark,
      costhour: doc.costhour,
      costlandmark: doc.costlandmark,
      currency: doc.currency,

      fblink: doc.fblink,
      twlink: doc.twlink,
      instalink: doc.instalink,
      Picture: doc.Picture,
    };
  },
};

let GetGuides = {
  async getAll(guide) {
    let response = await Service.get(`/guide/${guide}`);
    let data = response.data;
    data = data.map((doc) => {
      return {
        id: doc._id,
        Picture: doc.Picture,
        firstname: doc.firstname,
        lastname: doc.lastname,
        monuments: doc.monuments,
        languages: doc.languages,
        email: doc.email,
        city: doc.city,

        starthour: doc.starthour,
        startminute: doc.startminute,
        endhour: doc.endhour,
        endminute: doc.endminute,

        monday: doc.monday,
        tuesday: doc.tuesday,
        wednesday: doc.wednesday,
        thursday: doc.thursday,
        friday: doc.friday,
        saturday: doc.saturday,
        sunday: doc.sunday,

        fblink: doc.fblink,
        twlink: doc.twlink,
        instalink: doc.instalink,

        /* image: doc.image,
        ratedpreview: doc.rated / doc.ratedusers,
        ratedusers: doc.ratedusers, */

        costhour: doc.costhour,
        currency: doc.currency,
        costlandmark: doc.costlandmark,
      };
    });
    return data;
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

let Search = {
  async getAll(search_text, guide) {
    let options = {};

    if (search_text) {
      options.params = {
        name2: search_text,
      };
    }
    let response = await Service.get(`/search/${guide}`, options);
    let data = response.data;
    data = data.map((doc) => {
      return {
        city: doc.city,
        firstname: doc.firstname,
        lastname: doc.lastname,
        Picture: doc.Picture,
        languages: doc.languages,
        monuments: doc.monuments,
        costhour: doc.costhour,
        perlandmark: doc.perlandmark,
        costlandmark: doc.costlandmark,

        starthour: doc.starthour,
        startminute: doc.startminute,
        endhour: doc.endhour,
        endminute: doc.endminute,

        monday: doc.monday,
        tuesday: doc.tuesday,
        wednesday: doc.wednesday,
        thursday: doc.thursday,
        friday: doc.friday,
        saturday: doc.saturday,
        sunday: doc.sunday,

        fblink: doc.fblink,
        twlink: doc.twlink,
        instalink: doc.instalink,
      };
    });
    return data;
  },
};

export { Service, Auth, isGuide, GetGuides, Search, tour };
