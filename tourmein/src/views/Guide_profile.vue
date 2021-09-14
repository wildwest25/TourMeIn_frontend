<template>
  <div class="guide_profile">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="form-group">
            <img class="Picture mb-3" :src="Picture" />
            <label for="nameSurname">{{ firstname }} {{ lastname }}</label
            ><br />
            <!-- <label-- for="DOB">{{ dob }}</label-->
            ><br />
            <label for="rating">
              <img src=@/assets/A_star.png height=15% width=15% />{{
                ratedpreview
              }}</label
            >
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
          <form>
            <!-- formular za popunjavanje podataka na profilnoj stranici vodiča -->
            <div class="form-group">
              <label for="InputEmail">Email address</label>
              <input
                type="email"
                class="form-control"
                id="InputEmail"
                aria-describedby="emailHelp"
                value=""
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
              <!-- v-model koristimo kako bi olakšali pozivanje, slanje i prikazivanje podataka s Firebasea-->
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
              <label for="exampleMonuments">Monuments I Tour</label>
              <input
                type="monuments"
                class="form-control"
                id="exampleMonuments"
                placeholder="Amphiteater, Triumphal Arch.."
                v-model="newMonuments"
              />
            </div>
            <form
              name="someForm"
              method="post"
              action="/someAction.do"
              class="form-inline"
            >
              <div class="input-group">
                <div class="form-group">
                  <label for="startDate"> Hours Avaiable: </label>
                  <div>
                    <input
                      type="number"
                      name="startHour"
                      id="startHour"
                      style="width: 60px"
                      class="form-control"
                      placeholder="00"
                      step="1"
                      maxlength="2"
                      min="0"
                      max="24"
                      v-model="newStartHour"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endDate"> : </label>
                  <div>
                    <input
                      type="number"
                      name="startMinute"
                      id="startMinute"
                      style="width: 60px"
                      class="form-control"
                      placeholder="00"
                      step="1"
                      maxlength="2"
                      min="0"
                      max="60"
                      v-model="newStartMinute"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endHour"> - </label>
                  <div>
                    <input
                      type="number"
                      name="endHour"
                      id="endHour"
                      style="width: 60px"
                      class="form-control"
                      placeholder="00"
                      step="1"
                      maxlength="2"
                      min="0"
                      max="24"
                      v-model="newEndHour"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endHour"> : </label>
                  <div>
                    <input
                      type="number"
                      name="endMinute"
                      id="endMinute"
                      style="width: 60px"
                      class="form-control"
                      placeholder="00"
                      step="1"
                      maxlength="2"
                      min="0"
                      max="60"
                      v-model="newEndMinute"
                    />
                  </div>
                </div>
              </div>
            </form>
            <form
              name="someForm"
              method="post"
              action="/someAction.do"
              class="form-inline"
            >
              <!-- napravljen novi form radi inline funkcionalnosti i istog tipa podataka-->
              <div class="input-group">
                <div class="form-group">
                  <label for="startDate"> Days Avaiable: </label>
                  <div>
                    <input
                      type="checkbox"
                      name="mon"
                      id="monday"
                      style="width: 20px"
                      class="form-control"
                      v-model="newMonday"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endDate"> Mon </label>
                  <div>
                    <input
                      type="checkbox"
                      name="tue"
                      id="tuesday"
                      style="width: 20px"
                      class="form-control"
                      v-model="newTuesday"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endHour"> Tue</label>
                  <div>
                    <input
                      type="checkbox"
                      name="wed"
                      id="wednesday"
                      style="width: 20px"
                      class="form-control"
                      v-model="newWednesday"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endHour"> Wed </label>
                  <div>
                    <input
                      type="checkbox"
                      name="thu"
                      id="thursday"
                      style="width: 20px"
                      class="form-control"
                      v-model="newThursday"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endHour"> Thu </label>
                  <div>
                    <input
                      type="checkbox"
                      name="fri"
                      id="friday"
                      style="width: 20px"
                      class="form-control"
                      v-model="newFriday"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endHour"> Fri </label>
                  <div>
                    <input
                      type="checkbox"
                      name="sat"
                      id="saturday"
                      style="width: 20px"
                      class="form-control"
                      v-model="newSaturday"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endHour"> Sat </label>
                  <div>
                    <input
                      type="checkbox"
                      name="sun"
                      id="sunday"
                      style="width: 20px"
                      class="form-control"
                      v-model="newSunday"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="endHour"> Sun </label>
                </div>
              </div>
            </form>
            <form
              name="someForm"
              method="post"
              action="/someAction.do"
              class="form-inline"
            >
              <!-- napravljen novi form radi inline funkcionalnosti i istog tipa podataka-->
              <div class="input-group">
                <div class="form-group">
                  <label for="pricing"> Pricing: </label>
                  <div>
                    <input
                      type="checkbox"
                      name="perHour"
                      id="perHour"
                      style="width: 20px"
                      class="form-control"
                      v-model="newperHour"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="perHour"> Per Hour </label>
                  <div>
                    <input
                      type="checkbox"
                      name="perLandmark"
                      id="perLandmark"
                      style="width: 20px"
                      class="form-control"
                      v-model="newperLandmark"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="perLandmark"> Per Landmark </label>
                </div>
              </div>
            </form>
            <!--<button type="submit" class="btn btn-primary">Register</button> save? -->
          </form>
          <form
            name="someForm"
            method="post"
            action="/someAction.do"
            class="form-inline"
          >
            <!-- napravljen novi form radi inline funkcionalnosti i istog tipa podataka-->
            <div class="input-group">
              <div class="form-group">
                <label for="costPerHour"> Cost Per Hour: </label>
                <div>
                  <input
                    type="number"
                    name="costPerHour"
                    id="costPerHour"
                    style="width: 55px"
                    class="form-control"
                    placeholder="---"
                    maxlength="3"
                    min="0"
                    v-model="newcostPerHour"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="costPerLandmark"> Cost Per Landmark: </label>
                <div>
                  <input
                    type="number"
                    name="costPerLandmark"
                    id="costPerLandmark"
                    style="width: 55px"
                    class="form-control"
                    placeholder="---"
                    maxlength="3"
                    min="0"
                    v-model="newcostPerLandmark"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="form-group">
                  <select
                    class="form-control"
                    id="currency"
                    v-model="newCurrency"
                  >
                    <option selected>€</option>
                    <option>£</option>
                    <option>$</option>
                    <option>¥</option>
                    <option>HRK</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">About Me</label>
            <!-- polje za unos detaljnijeg opisa (podataka o sebi) registriranog guidea-->
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
              @click.prevent="saveNewInfo"
              class="btn btn-primary"
            >
              Save
            </button>
            <!-- button za saveanje unesenih podataka na stranici profila-->
          </div>
        </div>
        <div class="col-sm"></div>
      </div>
      <form
        name="someForm"
        method="post"
        action="/someAction.do"
        class="form-inline"
      >
        <!-- od ove linije koda do linije 395. su polja za unos linkova FB, Twitter i Instagram profila vodiča -->
        <div class="input-group">
          <div style="width: 370px;" class="form-group">
            <div>
              <a :href="newFBlink">
                <img src=@/assets/FB_Logo.png height=100% width=12%/>
              </a>
              <input
                type="text"
                name="fb"
                id="facebookLink"
                style="width: 300px"
                class="form-control"
                placeholder="Facebook Link"
                v-model="newFBlink"
              />
            </div>
          </div>
          <div style="width: 370px;" class="form-group">
            <label></label>
            <div>
              <a :href="newTwitterlink">
                <img src=@/assets/TW.png height=100% width=12% />
              </a>
              <input
                type="text"
                name="tw"
                id="twitterLink"
                style="width: 300px"
                class="form-control"
                placeholder="Twitter Link"
                v-model="newTwitterlink"
              />
            </div>
          </div>
          <div style="width: 370px;" class="form-group">
            <label></label>
            <div>
              <a :href="newInstalink">
                <img src=@/assets/INST.png height=60% width=10% />
              </a>
              <input
                type="text"
                name="insta"
                id="instagramLink"
                style="width: 300px"
                class="form-control"
                placeholder="Instagram Link"
                v-model="newInstalink"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { db, storage } from "@/firebase"; // osim db ovdje importamo i storage jer su u njemu spremljene slike profila
