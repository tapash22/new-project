<template>
  <v-container style="background: rgb(242, 244, 247)">
    <v-row class="d-flex justify-start">
      <v-col sm="12" md="12" lg="12" xl="12" cols="12" style="display: flex">
        <p
          style="
            font-size: 16px;
            font-weight: 700;
            font-family: 'Poppins', sans-serif;
          "
        >
          Subtask :
        </p>
        <p
          class="text-body-1 font-bold"
          style="
            font-size: 16px;
            font-weight: 500;
            font-family: 'Poppins', sans-serif;
            padding-left: 5px;
          "
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          rem eligendi
        </p>
      </v-col>
    </v-row>
    <v-row style="background: #e7effc; padding: 10px">
      <v-col cols="12" sm="12" md="8" lg="8" xl="8">
        <section>
          <div class="d-flex justify-center">
            <v-row class="button" style="">
              <v-col cols="12" sm="12" lg="8" md="8" xl="8" class="btn-col">
                <v-btn
                  outlined
                  style="
                    margin-right: 5px;
                    font-size: 14px;
                    font-wight: 500;
                    font-family: 'Poppins', sans-serif;
                  "
                  ><v-icon class="font-weight-bold text-h6"
                    >mdi-play-outline</v-icon
                  >
                  Start Timer
                </v-btn>
                <v-btn
                  outlined
                  style="
                    margin-right: 5px;
                    font-size: 14px;
                    font-wight: 500;
                    font-family: 'Poppins', sans-serif;
                  "
                  ><v-icon class="font-weight-bold text-h6">mdi-check</v-icon>
                  Mark As Complete
                </v-btn>
                <v-btn
                  outlined
                  style="
                    margin-right: 5px;
                    font-weight: 500;
                    font-family: 'Poppins', sans-serif;
                  "
                  ><v-icon class="font-weight-bold text-h6">mdi-plus</v-icon>
                  Request Time Extention
                </v-btn>
              </v-col>

              <v-col cols="4" style="display: flex; justify-content: end">
                <v-btn icon>
                  <v-icon
                    class="font-weight-bold text-h3;"
                    style="font-weight: 900; font-size: 36px"
                    >mdi-dots-horizontal</v-icon
                  >
                </v-btn>
              </v-col>
            </v-row>
            <v-row style="background: #fff">
              <Header />
            </v-row>
            <v-row style="padding: 10px; background: #fff">
              <CardBody />
              <CardBody1 />
              <CardBody1 />
              <CardBody />
            </v-row>
          </div>
        </section>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
        style="padding: 10px; display: block"
      >
        <div
          style="
            background: rgba(173, 195, 210, 0.2);
            width: 320px;
            padding: 10px;
            border-radius: 10px;
          "
        >
          <v-card
            style="width: 315px; height: 191px; margin-top: 10px; padding: 5px"
          >
            <v-card-title
              style="display: flex; padding: 0; margin: 0 font-size:14px; font-family: 'Poppins', sans-serif;"
              ><v-icon
                style="font-size: 2.5rem; color: blue; padding-top: -10px"
                >mdi-circle-small</v-icon
              >
              Doing</v-card-title
            >
            <v-card-text style="padding: 0; margin: 0">
              <v-list style="padding: 0; margin: 0">
                <v-list-item>
                  <v-list-item-title style="font-family: 'Poppins', sans-serif"
                    >Start Date:</v-list-item-title
                  >
                  <v-list-item-subtitle
                    style="font-family: 'Poppins', sans-serif"
                    >28-02-2023</v-list-item-subtitle
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-title style="font-family: 'Poppins', sans-serif"
                    >Due Date:</v-list-item-title
                  >
                  <v-list-item-subtitle
                    style="font-family: 'Poppins', sans-serif"
                    >28-02-2023</v-list-item-subtitle
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-title style="font-family: 'Poppins', sans-serif"
                    >Time Estimate:</v-list-item-title
                  >
                  <v-list-item-subtitle
                    style="font-family: 'Poppins', sans-serif"
                    >8 hour 30min</v-list-item-subtitle
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-title style="font-family: 'Poppins', sans-serif"
                    >Hours Logged:</v-list-item-title
                  >
                  <v-list-item-subtitle
                    style="font-family: 'Poppins', sans-serif"
                    >8 hour 30min</v-list-item-subtitle
                  >
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
          <NewCard />
          <NewCard />
          <NewCard />
          <NewCard1 />
          <NewCard2 />
          <NewCard3 />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Header from "./components/Header.vue";
import CardBody from "./components/CardBody.vue";
import CardBody1 from "./components/CardBody1.vue";
import NewCard from "./components/NewCard.vue";

import NewCard1 from "./components/NewCard1.vue";
import NewCard2 from "./components/NewCard2.vue";
import NewCard3 from "./components/NewCard3.vue";

export default {
  name: "App",

  components: {
    Header,
    CardBody,
    CardBody1,
    NewCard,
    NewCard1,
    NewCard2,
    NewCard3,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.v-list-item {
  min-height: 30px !important;
  /* background: rgb(173, 195, 210); */
}
.button {
  display: flex;
  justify-content: space-between;
  background: #fff;
  margin-bottom: 2px;
}
.button .btn-col {
  display: flex;
  background: #fff;
}

@media only screen and (max-width: 600px) {
 .button {
  display: flex;
  justify-content: space-between;
  background: #fff;
  margin-bottom: 2px;
}
.button .btn-col {
  display: block;
  background: #fff;
}
}
</style>

