<template>
  <!-- cijela ova komponenta služi za dohvaćanje kartica prethodnih Guideova (koji su nas vodili na turu) u "My_previous_tours-guide.vue"-->
  <div id="PGCard" class="card text-left">
    <div class="row">
      <div class="col-md-auto">
        <div id="PGName" class="card-body">
          Guide name: {{ info.guidename }}<br />
          Rated: {{ info.ratedwith }} <br />
          Tour Date: {{ info.finishedAt }}
        </div>

        <div class="card-body p-0">
          <img
            class=""
            style="width: 8rem; margin-top:-100px"
            :src="info.guideimage"
          />
          <div id="PGRated" class="card-body p-0"></div>
        </div>
        <div id="PGTime" class="card-body p-0"></div>
      </div>
      <div class="col-sm"></div>
    </div>
  </div>
</template>

<script>
//JS kod
import { db } from "@/firebase";

export default {
  props: ["info"],
  name: "UserCard",
  data: function() {
    return {
      cards: [],
      monuments: "",
      languages: "",
      fb: "",
      tw: "",
      ins: "",
      data: {},
    };
  },
  mounted() {
    console.log(this.info);
  },

  methods: {},
};
</script>

<style lang="scss">
.card {
  margin-bottom: 20px;
}
</style>
