<template>
  <v-card style="width: 315px; height: 191px; margin-top: 20px">
    <v-card-title style="display: block; padding: 0; margin: 0">
      <h4 style="font-size: 14px; padding-left: 10px;font-family: 'Poppins', sans-serif;">Time Logs</h4>
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item style="display: flex; justify-content: space-between">
          <v-avatar color="success" size="36">
            <img
              src="https://www.transparentpng.com/thumb/man/rTkJ7v-man-png-image.png"
            />
          </v-avatar>
          <v-list-item-title style="width: 150px; padding-left: 10px;font-family: 'Poppins', sans-serif;"
            >20-03-2023
          </v-list-item-title>
          <v-list-item-subtitle style="display: flex; justify-content: end;font-family: 'Poppins', sans-serif;">
            5 Hours 30min
          </v-list-item-subtitle>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item style="display: flex; justify-content: space-between">
          <v-avatar color="success" size="36">
            <img
              src="https://www.transparentpng.com/thumb/man/rTkJ7v-man-png-image.png"
            />
          </v-avatar>
          <v-list-item-title style="width: 150px; padding-left: 10px;font-family: 'Poppins', sans-serif;"
            >20-03-2023
          </v-list-item-title>
          <v-list-item-subtitle style="display: flex; justify-content: end;font-family: 'Poppins', sans-serif;">
            5 Hours 30min
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