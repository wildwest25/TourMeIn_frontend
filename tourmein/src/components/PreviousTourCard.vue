<template>
  <!-- cijela ova komponenta služi za dohvaćanje kartica prethodnih Guideova (koji su nas vodili na turu) u "My_previous_tours-guide.vue"-->
  <div id="PTCard" class="card text-left mx-5 py-0">
    <div class="row">
      <div class="mb-1 card-body okvir">
        <div id="PTName" class="card-body ">Name: {{ info.name }}</div>
        <div class="card-body ">
          <img
            id="PTImg"
            class="card-img-top offset-1"
            style="width: 7rem ;"
            :src="info.userimage"
          />
        </div>
        <div id="PTTime" class="card-body ">
          Tour Date: {{ info.finishedAt }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//JS kod

export default {
  props: ["info"],
  name: "UserCard",
  data: function() {
    return {
      cards: [],
      languages: "",
    };
  },
};
</script>

<style lang="scss">
.card {
  margin-bottom: 20px;
}
</style>
