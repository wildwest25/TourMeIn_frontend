<template>
  <div id="card" class="card text-left">
    <div class="row">
      <div class="col-sm">
        <div id="card_text" style="width:70px;">
          {{ info.firstname }} {{ info.lastname }}
        </div>
        <div class="card-body p-0">
          <img
            class="card-img-top offset-1"
            style="width: 7rem;"
            v-bind:src="info.Picture"
          />
        </div>
      </div>
      <div class="col-sm">
        <div id="card_text_Star">
          <img src=@/assets/A_star.png height=30% width=30% />
          <div v-if="counter >= 3" id="star_text">
            {{ avg.toFixed(2) }}
          </div>
          <div v-else id="star_text" style="font-size:17px;">
            Not enough ratings.
          </div>
        </div>
        <button
          type="button"
          id="btRegister"
          @click="startTouring"
          class="btn btn-primary"
        >
          <div id="btn_txt">
            Start touring with this guide
          </div>
        </button>
      </div>
    </div>
    <div class="row-sm">
      <div id="c_info" class="col-sm">
        <div class="card-body p-0">
          <div id="card_text">City: {{ info.city }}</div>
          <div id="card_text">Languages: {{ info.lang }}</div>
          <div id="card_text">Monuments I tour: {{ info.monuments }}</div>
          <div id="card_text" v-if="info.costhour">
            Prices per hour: {{ info.costhour }} {{ info.currency }}
          </div>
          <div id="card_text" v-if="info.costlandmark">
            Price per monument: {{ info.costlandmark }} {{ info.currency }}
          </div>
        </div>
        <div class="card_text" style="margin-left:15px;">
          Hours Avaiable: {{ info.starthour }}:{{ info.startminute }} -
          {{ info.endhour }}:{{ info.endminute }}
        </div>
        <div class="col-md-auto" v-if="info.monday === true">
          <div class="card-body p-0">
            <img
              class="card-img-top offset-1"
              style="width: 1rem; margin-bottom:15px; margin-left:70px; position:absolute;"
              src="@/assets/success.png"
            />MON
          </div>
        </div>
        <div class="col-md-auto" v-if="info.tuesday === true">
          <div class="card-body p-0">
            <img
              class="card-img-top offset-1"
              style="width: 1rem; margin-bottom:15px; margin-left:70px; position:absolute;"
              src="@/assets/success.png"
            />TUE
          </div>
        </div>
        <div class="col-md-auto" v-if="info.wednesday === true">
          <div class="card-body p-0">
            <img
              class="card-img-top offset-1"
              style="width: 1rem; margin-bottom:15px; margin-left:70px; position:absolute;"
              src="@/assets/success.png"
            />WED
          </div>
        </div>
        <div class="col-md-auto" v-if="info.thursday === true">
          <div class="card-body p-0">
            <img
              class="card-img-top offset-1"
              style="width: 1rem; margin-bottom:15px; margin-left:70px; position:absolute;"
              src="@/assets/success.png"
            />THU
          </div>
        </div>
        <div class="col-md-auto" v-if="info.friday === true">
          <div class="card-body p-0">
            <img
              class="card-img-top offset-1"
              style="width: 1rem; margin-bottom:15px; margin-left:70px; position:absolute;"
              src="@/assets/success.png"
            />FRI
          </div>
        </div>
        <div class="col-md-auto" v-if="info.saturday === true">
          <div class="card-body p-0">
            <img
              class="card-img-top offset-1"
              style="width: 1rem; margin-bottom:15px; margin-left:70px; position:absolute;"
              src="@/assets/success.png"
            />SAT
          </div>
        </div>
        <div class="col-md-auto" v-if="info.sunday === true">
          <div class="card-body p-0">
            <img
              class="card-img-top offset-1"
              style="width: 1rem; margin-bottom:15px; margin-left:70px; position:absolute;"
              src="@/assets/success.png"
            />SUN
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-between">
      <a :href="info.fb" style="margin-left:50px;">
        <img src=@/assets/FB_Logo.png style="width: 3rem;"/>
      </a>
      <a :href="info.tw">
        <img src=@/assets/TW.png style="width: 3rem;"/>
      </a>
      <a :href="info.inst" style="margin-right:50px; margin-top:10px;">
        <img src=@/assets/INST.png style="width: 2rem;"/>
      </a>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { db } from "@/firebase";
import {
  Auth,
  isGuide,
  GetGuides,
  Search,
  tour,
  Service,
  getGuidesInfo,
  getFinishedTours,
} from "../service/index.js";

export default {
  props: ["info"],
  name: "UserCard",
  data() {
    return {
      store,
      isAccepted: {},
      byHour: "",
      byMonument: "",
      byRating: "",
      byPrice: "",
      userFullname: "",
      userimage: "",
      auth: Auth.state,
      UserInfo: {},
      rating: {},
      counter: 0,
      total: 0,
      avg: 0,
    };
  },
  mounted() {
    /*db.collection("user")
      .where("email", "==", store.currentUser)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();

          this.userFullname = data.firstname + " " + data.lastname;
          this.userimage = data.image;
        });
      });*/

    this.getTour();
    this.getUserInfo();
    this.getRating();
  },
  methods: {
    async getRating() {
      this.rating = await getFinishedTours.getAll(this.info.email);
      this.rating.forEach((doc) => {
        //console.log(doc.ratedwith);
        this.total += doc.ratedwith;
        this.counter = this.counter + 1;
      });
      //console.log("total", total);
      // console.log("counter", counter);

      this.avg = this.total / this.counter;
      console.log("avg", this.avg.toFixed(2));
    },

    async getTour() {
      this.isAccepted = await tour.getOne(this.auth.userEmail);
      console.log("Accepted", this.isAccepted.accepted);
    },

    async getUserInfo() {
      this.UserInfo = await isGuide.getOne(this.auth.userEmail);
    },

    startTouring() {
      // console.log(this.isAccepted.accepted);
      if (this.isAccepted.accepted == "pending") {
        store.tourInProgress = true;
        //console.log("Tour in progress", store.tourInProgress);
      }

      setTimeout(async () => {
        const user = this.auth.userEmail;
        const guide = this.info.email;
        const name = this.info.firstname + this.info.lastname;
        console.log("tour in progress: ", store.tourInProgress);
        if (store.tourInProgress == null) {
          let NewTour = {
            id: this.info.id,
            user: user,
            guide: guide,
            name: this.UserInfo.firstname,
            guidename: name,
            accepted: "pending",
            guideimage: this.info.Picture,
            //userimage: this.userimage,
          };

          console.log(NewTour);

          Service.patch(`/tour/${this.auth.userEmail}`, NewTour).then(
            (response) => {
              console.log("spremljeno", response);
              alert("Request has been sent!");
              window.location.reload();
            }
          );
        } else {
          alert("There is already pending tour request!");
        }
      }, 500);
    },
  },
  computed: {},
  components: {},
};
</script>

<style lang="scss">
.card {
  margin-bottom: 20px;
}
</style>
