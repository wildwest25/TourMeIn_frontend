<template>
  <div class="row">
    <div class="col-8">
      <div class="float-left offset-1">
        <h1>My Previous Tours</h1>
      </div>
    </div>
    <div class="col-8 offset-1">
      <user-card v-for="card in cards" :key="card.url" :info="card" />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import UserCard from "@/components/PreviousTourCard.vue";
import store from "@/store";

import { Auth, getRatedGuide } from "../service/index.js";

export default {
  name: "My_Guides",
  props: ["id"],
  data: function() {
    return {
      cards: {},
      store,
      auth: Auth.state,
    };
  },
  mounted() {
    this.getPrevTours();
  },
  methods: {
    async getPrevTours() {
      this.cards = await getRatedGuide.getAll(this.auth.userEmail);
      console.log("previustourcard", this.cards);
    },
  },
  computed: {},
  components: {
    UserCard,
  },
};
</script>
