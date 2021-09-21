<template>
  <div class="user_profile">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="form-group">
            <img class="Picture mb-3" :src="Picture" />
            <label for="nameSurname">{{ firstname }} {{ lastname }}</label
            ><br />
            <label for="DOB">{{ dob }}</label
            ><br />
          </div>
        </div>
        <div class="col-fluid">
          <div class="form-group ">
            <label for="Picture">Post your picture URL</label>
            <input
              type="picture"
              class="form-control"
              id="Picture"
              v-model="Picture"
            />
          </div>
          <div class="form-group">
            <label for="InputEmail">Email address</label>
            <input
              type="email"
              class="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
              v-model="auth.userEmail"
            />
          </div>
          <div class="form-group">
            <label for="exampleContact">Contact Number</label>
            <input
              type="contact"
              class="form-control"
              id="exampleContact"
              placeholder="+385 00000-0000"
              v-model="newPhoneNumber"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputLanguages">Languages</label>
            <input
              type="languages"
              class="form-control"
              id="exampleInputLanguages"
              placeholder="Croatian, English.."
              v-model="newLanguages"
            />
          </div>
          <div class="form-group">
            <label for="exampleMonuments">Places I visited</label>
            <input
              type="monuments"
              class="form-control"
              id="exampleMonuments"
              placeholder="Amphiteater, Triumphal Arch.."
              v-model="iVisited"
            />
          </div>
          <div class="form-group">
            <label for="exampleMonuments">Places I'd like to visit'</label>
            <input
              type="monuments"
              class="form-control"
              id="exampleMonuments"
              placeholder="Amphiteater, Triumphal Arch.."
              v-model="wouldVisit"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">About Me</label>
            <textarea
              class="form-control"
              id="aboutMe"
              rows="10"
              v-model="newaboutMe"
            ></textarea>
          </div>
          <div class="form-group">
            <button
              type="button"
              id="btRegister"
              @click="saveNewInfo"
              class="btn btn-primary"
            >
              Save
            </button>
          </div>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import store from "@/store";
import { Auth, isGuide, Service } from "../service/index.js";

export default {
  name: "Guide_functions",
  data: function() {
    return {
      auth: Auth.state,
      store,
      UserInfo: {},
      image: null,
      imageReference: null,
      imageisHere: "",
      firstname: "",
      lastname: "",
      newPhoneNumber: "",
      id: "",
      registered: "",
      newLanguages: "",
      Picture: "",
      dob: "",
      iVisited: "",
      wouldVisit: "",
      newaboutMe: "",
    };
  },
  mounted() {
    //* dohvat iz Firebasea
    this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      this.UserInfo = await isGuide.getOne(this.auth.userEmail);
      this.firstname = this.UserInfo.firstname;
      this.lastname = this.UserInfo.lastname;
      this.newPhoneNumber = this.UserInfo.phone;
      this.newLanguages = this.UserInfo.languages;
      this.iVisited = this.UserInfo.ivisited;
      this.wouldVisit = this.UserInfo.wouldvisit;
      this.newaboutMe = this.UserInfo.aboutme;
      this.Picture = this.UserInfo.Picture;
    },

    saveNewInfo() {
      let newData = {
        phone: this.newPhoneNumber,
        languages: this.newLanguages,
        ivisited: this.iVisited,
        wouldvisit: this.wouldVisit,
        aboutme: this.newaboutMe,
        Picture: this.Picture,
      };
      console.log("NEWDATA", newData);

      Service.patch(`/users/${this.auth.userEmail}`, newData).then(
        (response) => {
          console.log(response);
          this.$router.go();
        }
      );
    },
  },
};
</script>
<style scoped>
.Picture {
  width: 240px;
  height: 250px;
}
</style>
