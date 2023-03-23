<template>
  <v-card style="width: 315px; height: 191px; margin-top: 20px">
    <v-card-title style="display: block; padding: 0; margin: 0">
      <h4 style="font-size: 14px; padding-left: 10px">Submitted Work</h4>
      <!-- <v-btn style="color: blue; margin-left: 60px" icon>
        <v-icon>mdi-plus</v-icon>
        Add Comment
      </v-btn> -->
    </v-card-title>
    <v-card-text style="padding: 0">
      <v-list>
        <v-list-item style="display: flex; justify-content: space-between">
          <v-list-item-title
            style="width: 150px; font-family: 'Poppins', sans-serif"
            >This is new text
          </v-list-item-title>
          <v-list-item-subtitle
            style="display: flex; justify-content: space-around"
          >
            <v-list-item-title style="font-family: 'Poppins', sans-serif"
              >20/12/23</v-list-item-title
            >
            <v-icon style="font-size: 1.2rem">mdi-eye-outline</v-icon>
          </v-list-item-subtitle>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item style="display: flex; justify-content: space-between">
          <v-list-item-title
            style="width: 150px; font-family: 'Poppins', sans-serif"
            >This is new text
          </v-list-item-title>
          <v-list-item-subtitle
            style="display: flex; justify-content: space-around"
          >
            <v-list-item-title style="font-family: 'Poppins', sans-serif"
              >20/12/23</v-list-item-title
            >
            <v-icon style="font-size: 1.2rem">mdi-eye-outline</v-icon>
          </v-list-item-subtitle>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          icon: "mdi-eye-outline",
          icon2: "mdi-pen",
        },
        {
          name: "Ice cream sandwich",
          icon: "mdi-eye-outline",
          icon2: "mdi-pen",
        },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  justify-content: space-around;
}
</style>