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
                      :items="projects"
                      :search="search"
                      hide-actions
                      class="grey lighten-2"
                    >
                      <template #item.edit="{ item }">
                        <v-icon x-large color="blue" @click="expItem(item)">
                          mdi-account-box
                        </v-icon>
                        
                      </template>
                    </v-data-table>
                  </v-container>
                </div>
              </v-card>
            </v-container>
          </v-col>
          <v-divider class="mt-10 blue-grey" vertical></v-divider>
          <v-col cols="8" >
            <p class="text-center blue-grey text-h4">View Project</p>
            <v-card light elevation="0" class="grey lighten-2 ma-10">
              <v-row>
                
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
                <v-col cols="4"
                  ><div class="blue-grey--text text-subtitle-1">
                    Location :
                  </div></v-col
                >
                <v-col cols="4"
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
                <v-col cols="4"
                  ><div class="blue-grey--text text-subtitle-1">
                    Link :
                  </div></v-col
                >
                <v-col cols="4"
                  ><div class="black--text">{{ link }}</div></v-col
                >
                <v-col cols="4"></v-col>
          
               <div>
      <v-row
        justify="center"
      >
        <v-btn
          v-if="selected==1"
          color="primary"
          class="ma-2"
          dark
          @click="dialog = true"
        >
          Apply
        </v-btn>
       
        <v-dialog
        light
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
          scrollable
        >
          <v-card tile>
            

            <v-toolbar
            dark
             prominent
              src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
              
             
            >
              <v-btn
                icon
                dark
                @click="dialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Apply to  {{name}}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn
                  dark
                  text
                  @click="dialog = false"
                >
                  Save
                </v-btn>
              </v-toolbar-items>
              
            </v-toolbar>
            
           
              <v-list
                subheader
              >
              
                <v-row>
                <v-col cols="4">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Name</v-list-item-title>
                    <v-list-item-subtitle>{{contractor_name}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Company</v-list-item-title>
                    <v-list-item-subtitle>{{company}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Industry</v-list-item-title>
                    <v-list-item-subtitle>{{industry}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-btn large class="blue-grey">
  <a
  v-bind:href="annual_report_url"
  target="_blank"
  class="black--text"
  style="text-decoration: none"
  >
  Annual Report<v-icon>mdi-download</v-icon>
  </a></v-btn
  >
                </v-col>
               
  <v-col cols="4">
    Baad maii dekhte hai , all projects mai se isko jo mil gaye hai voo print kar dete hai
    <ul>
      <li  v-for="item in past_projects"
            :key="i">
            {{item}}
            </li>
           </ul>
  </v-col>
  


  <!-- <a href="annual_report_url">
  <v-btn  class="ma=5"><v-icon>mdi-download</v-icon>Annual Report</v-btn></a> -->
               </v-row>
              </v-list>
              <v-divider></v-divider>
             
            
            
  
            <div style="flex: 1 1 auto;"></div>
          </v-card>
        </v-dialog>
  
        
      </v-row>
    </div>
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
      let response = await $axios.$get("http://localhost:3000/api/projects");

      return {
        projects: response.projects,
      };
    } catch (err) {}
  },
  data: () => ({
    selected:-1,
    name: "NA", //display
    prjStartDate: "NA", //display
    prjEndDate: "NA",
    tenderStartDate: "NA",
    expBudget: "NA", //display
    tenderEndDate: "NA", //display
    location: "NA", 
    details: "NA",
    link: "NA",
    profile_url: "",
    annual_report_url: "",
    id: "",
    email: "",
    contractor_name: " ",
    company: " ",
    industry: " ",
    past_projects: " ",
    contact_info: " ",
    branch_addr_line: " ",
    city: " ",
    state: " ",
    country: " ",
    password: "",
    role: "",
    confirmed: false,
    drawer: true,
    dialog: false,
      dialog2: false,
      dialog3: false,
      notifications: false,
      sound: true,
      widgets: false,
      items: [
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me 2',
        },
      ],
      select: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
        { text: 'State 5' },
        { text: 'State 6' },
        { text: 'State 7' },
      ],
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
    search: "",
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
    async getUser() {
      try {
        let cookie = this.$cookies.get("jwt");
        if (cookie == null) {
          this.$router.push("/login");
        }
        let data = {
          cookie: cookie,
        };
        let response = await this.$axios.$post(
          `http://localhost:3000/api/profile/`,
          data
        );
        if (!response.success) {
          this.$router.push("/login");
        } else if (response.user.role !== "contractor") {
          this.$cookies.set("jwt", null);
          this.$router.push("/Login");
        }
        this.id = response.user._id;
        this.contractor_name = response.user.name;
        this.email = response.user.email;
        this.company = response.user.company;
        this.industry = response.user.industry;
        this.contact_info = response.user.contact_info;
        this.past_projects = response.user.past_projects;
        this.branch_addr_line = response.user.branch_addr_line;
        this.city = response.user.city;
        this.state = response.user.state;
        this.country = response.user.country;
        this.profile_url = response.user.photo;
        this.role = response.user.role;
        this.confirmed = response.user.confirmed;
        this.annual_report_url = response.user.annual_report;
      } catch (err) {
        console.log(err);
      }
    },
    expItem(item) {
      this.selected = 1;
      this.name = this.projects[this.projects.indexOf(item)].name;
      this.prjStartDate = this.projects[this.projects.indexOf(item)].prjStartDate;
      this.prjEndDate = this.projects[this.projects.indexOf(item)].prjEndDate;
      this.tenderStartDate = this.projects[this.projects.indexOf(item)].tenderStartDate;
      this.tenderEndDate = this.projects[this.projects.indexOf(item)].tenderEndDate;
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
    this.verify();
    this.getUser();
  },
};
</script>

