<template>
  <div class="notifications">
    <h1>Notifications</h1>
    <div class="container">
      <div class="row">
        <div class="col-8 offset-1">
          <!-- //! primjer sa my previous tours, najbolje prilagoditi ka sta je tamo -->
          <previous-guide-card
            v-for="card in filteredCards"
            :key="card.url"
            :info="card"
          />
          <!--izlistava sve notifikacije-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PreviousGuideCard from "@/components/Notificationcard.vue";
import store from "@/store";
import { db } from "@/firebase";
import {
  Auth,
  isGuide,
  GetGuides,
  Search,
  notificationGuide,
  notificationUser,
} from "../service/index.js";

export default {
  name: "message_functions",
  data: function() {
    return {
      notifications: [],
      store,
      guide: {},
      auth: Auth.state,
      data: {},
      datas: {},
    };
  },
  mounted() {
    this.getGuide();
    //* dohvat iz Firebasea ovisno o tipu usera
  },
  methods: {
    async getGuide() {
      this.guide = await isGuide.getOne(this.auth.userEmail);
      console.log("dal je guide il tourist -->", this.guide.isguide);

      if (this.guide.isguide == "guide") {
        this.getNotificationsGuide();
      } else {
        this.getNotificationsUser();
      }
    },

    async getNotificationsGuide() {
      //dohvat notifikacija od strane guidea

      this.data = await notificationGuide.getOne(this.auth.userEmail);
      console.log("GUIDE", this.data);

      this.notifications.push({
        user: this.data.user,
        name: this.data.name,
        guidename: this.data.guidename,
        accepted: this.data.accepted,
        userimage: this.data.userimage,
        guideimage: this.data.guideimage,
      });

      console.log("notification", this.notifications);
    },
    async getNotificationsUser() {
      //dohvat notificationa za usera
      this.datas = await notificationUser.getOne(this.auth.userEmail);
      console.log("USER", this.datas);

      this.notifications.push({
        user: this.datas.user,
        name: this.datas.name,
        guidename: this.datas.guidename,
        guide: this.datas.guide,
        accepted: this.datas.accepted,
        guideimage: this.datas.guideimage,
      });
    },
  },
  computed: {
    filteredCards() {
      return this.notifications; //prikuplja sve notifikacije
    },
  },
  components: {
    PreviousGuideCard, //pozivanje komponente
  },
};
</script>
