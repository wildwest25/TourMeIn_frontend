<template>
  <div id="app">
    <div v-if="GUIDE.isguide === 'guide'">
      <!-- Meni vidljivi samo Guide-u -->
      <div id="nav" class="navbar navbar-expand-md navbar-light">
        <img
          src="@/assets/Logo-01.png"
          height="60"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
        <h1>TourMeIn</h1>
        <!--<router-link to="/">Home</router-link> | -->
        <router-link to="/guide_profile" class="offset-1"
          >My Profile</router-link
        >
        |
        <router-link to="/my_previous_tours_guide"
          >My Previous Tours</router-link
        >
        |
        <router-link to="/notifications">Notifications</router-link>
        <!-- <div v-if="store.counter" id="MSGCount">{{ store.counter }}</div>-->
        |

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <button
              type="button"
              href="#"
              @click="logout()"
              class="btn btn-primary"
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="GUIDE.isguide === 'tourist'">
      <!-- Meni vidljivi samo User-u -->
      <div id="nav" class="navbar navbar-expand-md navbar-light">
        <img
          src="@/assets/Logo-01.png"
          height="60"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
        <h1>TourMeIn</h1>
        <router-link to="/user_profile" class="offset-1"
          >My Profile</router-link
        >
        | <router-link to="/UserPage">Search Guides</router-link> |
        <router-link to="/my_guides">My Guides</router-link> |
        <router-link to="/notifications">Notifications</router-link>
        <!--<div v-if="store.counter" id="MSGCount">{{ store.counter }}</div>-->
        |

        <router-link to="/events">Map and Events</router-link>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <button
              type="button"
              href="#"
              @click.prevent="logout()"
              class="btn btn-primary"
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
import store from "@/store";
import { Auth, isGuide } from "../src/service/index.js";

export default {
  name: "app",
  data() {
    return {
      store,
      GUIDE: {},
      auth: Auth.state,
    };
  },

  mounted() {
    this.callBackendGuide();
    console.log("Ovo bi se trebalo ucitat kad stisnem login ali...");
  },

  methods: {
    async callBackendGuide() {
      this.GUIDE = await isGuide.getOne(this.auth.userEmail);

      console.log(this.GUIDE.isguide);
    },

    logout() {
      Auth.logout();
      this.$router.go();
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      height: 10%;
      width: 8%;
      background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #fd7a00 100%);
      border-radius: 100px;
    }
  }
}
</style>
