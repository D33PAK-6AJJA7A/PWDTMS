<template>
  <div class="Dashboard">
    <v-app>
      <v-card
        class="blue-grey darken-3 elevation-5 text-right d-flex justify-end"
        align="right"
        height="50px"
        ><v-card class="pa-2 mr-4 yellow darken-3 mt-1 mb-1" @click = "logoutfunc"><p>LogOut</p></v-card></v-card
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

      <v-main class="grey lighten-2">
        <p class="text-center grey lighten-2 blue-grey--text mt-5 text-h2">
          View Project
        </p>
        <v-row>
          <v-col cols="4">
            <p class="text-center blue-grey text-h4">Projects</p>
            <v-container class="grey lighten-2">
               <v-dialog
                      light
                      v-model="dialog"
                      fullscreen
                      hide-overlay
                      transition="dialog-bottom-transition"
                      scrollable
                    >
                      <v-card tile>
                        <div>
                          <v-toolbar
                            dark
                            extended
                            extension-height="50"
                            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
                          >
                            <v-btn icon dark @click="dialog = false">
                              <v-icon x-large>mdi-close</v-icon>
                            </v-btn>
                            <v-toolbar-title class="text-h3"
                              >Create New Project</v-toolbar-title
                            >
                            <v-spacer></v-spacer>
                          </v-toolbar>
                        </div>

                       

                        <v-card class="pa-5" light elevation="0">
                          <div class="pa-2 mb-4 blue-grey text-h5 white--text">
                            Project Details
                          </div>
                          <v-card class="transparent" flat>
                            <v-container fluid>
                              <v-row>
                                  <v-col cols="2">
                                  <v-subheader>Name</v-subheader>
                                </v-col>
                                <v-col cols="2">
                                  <v-text-field
                                    outlined
                                    v-model="name1"
                                  ></v-text-field>
                                </v-col>
                                  <v-col cols="2">
                                  <v-subheader>Project Start Date</v-subheader>
                                </v-col>
                                <v-col cols="2">
                                  <v-text-field
                                    outlined
                                    v-model="prjStartDate1"
                                  ></v-text-field>
                                </v-col>
                                  <v-col cols="2">
                                  <v-subheader>Project End Date</v-subheader>
                                </v-col>
                                <v-col cols="2">
                                  <v-text-field
                                    outlined
                                    v-model="prjEndDate1"
                                  ></v-text-field>
                                </v-col>
                                  <v-col cols="2">
                                  <v-subheader>Tender Start Date</v-subheader>
                                </v-col>
                                <v-col cols="2">
                                  <v-text-field
                                    outlined
                                    v-model="tenderStartDate1"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="2">
                                  <v-subheader>Tender End Date</v-subheader>
                                </v-col>
                                <v-col cols="2">
                                  <v-text-field
                                    outlined
                                    v-model="tenderEndDate1"
                                  ></v-text-field>
                                </v-col>

                                

                                <v-col cols="12">
                                  <v-subheader>Location</v-subheader>
                                  <v-textarea
                                    outlined
                                    v-model="location1"
                                    color="blue-grey"
                                  >
                                  </v-textarea>
                                </v-col>
                                 
                                 <v-col cols="12">
                                  <v-subheader>Attach Documents</v-subheader>
                                  <v-file-input
    multiple
   

  ></v-file-input>
                                </v-col>
                                <v-col cols="12">
                                    <v-btn @click= "newProject(); dialog = !dialog;" color="blue-grey" x-large>Create </v-btn>
                                </v-col>

                              </v-row>
                            </v-container>
                          </v-card> 
                        </v-card>

                        <div style="flex: 1 1 auto"></div>
                      </v-card>
                    </v-dialog>
              <v-card class="grey lighten-2 rounded-ls" elevation="0">
                <div>
                  <v-btn color="blue-grey" @click="dialog=true">Create New Project <v-icon>mdi-plus</v-icon></v-btn>
                  <v-toolbar flat color="grey lighten-2">
                    <v-divider class="mx-2" inset vertical></v-divider>
                    
                    <v-text-field
                      light
                      color="blue-grey"
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details
                    ></v-text-field>
                    
                  </v-toolbar>

                  <v-container class="grey lighten-2">
                    <v-data-table
                      light
                      :headers="headers"
                      :items="projects"
                      :search="search"
                      hide-actions
                      class="grey lighten-2"
                    >
                      <template #item.edit="{ item }">
                        <v-icon x-large color="blue" @click="expItem(item)">
                          mdi-account-box
                        </v-icon>
                        <!-- <v-icon
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
                              projects[projects.indexOf(item)]._id,
                              item
                            )
                          "
                        >
                          mdi-delete
                        </v-icon> -->
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
                <v-col cols="4"
                  ><v-btn color="success" x-large>Open Project</v-btn></v-col
                >
                <v-col cols="4"
                  ><v-btn color="red" x-large>Close Project</v-btn></v-col
                >
                <v-col cols="4"></v-col>
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Name
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="text--black">{{ name }}</div></v-col
                >
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Project Start Date :
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="text--black">{{ prjStartDate }}</div></v-col
                >
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">Project End Date:</div>
                </v-col>
                <v-col cols="2"
                  ><div class="black--text">
                    {{ prjEndDate }}
                  </div>
                </v-col>
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Tender Start Date
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="black--text">
                    {{ tenderStartDate }}
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Tender End Date :
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="black--text">
                    {{ tenderEndDate }}
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Budget :
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="black--text">
                    {{ expBudget }}
                  </div></v-col
                >
                <v-col cols="12"
                  ><div class="blue-grey--text text-subtitle-1">
                    Location :
                  </div></v-col
                >
                <v-col cols="12"
                  ><p class="black--text">
                    {{ location }}
                  </p></v-col
                >
                <v-col cols="12"
                  ><div class="blue-grey--text text-subtitle-1">
                    Details :
                  </div></v-col
                >
                <v-col cols="12 "
                  ><div class="black--text">{{ details }}</div></v-col
                >
                <v-col cols="12"
                  ><div class="blue-grey--text text-subtitle-1">
                    Link :
                  </div></v-col
                >
                <v-col cols="12 "
                  ><div class="black--text">{{ link }}</div></v-col
                >
                <v-col cols="12"
                  ><div class="blue-grey--text text-subtitle-1">
                    Approved Tender :
                  </div></v-col
                >
              </v-row></v-card
            >
            </v-col
                  >

      <!-- <v-main class="grey lighten-2">
        <p class="text-center grey lighten-2 blue-grey--text mt-5 text-h2">
          View Project
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

                    <v-dialog light v-model="dialog" max-width="500px">
                      <v-btn
                        slot="activator"
                        color="blue-grey"
                        dark
                        class="mb-2"
                        @click="dialog = true"
                        >New Item</v-btn
                      > -->


                      <!-- <v-card class="grey lighten-2">
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
                          <!-- <v-btn
                            color="blue-grey"
                            flat
                            @click.native="onAddinterncard"
                            >Save</v-btn
                          >
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
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
                <v-col cols="12"
                  ><div class="blue-grey--text text-subtitle-1">
                    Approve Tender :
                  </div></v-col
                > -->
                <!-- <v-col cols="12"
                  ><div class="blue-grey--text text-h5">Applied Students :</div>
                </v-col>
                <v-col cols="12">
                  <ol id="example-1">
                    <li v-for="(item, i) in appliedStudents1" :key="i">
                      {{ item }}&nbsp&nbsp&nbsp<v-icon @click="edit(i)"
                        >mdi-delete</v-icon
                      >
                    </li>
                  </ol></v-col
                >--></v-row
              ></v-card
            >
            <!-- <v-container class="grey lighten-2">
              <v-card class="grey lighten-2 rounded-ls" elevation="0">
                <div>
                  <v-toolbar flat color="grey lighten-2">
                    <v-toolbar-title class="text-h4 blue-grey--text darken-5"
                      >Tenders</v-toolbar-title
                    >
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

                    <v-dialog light v-model="dialog" max-width="500px">
                      <v-btn
                        slot="activator"
                        color="blue-grey"
                        dark
                        class="mb-2"
                        @click="dialog = true"
                        >New Item</v-btn
                      >
                      <v-card class="grey lighten-2">
                        <v-card-title>
                          <span class="headline">Edits</span>
                        </v-card-title>

                        <v-card-text color="grey lighten-2">
                          <v-container grid-list-md class="grey lighten-2">
