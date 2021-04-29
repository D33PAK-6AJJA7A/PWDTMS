<template>
  <div class="Dashboard">
    <v-app>
      <v-card
        class="blue-grey darken-3 elevation-5 text-right d-flex justify-end"
        align="right"
        height="50px"
        ><div class="pa-2 mr-4 yellow darken-3 mt-1 mb-1" @click="logoutfunc">
          LogOut
        </div></v-card
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
          <v-col :cols=maximise>
            <p class="text-center blue-grey text-h4">Projects</p>
            <v-container class="grey lighten-2"></v-container>


              <v-card class="grey lighten-2 pa-4 rounded-ls" elevation="0">
                 <v-btn v-if="maximise==12" color='blue-grey' @click="maximise=4"> Minimise</v-btn>
                   <v-btn v-if="maximise==4" color='blue-grey' @click="maximise=12"> Maximise</v-btn>
             
                <div>
                  <v-toolbar flat color="grey lighten-2">
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
                      class="elevation-1"
                    >
                      <template v-slot:body="{ items }">
                        <tbody>
                          <tr
                            :class="
                              key === selectedRow ? 'custom-highlight-row' : ''
                            "
                            @click="rowSelect(key)"
                            v-for="(item, key) in items"
                            :key="projects.indexOf(item)"
                          >
                            <td>{{ item.name }}</td>
                            <td>{{ item.tenderEndDate }}</td>
                            <td>{{ item.expBudget }}</td>
                            <!-- <td>
                              <div
                                v-if="
                                  tender_arr[projects_arr.indexOf(item)]
                                    .approved == '0'
                                "
                              >
                                <v-icon color="blue-grey"
                                  >mdi-clock-outline</v-icon
                                >
                              </div>
                              <div
                                v-if="
                                  tender_arr[projects_arr.indexOf(item)]
                                    .approved == '1'
                                "
                              >
                                <v-icon color="blue-grey"
                                  >mdi-account-clock-outline</v-icon
                                >
                              </div>
                              <div
                                v-if="
                                  tender_arr[projects_arr.indexOf(item)]
                                    .approved == '2'
                                "
                              >
                                <v-icon color="green">mdi-check-bold</v-icon>
                              </div>
                              <div
                                v-if="
                                  tender_arr[projects_arr.indexOf(item)]
                                    .approved == '-1'
                                "
                              >
                                <v-icon color="red">mdi-close-thick</v-icon>
                              </div>
                            </td> -->
                          </tr>
                        </tbody>
                      </template>
                    </v-data-table>
                  </v-container>
                </div>
              </v-card>
            </v-container>
          </v-col>

          <v-divider class="mt-10 blue-grey" vertical></v-divider>
          <v-col v-if="maximise!=12" :cols=12-maximise>
            <p class="text-center blue-grey text-h4">View Project</p>
            <v-card light elevation="0" class="grey lighten-2 ma-10">
              <v-row>
                <v-col cols="4"
                  ><v-btn color="success" x-large @click= "openProject">Open Project</v-btn></v-col
                >
                <v-col cols="4"
                  ><v-btn color="red" x-large @click= "closeProject">Close Project</v-btn></v-col
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
                  ><div class="blue-grey--text text-subtitle-1">
                    Project End Date:
                  </div>
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
                    v-model="search1"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                  ></v-text-field>
                  <v-spacer></v-spacer>
                </v-toolbar>

                <v-container class="grey lighten-2">
                  <!-- <v-data-table
                    light
                    :headers="headers1"
                    :items="tenders"
                    :search="search"
                    hide-actions
                    class="grey lighten-2"
                  >
                    <template #item.edit="{ item }">
                      <v-icon x-large color="blue" @click="expItem1(item)">
                        mdi-account-box
                      </v-icon>
                    </template>
                  </v-data-table> -->
                  <v-data-table
                    light
                    :headers="headers1"
                    :items="tenders"
                    :search="search1"
                    class="elevation-1"
                  >
                    <template v-slot:body="{ items }">
                      <tbody>
                        <tr
                          :class="
                            key === selectedRow1 ? 'custom-highlight-row' : ''
                          "
                          @click="rowSelect1(key)"
                          v-for="(item, key) in items"
                          :key="tenders.indexOf(item)"
                        >
                          <td>{{ item.Budget }}</td>
                          <td>{{ item.timelineStart }}</td>
                          <td>{{ item.timelineEnd }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-data-table>
                </v-container>
              </div>
            </v-card>
            <div v-if="selectedRow1 != -1">
              <p class="text-center blue-grey text-h4">View Applied Tenders</p>
              <v-card light elevation="0" class="grey lighten-2 ma-10">
                <v-row>
                  <v-col cols="2"
                    ><div class="blue-grey--text text-subtitle-1">
                      Contracter :
                    </div></v-col
                  >
                  <v-col cols="4"
                    ><div class="text--black">{{ contractor_name }}</div></v-col
                  >
                   
                  <v-col cols="2"
                    ><div class="blue-grey--text text-subtitle-1">
                      Budget :
                    </div></v-col
                  >
                  <v-col cols="4"
                    ><div class="text--black">{{ Budget }}</div></v-col
                  >
                  
                  <v-col cols="2"
                    ><div class="blue-grey--text text-subtitle-1">
                      TimeLine Start:
                    </div>
                  </v-col>
                  <v-col cols="4"
                    ><div class="black--text">{{ timelineStart }}</div>
                  </v-col>
                   
                  <v-col cols="2"
                    ><div class="blue-grey--text text-subtitle-1">
                      TimeLine End:
                    </div></v-col
                  >
                  <v-col cols="4"
                    ><div class="black--text">{{ timelineEnd }}</div></v-col
                  >
                  

                 
                  <v-col cols="2"
                    ><div class="blue-grey--text text-subtitle-1">
                      Past Projects :
                    </div></v-col
                  >
                  <v-col cols="10">
                    <div class="black--text">{{ past_projects }}</div>
                  </v-col>

                  <v-col cols="2"
                    ><div class="blue-grey--text text-subtitle-1">
                      Materials :
                    </div></v-col
                  >
                  <v-col cols="10"
                    ><p class="black--text">
                      {{ material }}
                    </p></v-col
                  >
                  <v-col cols="4"
                    ><v-btn color="blue-grey" @click="dialog1 = true"
                      >Lock<v-icon>mdi-lock</v-icon></v-btn
                    ></v-col
                  >
                </v-row></v-card
              >
            </div>
            <v-dialog
              class="grey lighten-2"
              v-model="dialog1"
              max-width="500px"
            >
              <v-card light class="grey lighten-2">
                <v-card-title>
                  <span class="headline">Are you sure!!!</span>
                </v-card-title>

                <v-card-text color="grey lighten-2">
                  <v-container grid-list-md class="grey lighten-2">
                    <v-layout wrap>
                      <v-flex xs12 sm12 md12>
                        <p>
                          Are you sure you want to lock this tender for this
                          project. You would not be able to change this after
                          this.
                        </p>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <!--<v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>-->
                  <v-btn color="blue-grey" flat @click= "tenderLocked(); dialog1 = false"
                    >Yes, Lock it <v-icon>mdi-lock</v-icon></v-btn
                  >
                  <v-btn color="blue-grey" flat @click="dialog1 = false"
                    >No, take me back
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-main>
    </v-app>
  </div>
</template>

<style>
.custom-highlight-row {
  background-color: rgb(249, 255, 192);
}
</style>


<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/projects");

      return {
        projects: response.projects,
      };
    } catch (err) {
      console.log(err);
    }
  },
  data: () => ({
    selectedRow: -1,
    selectedRow1: -1,
    maximise: 12,
    name: "NA", //display
    dialog1: false,
    prjStartDate: "NA", //display
    prjEndDate: "NA",
    tenderStartDate: "NA",
    expBudget: "NA", //display
    tenderEndDate: "NA", //display
    location: "NA",
    details: "NA",
    link: "NA",
    project_id: "",
    contractor_id: "",
    Budget: "",
    timelineStart: "",
    timelineEnd: "",
    material: "",
    approved: 0,
    tender_id: "",
    tenders: [],
    contractor_name: "",
    past_projects: "",
    annual_report: "",
    drawer: true,
    propDocs: [{ link: "www.google.com" }, { link: "www.facebook.com" }],
    pastPro: [{ text: "Park" }, { text: "Ground" }, { text: "Building" }],
    items12: [
      { title: "Dashboard", icon: "mdi-home-city", to: "/pwdDashboard" },
      {
        title: "Contractor Profile",
        icon: "mdi-account",
        to: "/pwdContracterDatabase",
      },
      {
        title: "Approve Profile",
        icon: "mdi-lock",
        to: "/pwdApprove",
      },

      {
        title: "Projects",
        icon: "mdi-clipboard",
        to: "/pwdProjects",
      },
    ],
    mini: false,
    drawer: null,
    search: "",
    search1: "",
    headers: [
      {
        text: "Name",
        align: "left",
        sortable: true,
        value: "name",
      },
      { text: "Tender End Date", value: "tenderEndDate" },
      { text: "Budget", value: "expBudget" },
    ],
    headers1: [
      {
        text: "Proposed Budget",
        align: "left",
        sortable: true,
        value: "Budget",
      },
      { text: "Start Date", value: "timelineStart" },
      { text: "End Date", value: "timelineEnd" },
    ],
  }),
  methods: {
    logoutfunc() {
      this.$router.push("/Logout");
    },
    rowSelect(idx) {
      this.maximise=4;
      this.selectedRow = idx;
      this.expItem(this.projects[this.selectedRow]);
    },
    async closeProject(){
      try{
        let data = {
            name : this.name,
            prjStartDate : this.prjStartDate,
            prjEndDate : this.prjEndDate,
            tenderStartDate : this.tenderStartDate,
            tenderEndDate : this.tenderEndDate,
            expBudget : this.expBudget,
            location : this.location,
            details : this.details,
            link : this.link,
            tenders : this.tenders,
            status : 1,
        };
        let response = this.$axios.$put(
          `http://localhost:3000/api/projects/${this.project_id}`,
          data
        );
      }catch(err){
        console.log(err);
      }
    },
    async openProject(){
      try{
        let data = {
            name : this.name,
            prjStartDate : this.prjStartDate,
            prjEndDate : this.prjEndDate,
            tenderStartDate : this.tenderStartDate,
            tenderEndDate : this.tenderEndDate,
            expBudget : this.expBudget,
            location : this.location,
            details : this.details,
            link : this.link,
            tenders : this.tenders,
            status : 0,
        };
        let response = this.$axios.$put(
          `http://localhost:3000/api/projects/${this.project_id}`,
          data
        );
      }catch(err){
        console.log(err);
      }
    },
    async tenderLocked(){
      try{
        let data = {
            name : this.name,
            prjStartDate : this.prjStartDate,
            prjEndDate : this.prjEndDate,
            tenderStartDate : this.tenderStartDate,
            tenderEndDate : this.tenderEndDate,
            expBudget : this.expBudget,
            location : this.location,
            details : this.details,
            link : this.link,
            tenders : this.tenders,
            status : 2,
        };
        let data1 = {
            project_id : this.project_id,
            contractor_id : this.contractor_id, 
            Budget : this.Budget, 
            timelineStart : this.timelineStart,
            timelineEnd : this.timelineEnd,
            material : this.material,
            approved: 1,
        }
        let response = this.$axios.$put(
          `http://localhost:3000/api/projects/${this.project_id}`,
          data
        );
        let response1 = this.$axios.$put(
          `http://localhost:3000/api/tenders/${this.tender_id}`,
          data1
        );
      }catch(err){
        console.log(err);
      }
    },
    expItem(item) {
      this.project_id = this.projects[this.projects.indexOf(item)]._id; 
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
      this.tenders = this.projects[this.projects.indexOf(item)].tenders;
    },
    rowSelect1(idx) {
      this.selectedRow1 = idx;
      this.expItem1(this.tenders[this.selectedRow1]);
    },
    async expItem1(item) {
      this.project_id = this.tenders[this.tenders.indexOf(item)].project_id;
      this.contractor_id = this.tenders[
        this.tenders.indexOf(item)
      ].contractor_id;
      this.Budget = this.tenders[this.tenders.indexOf(item)].Budget;
      this.timelineStart = this.tenders[
        this.tenders.indexOf(item)
      ].timelineStart;
      this.timelineEnd = this.tenders[this.tenders.indexOf(item)].timelineEnd;
      this.material = this.tenders[this.tenders.indexOf(item)].material;
      this.approved = this.tenders[this.tenders.indexOf(item)].approved;
      this.tender_id = this.tenders[this.tenders.indexOf(item)]._id;

      let response = await this.$axios.$get(
        `http://localhost:3000/api/users/${this.contractor_id}`
      );
      if (response) {
        this.contractor_name = response.user.name;
        this.past_projects = response.user.past_projects;
        this.annual_report = response.user.annual_report;
      }
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
          `http://localhost:3000/api/verify/pwd`,
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
    //this.verify();
  },
};
</script>

