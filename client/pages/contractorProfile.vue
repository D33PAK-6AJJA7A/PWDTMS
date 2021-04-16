<template>
  <div class="Profile">
    <v-app>
      <template>
        <div class="Internships">
          <v-app>
            <v-card
              class="blue-grey darken-3 elevation-5 text-right d-flex justify-end"
              align="right"
              height="50px"
              ><div class="pa-2 mr-4 yellow darken-3 mt-1 mb-1">
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
                    <v-icon x-large color="yellow darken-3"
                      >mdi-chevron-left</v-icon
                    >
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
              <v-container>
                <v-row>
                  <v-container height="100px"></v-container>

                  <v-container height="100px"></v-container>
                  <v-col cols="4">
                    <v-col cols="12">
                      <v-row>
                        <v-col cols="12">
                          <v-container grid-list-lg text-sm-center md-12>
                            <v-card class="mx-auto pa-1" elevation="12" light>
                              <v-toolbar flat>
                                <v-layout row wrap align-center>
                                  <v-flex justify-center>
                                    <div class="justify-center">
                                      <v-card
                                        class="rounded-circle"
                                        height="150px"
                                        width="150px"
                                      >
                                        <v-img
                                          v-bind:src="profile_url"
                                          class="rounded-circle"
                                          height="150px"
                                        ></v-img>
                                      </v-card>
                                    </div>
                                  </v-flex>
                                </v-layout>
                              </v-toolbar>

                              <v-dialog
                                light
                                v-model="dialog1"
                                persistent
                                max-width="400"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn
                                    color="transparent"
                                    flat
                                    elevation="0"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <v-icon>mdi-camera</v-icon>
                                  </v-btn>
                                </template>
                                <v-card>
                                  <v-card-title class="headline">
                                    Profile Picture
                                  </v-card-title>
                                  <v-card-text
                                    ><input
                                      color="blue-grey"
                                      type="file"
                                      @change="onFileChanged"
                                    />
                                    <v-btn
                                      color="blue-grey"
                                      class="mt-3"
                                      @click="onUpload"
                                      >Upload!</v-btn
                                    ></v-card-text
                                  >
                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                      color="blue-grey darken-1"
                                      text
                                      @click="dialog1 = false"
                                    >
                                      Close
                                    </v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                              <v-card class="transparent" height="50px" flat>
                                <!--                        <v-file-input-->
                                <!--                          hide-input-->
                                <!--                          prepend-icon="mdi-camera"-->
                                <!--                          @change="onFileChanged"-->
                                <!--                        ></v-file-input>-->
                              </v-card>
                              <v-row>
                                <v-col cols="2">
                                  <v-subheader
                                    ><v-icon large
                                      >mdi-account-box</v-icon
                                    ></v-subheader
                                  >
                                </v-col>
                                <v-col cols="9">
                                  <v-text-field
                                    outlined
                                    filled
                                    v-model="name"
                                    readonly
                                  >
                                  </v-text-field>
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col cols="2">
                                  <v-subheader
                                    ><v-icon large
                                      >mdi-email</v-icon
                                    ></v-subheader
                                  >
                                </v-col>
                                <v-col cols="9">
                                  <v-text-field
                                    outlined
                                    filled
                                    v-model="email"
                                    readonly
                                  >
                                  </v-text-field>
                                </v-col>
                              </v-row>

                              <v-divider></v-divider>
                            </v-card>
                          </v-container>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12">
                      <v-row>
                        <v-col cols="12">
                          <v-container grid-list-lg text-sm-center md-12>
                            <v-card class="mx-auto pa-1" elevation="12" light>
                              <v-card
                                class="transparent text-h6 pa-4 mb-4 blue-grey--text"
                                height="50px"
                                flat
                              >
                                Change Password
                              </v-card>
                              <v-row>
                                <v-col cols="4">
                                  <v-subheader class="text-subtitle-2 text-left"
                                    >Old Password</v-subheader
                                  >
                                </v-col>
                                <v-col cols="7">
                                  <v-text-field
                                    outlined
                                    v-model="password_to_check"
                                    :append-icon="
                                      show1 ? 'mdi-eye' : 'mdi-eye-off'
                                    "
                                    :type="show1 ? 'text' : 'password'"
                                    name="input-10-1"
                                    @click:append="show1 = !show1"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col cols="4">
                                  <v-subheader class="text-subtitle-2 text-left"
                                    >New Password</v-subheader
                                  >
                                </v-col>
                                <v-col cols="7">
                                  <v-text-field
                                    outlined
                                    v-model="password_new"
                                    :append-icon="
                                      show2 ? 'mdi-eye' : 'mdi-eye-off'
                                    "
                                    :type="show2 ? 'text' : 'password'"
                                    name="input-10-1"
                                    @click:append="show2 = !show2"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col cols="12">
                                  <v-btn
                                    class="blue-grey mb-4"
                                    @click="changePassword"
                                    >Change Password</v-btn
                                  >
                                </v-col>
                              </v-row>

                              <v-divider></v-divider>
                            </v-card>
                          </v-container>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-col>
                  <v-col cols="8">
                    <v-card class="white" light elevation="15">
                      <v-card class="transparent" flat>
                        <v-container fluid>
                          <v-row>
                            <v-col cols="2">
                              <v-subheader>Semester</v-subheader>
                            </v-col>
                            <v-col cols="2">
                              <v-text-field
                                outlined
                                v-model="sem"
                              ></v-text-field>
                            </v-col>

                            <v-col cols="2">
                              <v-subheader>Batch</v-subheader>
                            </v-col>
                            <v-col cols="2">
                              <v-text-field
                                outlined
                                v-model="batch"
                              ></v-text-field>
                            </v-col>

                            <v-col cols="2">
                              <v-subheader>Section</v-subheader>
                            </v-col>
                            <v-col cols="2">
                              <v-text-field
                                outlined
                                v-model="section"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="2">
                              <v-subheader>Phone</v-subheader>
                            </v-col>
                            <v-col cols="4">
                              <v-text-field
                                v-model="phone"
                                outlined
                                color="blue-grey"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-subheader>BIO</v-subheader>
                              <v-textarea
                                outlined
                                v-model="bio"
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
                                outlined
                                v-model="addr_line"
                              ></v-text-field>
                            </v-col>

                            <v-col cols="2">
                              <v-subheader>City</v-subheader>
                            </v-col>
                            <v-col cols="4">
                              <v-text-field
                                outlined
                                v-model="city"
                              ></v-text-field>
                            </v-col>

                            <v-col cols="2">
                              <v-subheader>State</v-subheader>
                            </v-col>
                            <v-col cols="4">
                              <v-text-field
                                outlined
                                v-model="state"
                              ></v-text-field>
                            </v-col>

                            <v-col cols="2">
                              <v-subheader>Country</v-subheader>
                            </v-col>
                            <v-col cols="4">
                              <v-text-field
                                outlined
                                v-model="country"
                              ></v-text-field>
                            </v-col>

                            <v-col cols="2"> </v-col>
                            <v-col cols="12"
                              ><v-subheader class="text-h5">Resume</v-subheader>
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
                                      <v-icon
                                        >mdi-file-document-multiple</v-icon
                                      >
                                    </v-btn>
                                    {{ Uploaded }}
                                  </template>
                                  <v-card>
                                    <v-card-title class="headline">
                                      Upload Resume
                                    </v-card-title>
                                    <v-card-text>
                                      <input
                                        type="file"
                                        @change="onFileChanged"
                                      />
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
                                <v-btn
                                  large
                                  class="blue-grey"
                                  @click="onSaveProfile"
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
              </v-container>
            </v-main>
          </v-app>
        </div> </template
    ></v-app>
  </div>
</template>

<style scoped>
.v-list-item--active {
  background-color: blue-grey;
}
</style>
<script>
export default {
  data: () => ({
    drawer: true,
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
};
</script>
