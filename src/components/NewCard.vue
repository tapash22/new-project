<template>
  <v-card style="width: 315px; height: 154px; margin-top: 20px">
    <v-card-title style="display: block; padding: 0; margin: 0">
      <h4
        style="
          font-size: 14px;
          padding-left: 10px;
          font-family: 'Poppins', sans-serif;
        "
      >
        Comment
      </h4>
      <v-btn style="color: blue; margin-left: 60px; font-family: 'Poppins', sans-serif" icon>
        <v-icon>mdi-plus</v-icon>
        Add Comment
      </v-btn>
    </v-card-title>
    <v-card-text style="padding: 0">
      <v-list style="padding: 0">
        <v-list-item style="display: flex; justify-content: space-between">
          <v-list-item-title
            style="width: 150px; font-family: 'Poppins', sans-serif"
            >This is new text
          </v-list-item-title>
          <v-list-item-subtitle style="display: flex; justify-content: end">
            <v-icon style="font-size: 1.2rem">mdi-eye-outline</v-icon>
            <v-icon style="font-size: 1.2rem"
              >mdi-pen</v-icon
            ></v-list-item-subtitle
          >
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item style="display: flex; justify-content: space-between">
          <v-list-item-title
            style="width: 150px; font-family: 'Poppins', sans-serif"
            >This is new text
          </v-list-item-title>
          <v-list-item-subtitle style="display: flex; justify-content: end">
            <v-icon style="font-size: 1.2rem">mdi-eye-outline</v-icon>
            <v-icon style="font-size: 1.2rem"
              >mdi-pen</v-icon
            ></v-list-item-subtitle
          >
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