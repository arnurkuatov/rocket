<template>
  <div class="pagination">
    <div class="pagination__left">
      <a href="#" :class="{ hidden: !hasPrev }" @click.prevent="changePage(prevPage)">Prev</a>
    </div>
    <div class="pagination__mid">
      <ul>
        <li :class="{ hidden: !hasFirst }">
          <a href="#" @click.prevent="changePage(1)">1</a>
        </li>
        <li :class="{ hidden: !hasFirst }">...</li>

        <template>
          <li v-for="(page, index) in pages" :key="index">
            <a
              href="#"
              :class=" { current: photo.page == page }"
              @click.prevent="changePage(page)"
            >{{ page }}</a>
          </li>
        </template>

        <li :class="{ hidden: !hasLast }">...</li>
        <li :class="{ hidden: !hasLast }">
          <a href="#" @click.prevent="changePage(totalPages)">{{ totalPages }}</a>
        </li>
      </ul>
    </div>
    <div class="pagination__right">
      <a href="#" :class="{ hidden: !hasNext }" @click.prevent="changePage(nextPage)">Next</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      pageRange: 2
    }
  },
  methods: {
    changePage(page) {
      this.$emit('onPageChanged', page)
    }
  },
  computed: {
    rangeStart() {
      const start = this.photo.page - this.pageRange

      return start > 0 ? start : 1
    },
    rangeEnd() {
      const end = this.photo.page + this.pageRange

      return end < this.totalPages ? end : this.totalPages
    },
    nextPage() {
      return this.photo.page + 1
    },
    prevPage() {
      return this.photo.page - 1
    },
    hasFirst() {
      return this.rangeStart !== 1
    },
    hasLast() {
      return this.rangeEnd < this.totalPages
    },
    hasPrev() {
      return this.photo.page > 1
    },
    hasNext() {
      return this.photo.page < this.totalPages
    },
    totalPages() {
      return Math.ceil(this.photo.totalPhotos / this.photo.perPage)
    },
    pages() {
      const pages = []

      for (var i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i)
      }
      return pages
    },
    ...mapState(['photo'])
  }
}
</script>

