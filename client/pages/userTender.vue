<template>
  <div class="Internships">
    <v-app>
      <v-card
        class="blue-grey darken-3 elevation-5 text-right d-flex justify-end"
        align="right"
        height="50px"
        ><div class="pa-2 mr-4 yellow darken-3 mt-1 mb-1">LogOut</div></v-card
      >
      <v-navigation-drawer
        v-model="drawer"
        app
        dark
        width="15%"
        permanent
        class="blue-grey darken-3"
      >
        <v-flex justify-center>
          <v-list-item>
            <div
              class="layout align-center justify-center"
              style="max-width: 100px; max-height: 100"
            >
              <v-img
                class="rounded-circle ml-14 mt-5 pa-4"
                src="https://recruitment.iiita.ac.in/faculty_recruitment/IIIT_logo_transparent.gif"
              ></v-img>
            </div>
          </v-list-item>

          <v-list-item> </v-list-item>

          <v-divider></v-divider>
          <v-list nav dense>
            <v-list-item-group
              class="text--white text-h6 mb-2 font-weight-light"
              color="white"
              ><v-card
                class="blue-grey darken-3 pa-2 elevation-0"
                href="/userDashboard"
              >
                <v-icon large class="mr-5">mdi-apps</v-icon>
                Dashboard</v-card
              >
            </v-list-item-group>

            <v-list-item-group
              class="text--white text-h6 mb-2 font-weight-light"
              color="white"
              ><v-card
                class="blue-grey darken-3 pa-2 elevation-0"
                href="/userProfile"
              >
                <v-icon large class="mr-5">mdi-account</v-icon>
                Profile</v-card
              >
            </v-list-item-group>

            <v-list-item-group
              class="text--white text-h6 mb-2 font-weight-light"
              color="white"
              ><v-card
                class="yellow darken-3 pa-2 elevation-2"
                href="/userTender"
              >
                <v-icon large class="mr-5">mdi-bookshelf</v-icon>
                All Projects</v-card
              >
            </v-list-item-group>

            <v-list-item-group
              class="text--white text-h6 mb-2 font-weight-light"
              color="white"
              ><v-card
                class="blue-grey darken-3 pa-2 elevation-0"
                href="/userMyTender"
              >
                <v-icon large class="mr-5">mdi-clipboard</v-icon>
                My Projects</v-card
              >
            </v-list-item-group>
          </v-list>
        </v-flex>
      </v-navigation-drawer>

      <v-main class="grey lighten-2">
        <p class="text-center grey lighten-2 blue-grey--text mt-5 text-h2">
          Projects
        </p>
        <v-row>
          <v-col cols="4">
            <p class="text-center blue-grey text-h4">Projects</p>
            <v-container class="grey lighten-2">
              <v-card class="grey lighten-2 rounded-ls" elevation="0">
                <div>
                  <v-toolbar flat color="grey lighten-2">
                    <v-divider class="mx-2" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-text-field
                      light
                      color="blue-grey"
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details
                    ></v-text-field>
                    <v-spacer></v-spacer>
                  </v-toolbar>

                  <v-container class="grey lighten-2">
                    <v-data-table
                      light
                      :headers="headers"
                      :items="interncards"
                      :search="search"
                      hide-actions
                      class="grey lighten-2"
                    >
                      <template #item.edit="{ item }">
                        <v-icon x-large color="blue" @click="expItem(item)">
                          mdi-account-box
                        </v-icon>
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
                              interncards[interncards.indexOf(item)]._id,
                              item
                            )
                          "
                        >
                          mdi-delete
                        </v-icon>
                      </template>
                    </v-data-table>
                  </v-container>
                </div>
              </v-card>
            </v-container>
          </v-col>

          <v-divider class="mt-10 blue-grey" vertical></v-divider>
          <v-col cols="8">
            <p class="text-center blue-grey text-h4">View Project</p>
            <v-card light elevation="0" class="grey lighten-2 ma-10">
              <v-row>
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Company :
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="text--black">{{ company1 }}</div></v-col
                >
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Role :
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="text--black">{{ role1 }}</div></v-col
                >
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">Duration:</div>
                </v-col>
                <v-col cols="2"
                  ><div class="black--text">
                    {{ duration1 }}
                  </div>
                </v-col>
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Stipend :
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="black--text">
                    {{ stipend1 }}
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Start Date :
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="black--text">
                    {{ startDate1 }}
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Apply By :
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="black--text">
                    {{ applyBy1 }}
                  </div></v-col
                >
                <v-col cols="12"
                  ><div class="blue-grey--text text-subtitle-1">
                    Learn More :
                  </div></v-col
                >
                <v-col cols="12"
                  ><p class="black--text">
                    {{ learnMore1 }}
                  </p></v-col
                >
                <v-col cols="12"
                  ><div class="blue-grey--text text-subtitle-1">
                    Updates :
                  </div></v-col
                >
                <v-col cols="12 "
                  ><div class="black--text">{{ updates1 }}</div></v-col
                >
                <v-col cols="12 ">
                  <div class="black--text">
                    <v-dialog light v-model="dialog" max-width="500px">
                      <v-btn
                        slot="activator"
                        color="blue-grey"
                        dark
                        class="mb-2"
                        @click="dialog = true"
                        >Apply</v-btn
                      >
                      <v-card class="grey lighten-2">
                        <v-card-title>
                          <span class="headline">Edits</span>
                        </v-card-title>

                        <v-card-text color="grey lighten-2">
                          <v-container grid-list-md class="grey lighten-2">
                            <v-layout wrap>
                              <v-flex xs12 sm12 md12>
                                <v-text-field
                                  v-model="company"
                                  label="company"
                                  color="black"
                                ></v-text-field>
                              </v-flex>
                              <v-flex xs12 sm12 md12>
                                <v-text-field
                                  v-model="role"
                                  label="role"
                                  color="black"
                                ></v-text-field>
                              </v-flex>
                              <v-flex xs12 sm12 md12>
                                <v-text-field
                                  v-model="stipend"
                                  label="stipend"
                                  color="black"
                                ></v-text-field>
                              </v-flex>
                              <v-flex xs12 sm12 md12>
                                <v-text-field
                                  v-model="duration"
                                  label="Duration"
                                  color="black"
                                ></v-text-field>
                              </v-flex>
                              <v-flex xs12 sm12 md12>
                                <v-text-field
                                  v-model="startDate"
                                  label="Start date"
                                  color="black"
                                ></v-text-field>
                              </v-flex>

                              <v-flex xs12 sm12 md12>
                                <v-text-field
                                  v-model="applyBy"
                                  label="Apply By"
                                  color="black"
                                ></v-text-field>
                              </v-flex>

                              <v-flex xs12 sm12 md12>
                                <v-textarea
                                  v-model="learnMore"
                                  label="Learn More"
                                  color="black"
                                ></v-textarea>
                              </v-flex>

                              <v-flex xs12 sm12 md12>
                                <v-textarea
                                  v-model="updates"
                                  label="Updates"
                                  color="black"
                                ></v-textarea>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <!--<v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>-->
                          <v-btn
                            color="blue-grey"
                            flat
                            @click.native="onAddinterncard"
                            >Apply</v-btn
                          >
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div></v-col
                >
              </v-row></v-card
            >
          </v-col>
          <v-col cols="8"> </v-col>
        </v-row>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/interncards");

      return {
        interncards: response.interncards,
      };
    } catch (err) {}
  },
  data: () => ({
    idee: "",
    title: "",
    ide: "",
    text: "",
    description: "",
    ind: "",
    learnMore: "",
    updates: "",
    cards: ["interncards"],
    drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "Inbox"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"],
    ],
    items: [
      {
        icon: "mdi-apps",
        title: "Dashboard",
        to: "/AdminDashboard",
      },
      {
        icon: "mdi-account",
        title: "Students",
        to: "/AdminStudents",
      },
      {
        icon: "mdi-bookshelf",
        title: "Study Material",
        to: "/AdminMaterial",
      },
      {
        icon: "mdi-file-document-multiple",
        title: "Internships",
        to: "/AdminInternships",
      },
      {
        icon: "mdi-logout",
        title: "Logout",
        to: "/Logout",
      },
    ],
    search: "",
    dialog: false,
    edt: 0,

    /*interncard.company = req.body.company;
    interncard.role = req.body.role;
    interncard.stipend = req.body.stipend;
    interncard.duration = req.body.duration;
    interncard.startDate = req.body.startDate;
    interncard.applyBy = req.body.applyBy; */
    headers: [
      {
        text: "Role",
        align: "left",
        sortable: true,
        value: "role",
      },
      { text: "Stipend", value: "stipend" },
      { text: "Duration", value: "duration" },

      { text: "Actions", value: "edit", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      title: "",
      description: 0,
    },
    defaultItem: {
      company: "",
      role: "",
      stipend: "",
      duration: "",
      startDate: "",
      applyBy: "",
      learnMore: "",
      updates: "",
      appliedStudents: [],
    },

    company1: "N/A",
    role1: "N/A",
    stipend1: "N/A",
    duration1: "N/A",
    startDate1: "N/A",
    applyBy1: "N/A",
    learnMore1: "N/A",
    updates1: "N/A",
    appliedStudents1: [],
  }),
  computed: {},
  methods: {
    expItem(item) {
      this.idee = item._id;
      this.company1 = item.company;
      this.role1 = item.role;
      this.stipend1 = item.stipend;
      this.duration1 = item.duration;
      this.startDate1 = item.startDate;
      this.applyBy1 = item.applyBy;
      this.learnMore1 = item.learnMore;
      this.updates1 = item.updates;
      this.appliedStudents1 = item.appliedStudents;
    },
    editItem(item) {
      this.edt = 1;
      this.company = this.interncards[this.interncards.indexOf(item)].company;
      this.role = this.interncards[this.interncards.indexOf(item)].role;
      this.stipend = this.interncards[this.interncards.indexOf(item)].stipend;
      this.duration = this.interncards[this.interncards.indexOf(item)].duration;
      this.startDate = this.interncards[
        this.interncards.indexOf(item)
      ].startDate;
      this.applyBy = this.interncards[this.interncards.indexOf(item)].applyBy;
      this.learnMore = this.interncards[
        this.interncards.indexOf(item)
      ].learnMore;
      this.updates = this.interncards[this.interncards.indexOf(item)].updates;
      this.appliedStudents = this.interncards[
        this.interncards.indexOf(item)
      ].appliedStudents;
      this.ind = this.interncards.indexOf(item);
      this.dialog = true;
    },

    async deleteItem(id, item) {
      const index = this.interncards.indexOf(item);

      //confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      try {
        let response = await this.$axios.$delete(
          `http://localhost:3000/api/interncards/${id}`
        );
        console.log(response);
        if (response.status) {
          this.interncards.splice(index, 1);
        }
      } catch (err) {}
    },
    async edit(ind3) {
      this.appliedStudents1.splice(ind3, 1);

      this.ide = this.idee;
      let data = {
        company: this.company1,
        role: this.role1,
        stipend: this.stipend1,
        duration: this.duration1,
        startDate: this.startDate1,
        applyBy: this.applyBy1,
        learnMore: this.learnMore1,
        updates: this.updates1,
        appliedStudents: this.appliedStudents1,
      };

      console.log(data);
      let result = await this.$axios.$put(
        `http://localhost:3000/api/interncards/${this.ide}`,
        data
      );
    },
    async onAddinterncard() {
      if (this.edt == 1) {
        this.ide = this.interncards[this.ind]._id;
        let data = {
          company: this.company,
          role: this.role,
          stipend: this.stipend,
          duration: this.duration,
          startDate: this.startDate,
          applyBy: this.applyBy,
          learnMore: this.learnMore,
          updates: this.updates,
          appliedStudents: this.appliedStudents,
        };

        console.log(data);
        let result = await this.$axios.$put(
          `http://localhost:3000/api/interncards/${this.ide}`,
          data
        );
        this.dialog = false;

        this.interncards[this.ind].company = this.company;
        this.interncards[this.ind].role = this.role;
        this.interncards[this.ind].stipend = this.stipend;
        this.interncards[this.ind].duration = this.duration;
        this.interncards[this.ind].startDate = this.startDate;
        this.interncards[this.ind].applyBy = this.applyBy;
        this.interncards[this.ind].learnMore = this.learnMore;
        this.interncards[this.ind].updates = this.updates;
        this.interncards[this.ind].updates = this.appliedStudents;

        this.edt = 0;
      } else {
        try {
          // console.log(this.company);
          //console.log(this.);

          let data = {
            company: this.company,
            role: this.role,
            stipend: this.stipend,
            duration: this.duration,
            startDate: this.startDate,
            applyBy: this.applyBy,
            learnMore: this.learnMore,
            updates: this.updates,
          };

          let response = await this.$axios.$post(
            "http://localhost:3000/api/interncards",
            data
          );
          this.interncards.push(data);
          this.company = "";
          this.role = "";
          this.stipend = "";
          this.duration = "";
          this.startDate = "";
          this.applyBy = "";
          this.learnMore = "";
          this.updates = "";
        } catch (err) {
          console.log(err);
        }
      }
      //this.dialog=false;
    },
    async verify() {
      try {
        let cookie = this.$cookies.get("jwt");
        if (cookie == null) {
          this.$router.push("/AdminLogin");
        }
        let data = {
          cookie: cookie,
        };
        let verify_response = await this.$axios.$post(
          `http://localhost:3000/api/adminverify/`,
          data
        );
        console.log(verify_response.success);
        if (!verify_response.success) {
          this.$router.push("/AdminLogin");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  beforeMount() {
    this.verify();
  },
};
</script>

