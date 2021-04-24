
<template>
  <div class="index">
    <div id="app" class="index back">
      <v-app app id="inspire">
        <v-app-bar height="100px" app color="semi-transparent">
          <div class="ml-2 mt-4">
            <vuetify-logo />
          </div> 
          <v-toolbar-title
            class="text-h4 white--text text-lighten-1 font-weight-light"
            >PWD PORTAL</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-btn class="white black--text ml-2" elevation="0" href="/">
            Home
          </v-btn>
          <v-btn class="transparent ml-2" elevation="0" href="/Register">
            Sign Up
          </v-btn>
          <v-btn class="transparent ml-2" elevation="0" href="/Login">
            Login
          </v-btn>
        </v-app-bar>
        <v-content>
          <v-container grid-list-lg>
            <v-layout row wrap>
              <v-flex xs12 md6>
                <v-card class="mx-auto semi-transparent" min-height="100" flat>
                  <v-card-text
                    class="text-h1 white--text text-lighten-1 font-weight-black pa-5 mt-10"
                  >
                    PWD PORTAL<br />
                    <v-card-text
                      class="text-h2 success--text font-weight-light pa-5"
                    >
                      tender management portal
                    </v-card-text>
                  </v-card-text>
                </v-card>
                <v-card class="mx-auto transparent" dark min-height="50" flat>
                </v-card>
              </v-flex>
              <v-flex xs12 md6>
                <v-card class="mx-auto transparent ml-15" min-height="100" flat>
                  <img
                    height="770px"
                    src="https://www.clipartmax.com/png/full/28-289335_construction-worker-clipart.png"
                  />
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-content>
      </v-app>
    </div>
  </div>
</template>


<style scoped>
body {
  overflow: hidden;
  height: 100vh;
}
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
.index {
  background: black;
  background-size: cover;
}
#container {
  width: 300px;
  background-color: red;
  display: flex;
  justify-content: center;
}

#child {
  background-color: blue-grey;
  width: 250px;
  height: 150px;
  position: relative;
  top: 75px;
}
.back {
  background-image: url("https://rasput1n.blob.core.windows.net/internship-portal/website-images/admin.jpg");
  background-position-y: center;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
}
.brand {
  position: fixed;
}

#inspire {
  background: none !important;
}

.semi-transparent {
  opacity: 0.75;
}
.semi-transparent-white {
  background-color: #eeeeee;
  opacity: 0.85;
  color: black;
}
</style>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo,
  },

  data: () => ({
    dialog: true,

    clipped: false,
    drawer: true,
    fixed: false,

    itemsss: [
      {
        icon: "mdi-apps",
        title: "Placement Portal",
        to: "https://placement.iiita.ac.in/",
      },
      {
        icon: "mdi-apps",
        title: "IIIT A",
        to: "https://www.iiita.ac.in/",
      },
      {
        icon: "mdi-chart-bubble",
        title: "Past Data",
        to: "https://placement.iiita.ac.in/statistics.php",
      },

      {
        icon: "mdi-chart-bubble",
        title: "Login",
        to: "/Login",
      },
    ],
    title: "IIIT INTERNSHIP PORTAL",
  }),
  methods: {},
};
</script>
