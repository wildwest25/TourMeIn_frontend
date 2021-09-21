<template>
  <div id="notcard" class="card text-left">
    <div class="row" v-if="info.accepted === 'pending'">
      <div class="col-md-auto" v-if="info.accepted === 'pending'">
        <div class="card-body p-0">
          <img
            class="card-img-top offset-1"
            style="width: 1.5rem; margin-bottom:15px; margin-left:70px; position:absolute;"
            src="@/assets/warning.png"
          />
        </div>
      </div>
      <div
        class="col-md"
        v-if="info.accepted === 'pending' && data.isguide == 'guide'"
      >
        <div class="card-body p-0">{{ info.name }} wants you up as a guide</div>
        <button
          type="buttonsuccess"
          id="successbutton"
          @click="accept"
          class="btn btn-primary"
        >
          <img
            class="card-img-top offset-1"
            style="width: 1.2rem; margin-right: 4px;"
            src="@/assets/success.png"
          />
        </button>
        <button
          type="buttoncancel"
          id="cancelbutton"
          @click="deny"
          class="btn btn-primary"
        >
          <img
            class="card-img-top offset-1"
            style="width: 1.2rem margin-right: 4px;"
            src="@/assets/alert close.png"
          />
        </button>
      </div>
      <div class="col-md-auto" v-if="info.accepted === 'accepted'">
        <div class="card-body p-0">
          <img
            class="card-img-top offset-1"
            style="width: 1.5rem; margin-bottom:15px; margin-left:70px; position:absolute;"
            src="@/assets/success.png"
          />
        </div>
      </div>
      <div class="col-md" v-if="info.accepted === 'accepted'">
        <div class="card-body p-0">
          You have accepted {{ info.name }}'s request, you can now exchange
          messages with him
        </div>
      </div>
      <div class="col-md-auto" v-if="info.accepted === 'rejected'">
        <div class="card-body p-0">
          <img
            class="card-img-top offset-1"
            style="width: 1.5rem; margin-bottom:15px; margin-left:70px; position:absolute;"
            src="@/assets/error.png"
          />
        </div>
      </div>
      <div class="col-md" v-if="info.accepted === 'rejected'">
        <div class="card-body p-0">
          You have rejected {{ info.name }}'s request
        </div>
      </div>
    </div>
    <div class="row" v-if="info.accepted === 'accepted'">
      <div class="col-md-auto" v-if="info.accepted === 'accepted'">
        <div class="card-body p-0">
          <img
            class="card-img-top offset-1"
            style="width: 1.5rem; margin-bottom:15px; margin-left:70px; position:absolute;"
            src="@/assets/info.png"
          />
        </div>
      </div>
      <div
        class="col-md"
        v-if="info.accepted === 'accepted' && data.isguide == 'guide'"
      >
        <div class="card-body p-0">
          After finishing your tour with {{ info.name }}, please click this
          button to confirm that tour has ended
        </div>
        <button
          type="button"
          id="button"
          @click="ended"
          class="btn btn-primary"
        >
          Confirm
        </button>
      </div>
    </div>
    <!-- odvojeno ovisno dali je guide/user -->
    <div
      class="row"
      v-if="data.isguide == 'tourist' || data.isguide == 'guide	'"
    >
      <div v-if="info.accepted === 'pending' && data.isguide == 'tourist'">
        <div class="col-md-auto">
          <div class="card-body p-0">
            <img
              class="card-img-top offset-1"
              style="width: 2rem; margin-top:40px; position:absolute;"
              src="@/assets/warning.png"
            />
          </div>
        </div>
        <div class="col-md">
          <div class="card-body p-0">
            <div style="margin-top:25px; display:inline-block;">
              You asked guide {{ info.guidename }} to take you on a tour.
              Waiting for an answer.
            </div>
            <button
              type="button"
              id="cancel"
              @click="cancel"
              class="btn btn-primary"
            >
              <div id="btn">Cancel this tour</div>
            </button>
          </div>
        </div>
      </div>
      <div v-if="info.accepted === 'accepted'">
        <div class="col-md-auto">
          <div class="card-body p-0">
            <img
              class="card-img-top offset-1"
              style="width: 1.5rem; margin-top:10px; position:absolute;"
              src="@/assets/success.png"
            />
          </div>
        </div>
        <div class="col-md">
          <div class="card-body p-0">
            Guide {{ info.guidename }} accepted your request. You can now ask
            each other a message from the top of the further agreement.
          </div>
        </div>
      </div>
      <div v-if="info.accepted === 'rejected'">
        <div class="col-md-auto">
          <div class="card-body p-0">
            <img
              class="card-img-top offset-1"
              style="width: 1.5rem; position:absolute;"
              src="@/assets/error.png"
            />
          </div>
        </div>
        <div class="col-md">
          <div class="card-body p-0">
            Guide {{ info.guidename }} turned you down
          </div>
          <button
            type="button"
            id="button"
            @click="cancel"
            class="btn btn-primary"
          >
            <div id="btn">Ok</div>
          </button>
        </div>
      </div>
      <div v-if="info.accepted === 'finished'">
        <div class="col-md">
          <div class="card-body p-0">
            <img
              class="card-img-top"
              id="bigwarning"
              style="width: 3.5rem; position:absolute;"
              src="@/assets/WarningRed.png"
            />
          </div>
          <div class="card-body p-0">
            Please rate {{ info.guidename }} before asking for a new guide.
          </div>
          <star-rating v-model="rating"></star-rating>
          <div>Current rating: {{ rating }}</div>
          <button
            type="button"
            id="button"
            @click="rate"
            class="btn btn-primary"
          >
            <div id="btn">Submit rating</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { StarRating } from "vue-rate-it";