import { Auth, isGuide, Service } from "../service/index.js";

export default {
  name: "Guide_functions",
  data: function() {
    //postavljanje praznih vrijednosti za unos podataka na stranici
    return {
      auth: Auth.state,

      store,
      image: null,
      imageReference: null,
      imageisHere: "",
      firstname: "",
      lastname: "",
      newPhoneNumber: "",
      id: "",
      registered: "",
      newLanguages: "",
      newMonuments: "",
      newStartHour: "",
      newStartMinute: "",
      newEndHour: "",
      newEndMinute: "",

      newMonday: "", //postavljamo sve ove vrijednosti na false kako ne bi bile pre-selectane
      newTuesday: "",
      newWednesday: "",
      newThursday: "",
      newFriday: "",
      newSaturday: "",
      newSunday: "",

      newperHour: "",
      newperLandmark: "",
      newcostPerHour: "",
      newcostPerLandmark: "",
      newCurrency: "",
      newaboutMe: "",

      newFBlink: "",
      newTwitterlink: "",
      newInstalink: "",
      ratedpreview: 0,
      Picture: "",
    };
  },
  mounted() {
    this.getUserInfo();

    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
  },
  methods: {
    //za dohvaćanje podataka sa Firebasea
    async getUserInfo() {
      console.log("Dohvat podataka s MongoDB-a...");
      this.UserInfo = await isGuide.getOne(this.auth.userEmail);
      this.firstname = this.UserInfo.firstname;
      this.lastname = this.UserInfo.lastname;
      //this.registered = new Date(this.UserInfo.registered_at).toLocaleDateString();

      this.newPhoneNumber = this.UserInfo.phone;
      this.newLanguages = this.UserInfo.languages;
      this.newMonuments = this.UserInfo.monuments;
      this.newStartHour = this.UserInfo.starthour;
      this.newStartMinute = this.UserInfo.startminute;
      this.newEndHour = this.UserInfo.endhour;
      this.newEndMinute = this.UserInfo.endminute;

      this.newMonday = this.UserInfo.monday;
      this.newTuesday = this.UserInfo.tuesday;
      this.newWednesday = this.UserInfo.wednesday;
      this.newThursday = this.UserInfo.thursday;
      this.newFriday = this.UserInfo.friday;
      this.newSaturday = this.UserInfo.saturday;
      this.newSunday = this.UserInfo.sunday;

      this.newperHour = this.UserInfo.perhour;
      this.newperLandmark = this.UserInfo.perlandmark;
      this.newcostPerHour = this.UserInfo.costhour;
      this.newcostPerLandmark = this.UserInfo.costlandmark;

      this.newCurrency = this.UserInfo.currency;
      this.newaboutMe = this.UserInfo.aboutme;
      this.dob = this.UserInfo.dob;

      this.newFBlink = this.UserInfo.fblink;
      this.newTwitterlink = this.UserInfo.twlink;
      this.newInstalink = this.UserInfo.instalink;
      this.Picture = this.UserInfo.Picture;

      //const calc = data.rated / data.ratedusers;
      //this.ratedpreview = calc.toFixed(2); // /ove dvije linije su za prikaz ocjene, trneutno ne rade)
    },

    saveNewInfo() {
      let newData = {
        phone: this.newPhoneNumber,
        languages: this.newLanguages,
        monuments: this.newMonuments,
        starthour: this.newStartHour,
        startminute: this.newStartMinute,
        endhour: this.newEndHour,
        endminute: this.newEndMinute,

        monday: this.newMonday,
        tuesday: this.newTuesday,
        wednesday: this.newWednesday,
        thursday: this.newThursday,
        friday: this.newFriday,
        saturday: this.newSaturday,
        sunday: this.newSunday,

        perhour: this.newperHour,
        perlandmark: this.newperLandmark,
        costhour: this.newcostPerHour,
        costlandmark: this.newcostPerLandmark,
        currency: this.newCurrency,
        aboutme: this.newaboutMe,

        fblink: this.newFBlink,
        twlink: this.newTwitterlink,
        instalink: this.newInstalink,
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

    addImage() {
      this.imageReference.generateBlob((blobData) => {
        //spremanje slike u prikladni "blob" format
        let imageName = "profile_image/" + store.currentUser + ".png";
        //let imageName = store.currentUser + '_' + Date.now() + '.png';
        console.log(imageName);

        storage
          .ref(imageName)
          .put(blobData) //funkcija koja se koristi za storage spremanje slike u blob-u
          .then((result) => {
            // ... uspjesna linija
            console.log(result);
            result.ref
              .getDownloadURL()
              .then((url) => {
                console.log(url);

                db.collection("user")
                  .doc(this.id)
                  .update({
                    image: url,
                  })
                  .then(() => {
                    console.log("spremljena slika, doc"); //potvrda da je slika spremljena
                    alert("Image uploaded!");
                  })
                  .catch((e) => {
                    console.error(e);
                  });
              })
              .catch((e) => {
                console.error(e);
              });
          })
          .catch((e) => {
            console.error(e);
          });
      });
    },
    removeImage() {
      this.imageReference.remove();

      db.collection("user")
        .doc(this.id)
        .update({
          image: null,
        })
        .then(() => {
          console.log("slika izbrisana, doc"); //Potvrda da je slika izbrisana
        });
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
