<template>
  <div class="UserPage">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="d-flex justify-content-center">
            <div class="form-group has-search">
              <span class="form-control-feedback"></span>
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                v-model="store.search_text"
              />
            </div>
            <div class="form-outline" style="width:1000;"></div>
            <!--<button id="Search-butt" type="button" class="btn btn-primary" @click="filteredCards">
							<i class="fas fa-search">Search</i>
						</button>-->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="form-group float-left"></div>
      </div>
      <div class="row">
        <user-card v-for="card in cards" :key="card.id" :info="card" />
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import UserCard from "@/components/SearchGuide.vue";
import store from "@/store";

import { Auth, GetGuides, Search } from "../service/index.js";
import _ from "lodash";

export default {
  name: "user_search",
  props: ["id"],
  data: function() {
    return {
      cards: [],
      store,
      auth: Auth.state,
      byHour: "",
      byMonument: "",
      byRating: "",
      byPrice: "",
      search: {},
      rating: {},
    };
  },

  created() {
    this.fetchEmail();
    this.getGuides();
  },

  mounted() {
    this.getGuides();
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
  },

  watch: {
    "store.search_text": _.debounce(function(val) {
      this.fetchEmail(val);
    }, 500),
  },

  methods: {
    async getGuides(term = "guide") {
      this.cards = await GetGuides.getAll(term);
    },
    async fetchEmail(term, guide = "guide") {
      term = term || store.search_text;
      this.cards = await Search.getAll(term, guide);
    },
  },
  watch: {
    "store.search_text": function() {
      //console.log("Promjenio sam se!", this.store.search_text);

      this.fetchEmail();
    },
  },
  components: {
    UserCard,
  },
};
</script>
<style scoped>
.Picture {
  width: 240px;
  height: 250px;
}
</style>
