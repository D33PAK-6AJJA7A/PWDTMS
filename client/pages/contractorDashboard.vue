<template>
  <div class="Dashboard">
    <v-app>
      <v-card
        class="blue-grey darken-3 elevation-5 text-right d-flex justify-end"
        align="right"
        height="50px"
        ><div class="pa-2 mr-4 yellow darken-3 mt-1 mb-1">LogOut</div></v-card
      >
      <v-navigation-drawer
        app
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        class="blue-grey darken-3"
      >
        <v-list-item v-if="mini == false" class="px-2">
          <div
            class="layout align-center justify-center"
            style="min-width: 100px; min-height: 100"
          >
            <v-img
              color=""
              src="https://rasput1n.blob.core.windows.net/internship-portal/website-images/pwd.png"
            ></v-img>
          </div>
          <div></div>
        </v-list-item>

        <v-divider></v-divider>

        <v-list flat class="blue-grey darken-3 pr-1 pl-1">
          <v-list-item v-if="mini == false" @click.stop="mini = !mini">
            <v-list-item-icon>
              <v-icon x-large color="yellow darken-3">mdi-chevron-left</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                class="text--white text-h6 mb-2 font-weight-light"
                >Minimise</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="mini == true">
            <v-list-item-icon>
              <v-icon>mdi-menu</v-icon>
            </v-list-item-icon>

            <v-list-item-content
              class="text--white text-h6 mb-2 font-weight-light"
            >
              <v-list-item-title>Minimise</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-for="item in items12"
            :key="item.title"
            :to="item.to"
            router
            exact
            active-class="yellow darken-3  rounded-lg"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                class="text--white text-h6 mb-2 font-weight-light"
                >{{ item.title }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="grey lighten-2 ml-4">
        <v-row class="mt-0">
          <v-col cols="12" class="text-center"
            ><p class="blue-grey--text text-h2">Welcome to PWD Prayagraj</p>
          </v-col>
          <v-col cols="4"
            ><div class="blue-grey--text text-h4 text-center">Quick Links</div>
            <v-card height="5px" class="ml-2 mr-2 blue-grey"></v-card>

            <ul
              class="blue-grey--text pa-2"
              v-for="item in quicklinks"
              :key="item"
            >
              <v-card
                :href="'http://' + item.link"
                target="_blank"
                class="pa-2 blue-grey"
                dark
                >{{ item.title }}
              </v-card>
            </ul>
          </v-col>

          <v-col cols="8">
            <v-container class="grey lighten-2">
              <div class="blue-grey--text text-h4 text-center">
                Announcements
              </div>
              <v-card class="grey lighten-3 rounded-ls" elevation="0">
                <div>
                  <v-toolbar flat color="grey lighten-2">
                    <v-divider class="mx-2" inset vertical></v-divider>

                    <v-text-field
                      light
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details
                      color="blue-grey"
                    ></v-text-field>
                  </v-toolbar>

                  <v-container class="grey lighten-2">
                    <v-data-table
                      light
                      :headers="headers"
                      :items="announcementcards"
                      :search="search"
                      hide-actions
                      class="grey lighten-2"
                    >
                      <template #item.edit="{ item }" min-width="50%">
                        <v-icon
                          x-large
                          class="mr-2"
                          color="blue-grey"
                          @click="editItem(item)"
                        >
                          mdi-pencil
                        </v-icon>

                        <v-icon
                          x-large
                          color="red"
                          @click="
                            deleteItem(
                              announcementcards[announcementcards.indexOf(item)]
                                ._id,
                              item
                            )
                          "
                        >
                          mdi-delete
                        </v-icon>

                        <btn> </btn>
                      </template>
                    </v-data-table>
                  </v-container>
                </div>
              </v-card>
            </v-container>
          </v-col>
          <v-col cols="12" class="text-center"
            ><p class="blue-grey--text text-h2">Projects</p>
          </v-col>

          <v-col cols="3" v-for="item in desktop" :key="item"
            ><v-card class="mx-auto blue-grey lighten-1" max-width="344">
              <v-img :src="item.img" height="200px"></v-img>

              <v-card-title>
                {{ item.title }}
              </v-card-title>

              <v-card-subtitle>
                {{ item.text }}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get(
        "http://localhost:3000/api/announcementcards"
      );
      return {
        announcementcards: response.announcementcards,
      };
    } catch (err) {
      console.log(err);
    }
  },
  data: () => ({
    drawer: true,
    url: "",
    desktop: [
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        text: "TExt123",
        title: "Topic1",
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        text: "TExt123",
        title: "Topic1",
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        text: "TExt123",
        title: "Topic1",
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        text: "TExt123",
        title: "Topic1",
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        text: "TExt123",
        title: "Topic1",
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        text: "TExt123",
        title: "Topic1",
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        text: "TExt123",
        title: "Topic1",
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        text: "TExt123",
        title: "Topic1",
      },
    ],
    quicklinks: [
      { title: "Title1", link: "www.google.com" },
      { title: "Title2", link: "www.google.com" },
      { title: "Title3", link: "www.google.com" },
    ],
    cards: ["Announcements"],
    items12: [
      { title: "Dashboard", icon: "mdi-home-city", to: "/contractorDashboard" },
      {
        title: "Profile",
        icon: "mdi-account",
        to: "/contractorProfile",
      },
      { title: "All Projects", icon: "mdi-bookshelf", to: "/contractorTender" },
      {
        title: "My Projects",
        icon: "mdi-clipboard",
        to: "/contractorMyTender",
      },
    ],
    mini: false,
  }),
  methods: {
    async verify() {
      try {
        let cookie = this.$cookies.get("jwt");
        if (cookie == null) {
          this.$router.push("/Login");
        }
        let data = {
          cookie: cookie,
        };
        let verify_response = await this.$axios.$post(
          `http://localhost:3000/api/verify/contractor`,
          data
        );
        if (!verify_response.success) {
          this.$cookies.set("jwt", null);
          this.$router.push("/Login");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  beforeMount() {
    // this.verify();
  },
  computed: {},
};
</script>
