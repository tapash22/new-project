import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    return: {
      card1: {
        id: 1,
        name: "General Guidelines",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere obcaecati eum repellat. Odio dolores, repudiandae fugit cum animi magnam velit enim culpa tenetur blanditiis dignissimos ratione quis eaque, pariatur excepturi assumenda ipsam ex quasi libero dolore sint harum. Quas doloremque obcaecati nesciunt, sequi, quae ipsum quo culpa cumque maxime tempore tempora pariatur eos beatae corrupti facilis corporis magni aut rerum,labore unde deleniti! Mollitia atque deleniti, molestias natus eaque aliquid id facilis consectetur ratione maxime amet saepe",
      },
      card2: {
        id: 1,
        name: "Task Description",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere obcaecati eum repellat. Odio dolores, repudiandae fugit cum animi magnam velit enim culpa tenetur blanditiis dignissimos ratione quis eaque, pariatur excepturi assumenda ipsam ex quasi libero dolore sint harum. Quas doloremque obcaecati nesciunt, sequi, quae ipsum quo culpa cumque maxime tempore tempora pariatur eos beatae corrupti facilis corporis magni aut rerum,labore unde deleniti! Mollitia atque deleniti, molestias natus eaque aliquid id facilis consectetur ratione maxime amet saepe",
      },

      list: [
        {
          id: 1,
          title: "Task Revesion from Client",
          date: "02-03-23",
          time: "03:20PM",
          icon: "mdi-chevron-up",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere obcaecati eum repellat. Odio dolores, repudiandae fugit cum animi magnam velit enim culpa tenetur blanditiis dignissimos ratione quis eaque, pariatur excepturi assumenda ipsam ex quasi libero dolore sint harum. Quas doloremque obcaecati nesciunt, sequi, quae ipsum quo culpa cumque maxime tempore tempora pariatur eos beatae corrupti facilis corporis magni aut rerum,labore unde deleniti! Mollitia atque deleniti, molestias natus eaque aliquid id facilis consectetur ratione maxime amet saepe",
          text2:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere obcaecati eum repellat. Odio dolores, repudiandae fugit cum animi magnam velit enim culpa tenetur blanditiis dignissimos ratione quis eaque, pariatur excepturi assumenda ipsam ex quasi libero dolore sint harum. Quas doloremque obcaecati nesciunt, sequi, quae ipsum quo culpa cumque maxime tempore tempora pariatur eos beatae corrupti facilis corporis magni aut rerum,labore unde deleniti! Mollitia atque deleniti, molestias natus eaque aliquid id facilis consectetur ratione maxime amet saepe",
        },
        {
          id: 2,
          title: "Task Revesion from User",
          date: "02-03-23",
          time: "03:20PM",
          icon: "mdi-chevron-up",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere obcaecati eum repellat. Odio dolores, repudiandae fugit cum animi magnam velit enim culpa tenetur blanditiis dignissimos ratione quis eaque, pariatur excepturi assumenda ipsam ex quasi libero dolore sint harum. Quas doloremque obcaecati nesciunt, sequi, quae ipsum quo culpa cumque maxime tempore tempora pariatur eos beatae corrupti facilis corporis magni aut rerum,labore unde deleniti! Mollitia atque deleniti, molestias natus eaque aliquid id facilis consectetur ratione maxime amet saepe",
          text2:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere obcaecati eum repellat. Odio dolores, repudiandae fugit cum animi magnam velit enim culpa tenetur blanditiis dignissimos ratione quis eaque, pariatur excepturi assumenda ipsam ex quasi libero dolore sint harum. Quas doloremque obcaecati nesciunt, sequi, quae ipsum quo culpa cumque maxime tempore tempora pariatur eos beatae corrupti facilis corporis magni aut rerum,labore unde deleniti! Mollitia atque deleniti, molestias natus eaque aliquid id facilis consectetur ratione maxime amet saepe",
        },
      ],
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
