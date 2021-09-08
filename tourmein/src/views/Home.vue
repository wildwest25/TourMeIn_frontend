<template>
  <div class="login">
    <img
      src="@/assets/pocetni_screen.png"
      alt="pocetna stranica"
      height="580"
      width="100%"
      loading="lazy"
    />
    <div id="Home_Txt">
      <img id="TMI_Log" src="@/assets/Logo-01.png" alt="logo" />TourMeIn
    </div>
    <h4>Travel and learn</h4>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div
              class="form-group"
              :class="{ error: validation.hasError('email') }"
            >
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <div class="message" style="color">
                {{ validation.firstError("email") }}
              </div>

              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>
            <div
              class="form-group"
              :class="{ error: validation.hasError('password') }"
            >
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                @keyup.enter="login()"
              />
              <div class="message" style="color">
                {{ validation.firstError("password") }}
              </div>
            </div>

            <div v-if="showError" style="color:red;font-size:20px;">
              Email or password are incorrect
            </div>
            <br />
            <button type="button" @click="login()" class="btn btn-primary">
              Log In
            </button>
            <button id="Mobile" type="button" class="btn btn-primary">
              Mobile Page (Inactive)
            </button>
          </form>
          <br />
          <form method="get" action="/register">
            <button type="submit" class="btn btn-primary">Register</button>
          </form>
          <a href="#" @click="forgotpassword()">Forgot Password?</a>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { firebase } from "@/firebase";
import SimpleVueValidation from "simple-vue-validator";
import { Auth, isGuide } from "../service/index.js";
const Validator = SimpleVueValidation.Validator;

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      showError: false,
      GUIDE: {},
    };
  },
  validators: {
    email: function(value) {
      return Validator.value(value)
        .required()
        .email();
    },
    password: function(value) {
      return Validator.value(value).required();
    },
  },

  methods: {
    async callBackendGuide() {
      this.GUIDE = await isGuide.getOne(this.email);
      // console.log(this.isguide.isguide);
    },

    login() {
      this.callBackendGuide();
      this.$validate().then(async (success) => {
        if (success) {
          try {
            let uspjeh = await Auth.login(this.email, this.password);
            console.log("Rezultat prijave", uspjeh);
            console.log(this.GUIDE.isguide);
            if (uspjeh) {
              if (this.GUIDE.isguide == "tourist") {
                this.$router.push({ path: "/UserPage" });
              } else this.$router.push({ path: "/Guide_profile" });
            } else console.log("najebo si ga");
          } catch (e) {
            console.log(e);
            this.showError = true;
          }
        } else {
          console.error("Nisu sva polja unesena za login, error");
        }
      });
    },

    forgotpassword() {
      var auth = firebase.auth();
      var emailAddress = this.email;
      auth
        .sendPasswordResetEmail(emailAddress)
        .then(function() {
          alert("Password reset email has been sent, check your inbox");
        })
        .catch(function(error) {
          // An error happened.
        });
    },
  },
};
</script>