import { isGuide, Auth, Service } from "../service/index.js";

export default {
  components: {
    StarRating,
  },
  props: ["info"],
  name: "Notifications",
  data: function() {
    return {
      store,
      userFullname: "",
      rating: 3,
      data: {},
      auth: Auth.state,
      guide: {},
      user: {},
    };
  },
  mounted() {
    console.log("user ", this.info);
    this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      this.data = await isGuide.getOne(this.auth.userEmail);
      console.log("notification card data", this.data);
    },

    async cancel() {
      let NewTour = {
        guide: "",
        name: "",
        guidename: "",
        accepted: "waiting",
        guideimage: "",
        //userimage: this.userimage,
      };

      console.log(NewTour);

      Service.patch(`/tour/${this.auth.userEmail}`, NewTour).then(
        (response) => {
          console.log("Canceled", response);
          alert("Request has been canceled!");
          window.location.reload();
        }
      );
    },

    accept() {
      let NewTour = {
        accepted: "accepted",
        createdAt: new Date().toLocaleString(),
        //userimage: this.userimage,
      };

      console.log(NewTour);

      Service.patch(`/tours/${this.data.id}`, NewTour).then((response) => {
        console.log("Accepted", response);
        alert("Request has been accepted!");
        window.location.reload();
      });
    },
    deny() {
      console.log(this.data.id);
      let NewTour = {
        id: this.data.id,
        guide: "",
        name: "",
        guidename: "",
        accepted: "rejected",
        guideimage: "",
        //userimage: this.userimage,
      };

      console.log(NewTour);

      Service.patch(`/tours/${this.data.id}`, NewTour).then((response) => {
        console.log("Canceled", response);
        alert("User has been denied");
        window.location.reload();
      });
    },
    ended() {
      let NewTour = {
        accepted: "finished",
        finishedAt: new Date(),
      };

      console.log(NewTour);

      Service.patch(`/tours/${this.data.id}`, NewTour).then((response) => {
        console.log("Accepted", response);
        alert(`Tour has been finished with ${this.info.name}!`);
        window.location.reload();
      });
    },
    rate() {
      let NewTour = {
        accepted: "rated",
        rated: true,
        ratedwith: this.rating,
      };

      console.log(NewTour);

      Service.patch(`/tour/${this.auth.userEmail}`, NewTour).then(
        (response) => {
          console.log("Rated", response.data);
          alert(
            `Tour has ended with ${this.info.guidename}, you rated guide with ${this.rating}`
          );
          let prebaci = {
            user: this.auth.userEmail,
            guide: response.data.guide,
            name: response.data.name,
            accepted: response.data.accepted,
            userimage: response.data.userimage,
            createdAt: response.data.createdAt,
            rated: response.data.rated,
            guidename: response.data.guidename,
            guideimage: response.data.guideimage,
            finishedAt: response.data.finishedAt,
            ratedwith: response.data.ratedwith,
          }; //prebacuje u kolekciju finishedTours

          Service.post(`/finishtour/${this.auth.userEmail}`, prebaci).then(
            (res) => {
              console.log(res);

              let VratiNaStaro = {
                id: null,
                user: this.auth.userEmail,
                guide: "",
                name: "",
                accepted: "waiting",
                userimage: "",
                createdAt: null,
                rated: null,
                guidename: "",
                guideimage: "",
                finishedAt: null,
                ratedwith: "",
              }; //vraca na pocetne vrijednosti u tours kolekciji kako bi se mogao zatraziti novi guide

              Service.patch(`/tour/${this.auth.userEmail}`, VratiNaStaro).then(
                (resp) => {
                  console.log(resp);
                }
              );
            }
          );
          setTimeout(function() {
            location.reload();
          }, 3000);
        }
      );
    },
  },
};
</script>

<style lang="scss">
.card {
  margin-bottom: 20px;
}
</style>
