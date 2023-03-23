<template>
  <!-- <v-row>
    <v-col cols="12" sm="12" md="12" lg="12" xl="12" style="background: #fff"> -->
  <ul style="">
    <li style="display: flex; min-height: 20px">
      <h2
        style="
          font-size: 17px;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
        "
      >
        Parent task:
      </h2>
      <p style="font-size: 14px; font-family: 'Poppins', sans-serif">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        maiores!
      </p>
    </li>
    <li style="display: flex; min-height: 20px">
      <h2 style="font-size: 17px; font-family: 'Poppins', sans-serif">
        Project:
      </h2>
      <p style="font-size: 14px; font-family: 'Poppins', sans-serif">
        <v-icon style="font-size: 2.5rem; color: red; padding-top: -10px"
          >mdi-circle-small</v-icon
        >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        maiores!
      </p>
    </li>
    <li style="display: flex; min-height: 20px">
      <h2 style="font-size: 17px; font-family: 'Poppins', sans-serif">
        Milestone:
      </h2>
      <p style="font-size: 14px; font-family: 'Poppins', sans-serif">
        <v-icon style="font-size: 2.5rem; color: blue; padding-top: -10px"
          >mdi-circle-small</v-icon
        >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        maiores!
      </p>
    </li>
    <li style="display: flex">
      <h2 style="font-size: 17px; font-family: 'Poppins', sans-serif">
        Assignedn To:
      </h2>
      <div style="display: flex">
        <v-avatar color="success" size="36">
          <img
            src="https://www.transparentpng.com/thumb/man/rTkJ7v-man-png-image.png"
          />
        </v-avatar>
        <div class="d-block">
          <h2
            style="
                 font-size:17px
                  font-weight: 500;
                  display: flex;
                  width: 350px;
                "
          >
            MD.Sadik Istiak
            <v-chip
              x-small
              style="
                margin-top: 5px;
                margin-left: 5px;
                background: #686868;
                color: #fff;
              "
              >it's you</v-chip
            >
          </h2>
          <p style="font-size: 10px">UI/UX Designer</p>
        </div>
      </div>
    </li>

    <li style="display: flex">
      <h2 style="font-size: 17px; font-family: 'Poppins', sans-serif">
        Assignedn By:
      </h2>
      <div style="display: flex">
        <v-avatar color="success" size="36">
          <img
            src="https://www.transparentpng.com/thumb/man/rTkJ7v-man-png-image.png"
          />
        </v-avatar>
        <div class="d-block">
          <h2
            style="
              font-size: 14px;
              font-family: 'Poppins', sans-serif;
              font-weight: 500;
            "
          >
            MD.Sadik Istiak
          </h2>
          <p style="font-size: 10px; font-family: 'Poppins', sans-serif">
            UI/UX Designer
          </p>
        </div>
      </div>
    </li>

    <li style="display: flex">
      <h2 style="font-size: 17px; font-family: 'Poppins', sans-serif">
        Priority:
      </h2>

      <p style="font-size: 14px; font-family: 'Poppins', sans-serif">
        <v-icon style="font-size: 2.5rem; color: orange; padding-top: -10px"
          >mdi-circle-small</v-icon
        >Medium
      </p>
    </li>
    <li style="display: flex">
      <h2 style="font-size: 14px; font-family: 'Poppins', sans-serif">
        Task Category To:
      </h2>
      <p style="font-size: 14px; font-family: 'Poppins', sans-serif">
        Frontend Design
      </p>
    </li>
  </ul>
  <!-- </v-col>
  </v-row> -->
</template>

<script>
import SingleCard1 from "./SingleCard1.vue";
import SingleCard from "./SingleCard.vue";
export default {};
</script>


<style scoped>
ul {
  padding: 0;
  margin: 0;
  width: 100%;
  height: auto;
}
li {
  display: flex;
  justify-content: start;
  padding: 10px;
}
h2 {
  width: 150px;
  font-size: 1.2rem;
  font-weight: 500;
}
p {
  font-size: 1rem;
  font-weight: 400;
}

@media only screen and (max-width: 600px) {
  li {
    display: block;
    /* justify-content: start; */
    padding: 20px;
  }
}
</style>