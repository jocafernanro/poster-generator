const posterParser = ({
  id = "standard",
  dimensions = { x: 1080, y: 1080 },
  image = undefined,
} = {}) => ({
  id,
  dimensions,
  image,
});

// initial state
const state = () => ({
  activePoster: {},
  posters: [posterParser({ image: "posters-images/standard.png" })],
});

// getters
const getters = {};

// actions
const actions = {
  setActivePoster({ commit }, id) {
    commit("setActivePoster", id);
  },
};

// mutations
const mutations = {
  setActivePoster(state, id) {
    state.activePoster = state.posters.find((poster) => poster.id === id);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
