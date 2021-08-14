import ImageService from "@/api/ImageService";
import partials from "@/store/partials";

export const namespaced = true;

export const state = {
  photos: [],
  totalPhotos: 0,
  perPage: 9,
  page: 1,
  query: '',
  loadState: partials.LOAD_STATE.LOADING,
  orderBy: "latest"
};

export const mutations = {
  SET_PHOTOS(state, photos) {
    state.photos = photos;
  },
  SET_TOTAL_PHOTOS(state, total) {
    state.totalPhotos = total;
  },
  SET_PAGE(state, page) {
    state.page = page;
  },
  SET_LOAD_STATE(state, value) {
    state.loadState = value;
  }
};

export const actions = {
  fetch({ commit, state }, { page }) {
    ImageService.getPhotos({
      page: page,
      perPage: state.perPage,
    })
      .then(response => {
        commit("SET_PHOTOS", response.data);
        commit("SET_TOTAL_PHOTOS", response.headers["x-total"]);
        commit("SET_PAGE", page);
        commit("SET_LOAD_STATE", partials.LOAD_STATE.SUCCESS);
      })
      .catch(error => {
        commit("SET_LOAD_STATE", partials.LOAD_STATE.ERROR);
        console.log("Error: " + error.response.data.errors[0]);
      });
  },
  searchPhoto({ commit }, { query }) {
    ImageService.searchPhotos({
      query
    })
      .then(response => {
        commit("SET_PHOTOS", response.results);
        commit("SET_LOAD_STATE", partials.LOAD_STATE.SUCCESS);
      })
  }
};
