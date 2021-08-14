<template>
  <div>

    <div class="loader" v-if="photo.loadState === LOAD_STATE.LOADING"></div>

    <div class="grid" v-if="photo.loadState === LOAD_STATE.SUCCESS">
      <GridItem v-for="photo in photo.photos" :key="photo.id" :photo="photo"/>
    </div>
    <Pagination @onPageChanged="fetchPhotos" />
  </div>
</template>

<script>
import GridItem from "@/components/GridItem";
import Pagination from "@/components/Pagination";
import partials from "@/store/partials";

import { mapState } from 'vuex'

export default {
  data() {
    return {
      ...partials
    }
  },
  components: {
    GridItem,
    Pagination
  },
  methods: {
    fetchPhotos(page) {
      this.$store.dispatch("photo/fetch", {
        page,
      })
    }
  },
  computed: mapState(["photo"]),
  mounted() {
    this.fetchPhotos(this.photo.page)
  }
}
</script>

