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
                href="/govtDashboard"
              >
                <v-icon large class="mr-5">mdi-apps</v-icon>
                Dashboard</v-card
              >
            </v-list-item-group>

            <v-list-item-group
              class="text--white text-h6 mb-2 font-weight-light"
              color="white"
              ><v-card
                class="yellow darken-3 pa-2 elevation-2"
                href="/govtContracterDatabase"
              >
                <v-icon large class="mr-5">mdi-account</v-icon>
                Contracter</v-card
              >
            </v-list-item-group>

            <v-list-item-group
              class="text--white text-h6 mb-2 font-weight-light"
              color="white"
              ><v-card
                class="blue-grey darken-3 pa-2 elevation-0"
                href="govtProjects"
              >
                <v-icon large class="mr-5">mdi-bookshelf</v-icon>
                Projects</v-card
              >
            </v-list-item-group>
          </v-list>
        </v-flex>
      </v-navigation-drawer>

      <v-main class="grey lighten-2">
        <div class="text-h3 blue-grey--text text-center mt-10 mb-5">
          Contractor Database
        </div>
        <v-card class="blue-grey" width="100%" height="10px"></v-card>
        <v-row>
          <v-col cols="5">
            <v-container class="grey lighten-2">
              <v-card class="grey lighten-2 rounded-ls" elevation="0">
                <div>
                  <div>
                    <v-text-field
                      light
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details
                      color="blue-grey"
                    ></v-text-field>
                  </div>
                  <v-spacer></v-spacer>

                  <!-- <v-dialog v-model="dialog" max-width="500px">
                      <v-btn
                        slot="activator"
                        color="blue-grey"
                        dark
                        class="mb-2"
                        @click="dialog = true"
                        >New Item
                        <v-icon class="mr-2"> mdi-pencil-plus </v-icon></v-btn
                      >
                      <v-card class="grey darken-3">
                        <v-card-title>
                          <span class="headline">Edits</span>
                        </v-card-title>

                        <v-card-text color="grey darken-3">
                          <v-container grid-list-md class="grey darken-2">
                            <v-layout wrap>
                              <v-flex xs12 sm12 md12>
                                <v-text-field
                                  v-model="title"
                                  label="Title"
                                  class="grey darken-2"
                                  color="black"
                                ></v-text-field>
                              </v-flex>
                              <v-flex xs12 sm12 md12>
                                <v-text-field
                                  v-model="email"
                                  label="Email"
                                  color="black"
                                ></v-text-field>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="blue-grey "
                            flat
                            @click.native="onAddAnnouncement"
                            >Save</v-btn
                          >
                        </v-card-actions>
                      </v-card>
                    </v-dialog> -->

                  <v-container class="grey lighten-2">
                    <v-data-table
                      light
                      :headers="headers"
                      :items="users"
                      :search="search"
                      hide-actions
                      class="grey lighten-2"
                    >
                      <template #item.edit="{ item }">
                        <v-icon large color="blue" @click="expItem(item)">
                          mdi-account-box
                        </v-icon>
                        <v-icon
                          large
                          class="mr-2"
                          color="blue-grey"
                          @click="editItem(item)"
                        >
                          mdi-pencil
                        </v-icon>

                        <v-icon
                          large
                          color="red"
                          @click="
                            deleteItem(users[users.indexOf(item)]._id, item)
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
          <v-divider vertical class="blue-grey mt-10 mb-10"></v-divider>

          <v-col cols="7">
            <v-card class="grey lighten-2 mt-5" light elevation="0">
              <v-card class="transparent" flat>
                <v-container fluid>
                  <v-row>
                    <v-col cols="4"> </v-col>
                    <v-col cols="4">
                      <div class="justify-center">
                        <v-card
                          class="rounded-circle blue-grey"
                          height="150px"
                          width="150px"
                        >
                          <v-img
                            v-bind:src="profile_url1"
                            class="rounded-circle"
                            height="150px"
                          ></v-img>
                        </v-card></div
                    ></v-col>
                    <v-col cols="4"> </v-col>
                    <v-col cols="2">
                      <v-subheader>Semester</v-subheader>
                    </v-col>
                    <v-col cols="2">
                      <v-text-field
                        outlined
                        v-model="sem1"
                        disabled
                      ></v-text-field>
                    </v-col>

                    <v-col cols="2">
                      <v-subheader>Batch</v-subheader>
                    </v-col>
                    <v-col cols="2">
                      <v-text-field
                        disabled
                        outlined
                        v-model="batch1"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="2">
                      <v-subheader>Section</v-subheader>
                    </v-col>
                    <v-col cols="2">
                      <v-text-field
                        outlined
                        disabled
                        v-model="section1"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                      <v-subheader>Phone</v-subheader>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        disabled
                        v-model="phone1"
                        outlined
                        color="blue-grey"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-subheader>BIO</v-subheader>
                      <v-textarea
                        disabled
                        outlined
                        v-model="bio1"
                        color="blue-grey"
                      >
                      </v-textarea>
                    </v-col>
                  </v-row>
                  <v-subheader class="text-h5">Address</v-subheader>

                  <v-row>
                    <v-col cols="2">
                      <v-subheader>Address Line</v-subheader>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        disabled
                        outlined
                        v-model="addr_line1"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="2">
                      <v-subheader>City</v-subheader>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        disabled
                        outlined
                        v-model="city1"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="2">
                      <v-subheader>State</v-subheader>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        disabled
                        outlined
                        v-model="state1"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="2">
                      <v-subheader>Country</v-subheader>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        disabled
                        outlined
                        v-model="country1"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="2"> </v-col>
                    <v-col cols="12"
                      ><v-subheader class="text-h5"
                        >Approved Tenders</v-subheader
                      >
                    </v-col>
                    <v-col cols="12"
                      ><v-subheader class="text-h5">Documents</v-subheader>
                    </v-col>
                    <v-row>
                      <v-col class="ml-8" cols="3">
                        <v-btn large class="blue-grey">
                          <a
                            v-bind:href="resume_url"
                            target="_blank"
                            class="black--text"
                            style="text-decoration: none"
                          >
                            View Resume<v-icon>mdi-eye</v-icon>
                          </a></v-btn
                        ></v-col
                      >
                      <v-col cols="3">
                        <v-dialog
                          light
                          v-model="dialog2"
                          persistent
                          max-width="400"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              color="blue-grey"
                              flat
                              large
                              elevation="0"
                              v-bind="attrs"
                              v-on="on"
                            >
                              Upload Resume
                              <v-icon>mdi-file-document-multiple</v-icon>
                            </v-btn>
                            {{ Uploaded }}
                          </template>
                          <v-card>
                            <v-card-title class="headline">
                              Upload Resume
                            </v-card-title>
                            <v-card-text>
                              <input type="file" @change="onFileChanged" />
                              <v-btn
                                large
                                class="mt-4 blue-grey"
                                @click="onUploadResume"
                                >Upload Resume</v-btn
                              >
                            </v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn
                                color="blue-grey darken-1"
                                text
                                @click="dialog2 = false"
                              >
                                Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-col>
                      <v-col cols="2"></v-col>
                      <v-col cols="3">
                        {{ Saved }}
                        <v-btn large class="blue-grey" @click="onSaveProfile"
                          >Save</v-btn
                        >
                      </v-col>
                    </v-row>
                    <v-col cols="8"> </v-col>
                    <v-col cols="1"></v-col>
                  </v-row>
                </v-container>
              </v-card>
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
      let response = await $axios.$get("http://localhost:3000/api/users");
      console.log(response.users);
      return {
        users: response.users,
      };
    } catch (err) {}
  },
  data: () => ({
    name1: "N/A",
    sem1: "N/A",
    section1: "N/A",
    email1: "N/A",
    batch1: "N/A",
    section1: "N/A",
    phone1: "N/A",
    addr_line1: "N/A",
    city1: "N/A",
    state1: "N/A",
    country1: "N/A",
    bio1: "N/A",
    password1: "",
    name: "",
    ide: "",
    email: "",
    ind: "",
    profile_url1: "",
    resume_url1: "",
    section1: "",

    cards: ["Announcements"],
    drawer: null,

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
        icon: "mdi-account",
        title: "AuthStudents",
        to: "/AdminAuthStudents",
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
    headers: [
      {
        text: "Name",
        align: "left",
        sortable: true,
        value: "name",
      },
      { text: "Email", value: "email" },
      { text: "Actions", value: "edit", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      email: 0,
    },
    defaultItem: {
      name: "",
      email: 0,
    },
  }),
  computed: {},

  methods: {
    editItem(item) {
      this.edt = 1;
      this.name = this.users[this.users.indexOf(item)].name;
      this.email = this.users[this.users.indexOf(item)].email;
      this.ind = this.users.indexOf(item);
      this.dialog = true;
    },
    expItem(item) {
      this.name1 = this.users[this.users.indexOf(item)].name;
      this.email1 = this.users[this.users.indexOf(item)].email;
      this.batch1 = this.users[this.users.indexOf(item)].batch;
      this.sem1 = this.users[this.users.indexOf(item)].sem;
      this.section1 = this.users[this.users.indexOf(item)].section;
      this.phone1 = this.users[this.users.indexOf(item)].phone;
      this.addr_line1 = this.users[this.users.indexOf(item)].addr_line;
      this.city1 = this.users[this.users.indexOf(item)].city;
      this.state1 = this.users[this.users.indexOf(item)].state;
      this.country1 = this.users[this.users.indexOf(item)].country;
      this.bio1 = this.users[this.users.indexOf(item)].bio;
      this.profile_url1 = this.users[this.users.indexOf(item)].profile;
      this.resume_url1 = this.users[this.users.indexOf(item)].resume;
      this.password1 = this.users[this.users.indexOf(item)].password;
    },

    async deleteItem(id, item) {
      const index = this.users.indexOf(item);

      //confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      try {
        let response = await this.$axios.$delete(
          `http://localhost:3000/api/users/${id}`
        );
        console.log(response);
        if (response.status) {
          this.users.splice(index, 1);
        }
      } catch (err) {}
    },

    async onAddAnnouncement() {
      if (this.edt == 1) {
        this.ide = this.users[this.ind]._id;
        let data = {
          name: this.name,
          email: this.email,
        };
        let result = await this.$axios.$put(
          `http://localhost:3000/api/users/${this.ide}`,
          data
        );
        this.dialog = false;
        this.users[this.ind].name = this.name;
        this.users[this.ind].email = this.email;
        this.edt = 0;
      } else {
        try {
          console.log(this.name);
          console.log(this.email);

          let data = {
            name: this.name,
            email: this.email,
          };
          let response = await this.$axios.$post(
            "http://localhost:3000/api/users",
            data
          );
          this.users.push(data);
          this.name = "";
          this.email = "";
        } catch (err) {
          console.log(err);
        }
      }
      //this.users.push(data);
      //this.dialog=false;
      //this.$router.push("/Dashboard");
    },

    async save2(id, item) {
      //this.dialog2=false;
      onAddAnnouncement();
      // deleteItem (id,item);
      //this.$router.push("/Dashboard");
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