//                             <v-layout wrap>
//                               <v-flex xs12 sm12 md12>
//                                 <v-text-field
//                                   v-model="company"
                                  label="company"
//                                   color="black"
//                                 ></v-text-field>
//                               </v-flex>
//                               <v-flex xs12 sm12 md12>
//                                 <v-text-field
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

                          <v-btn
                            color="blue-grey"
                            flat
                            @click.native="onAddinterncard"
                            >Save</v-btn
                          >
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
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
            </v-container> --></v-col
          >
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
      let response = await $axios.$get("http://localhost:3000/api/projects");

      return {
        projects: response.projects,
      };
    } catch (err) {}
  },
  data: () => ({
    dialog: false,
    name: "", //display
    prjStartDate: "", //display
    prjEndDate: "",
    tenderStartDate: "",
    expBudget: "", //display
    tenderEndDate: "", //display
    location: "",
    details: "",
    link: "",
    name1: "", //display
    prjStartDate1: "", //display
    prjEndDate1: "",
    tenderStartDate1: "",
    expBudget1: "", //display
    tenderEndDate1: "", //display
    location1: "",
    details1: "",
    link1: "",
    drawer: true,
    approved : 0,
    status : 0,
    items12: [
      { title: "Dashboard", icon: "mdi-home-city", to: "/govtDashboard" },
      {
        title: "Contractor",
        icon: "mdi-account",
        to: "/govtContracterDatabase",
      },
      { title: "Projects", icon: "mdi-bookshelf", to: "/govtProjects" },
    ],
    mini: false,
    headers: [
      {
        text: "Name",
        align: "left",
        sortable: true,
        value: "name",
      },
      { text: "Tender End Date", value: "tenderEndDate" },
      { text: "Budget", value: "expBudget" },

      { text: "Actions", value: "edit", sortable: false },
    ],
  }),
  methods: {
    logoutfunc() {
      this.$router.push("/Logout");
    },
    expItem(item) {
      this.name = this.projects[this.projects.indexOf(item)].name;
      this.prjStartDate = this.projects[
        this.projects.indexOf(item)
      ].prjStartDate;
      this.prjEndDate = this.projects[this.projects.indexOf(item)].prjEndDate;
      this.tenderStartDate = this.projects[
        this.projects.indexOf(item)
      ].tenderStartDate;
      this.tenderEndDate = this.projects[
        this.projects.indexOf(item)
      ].tenderEndDate;
      this.expBudget = this.projects[this.projects.indexOf(item)].expBudget;
      this.location = this.projects[this.projects.indexOf(item)].location;
      this.details = this.projects[this.projects.indexOf(item)].details;
      this.link = this.projects[this.projects.indexOf(item)].link;
    },
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
          `http://localhost:3000/api/verify/govt`,
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
    async newProject(){
      try{
        let data = {
          name : this.name1,
          prjStartDate : this.prjStartDate1,
          prjEndDate : this.prjEndDate1,
          tenderStartDate : this.tenderStartDate1,
          tenderEndDate : this.tenderEndDate1,
          expBudget : this.expBudget1,
          location : this.location1,
          details : this.details1,
          link : this.link1,
          approved : this.approved1,
          status : this.status1,
      };
       let response = await this.$axios.$post(
         `http://localhost:3000/api/projects/`,
          data);
        if(response){
          this.name1 = "";
          this.prjStartDate1 = "";
          this.prjEndDate1 = "";
          this.tenderStartDate1 = "";
          this.tenderEndDate1 = "";
          this.expBudget1 = "";
          this.location1 = "";
          this.details1 = "";
          this.link1 = "";
      }
      }catch(err){
      console.log(err);
    }
    },
  },
  beforeMount() {
    //   this.verify();
  },
};
</script>

