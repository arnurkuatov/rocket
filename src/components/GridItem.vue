<template>
  <div class="grid__item card">
    <div class="card__body">
      <a :href="photo.links.download" target="_blank">
        <img :src="photo.urls.regular" :alt="photo.description">
      </a>
    </div>
    <div class="card__footer media">
      <img :src="photo.user.profile_image.medium" :alt="photo.user.name" class="media__obj">
      <div class="media__body">
        <a :href="photo.user.links.html" target="_blank">{{ photo.user.name }}</a>
        <div>
          <span class="card__likes">
            <i class="fa fa-heart"></i>
            {{ photo.likes }}
          </span>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.icon-fav {
  background: blue;
}
.fav {
  fill: red;
}
</style>