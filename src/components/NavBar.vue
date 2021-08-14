<template>
  <div>
    <b-navbar class="topbar" toggleable="lg" type="dark">

      <b-navbar-brand class="brand" href="#">
        <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.75 7.875V0H19.25V7.875H8.75ZM19.25 12.25H28V28H0V12.25H8.75V20.125H19.25V12.25Z" fill="white"/>
        </svg>

        ImageStock</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>


        <b-navbar-nav class="ml-auto">
          <ul class="d-flex">
            <router-link class="nav-link" to="/" v-b-toggle.accordion-1>
              <svg width="21" height="21" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6165 18.6924H20.6369L26.1135 24.1949C26.6431 24.7245 26.6431 25.5899 26.1135 26.1195C25.584 26.6491 24.7185 26.6491 24.189 26.1195L18.6994 20.6299V19.6095L18.3506 19.2478C16.5423 20.7978 14.0752 21.5987 11.4531 21.1595C7.86229 20.5524 4.99479 17.5558 4.55563 13.9391C3.88396 8.47533 8.48229 3.877 13.946 4.54867C17.5627 4.98783 20.5594 7.85533 21.1665 11.4462C21.6056 14.0683 20.8048 16.5353 19.2548 18.3437L19.6165 18.6924ZM7.07441 12.8799C7.07441 16.0962 9.67066 18.6924 12.8869 18.6924C16.1032 18.6924 18.6994 16.0962 18.6994 12.8799C18.6994 9.66367 16.1032 7.06742 12.8869 7.06742C9.67066 7.06742 7.07441 9.66367 7.07441 12.8799Z" fill="white"/>
              </svg>

              Search</router-link>
            <router-link class="nav-link" :to="{ name: 'favourites' }">
              <svg width="20" height="20" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0516 20.2443C12.1779 21.0597 10.8329 21.0597 9.95928 20.2325L9.83283 20.1143C3.79765 14.501 -0.145337 10.8257 0.00410514 6.24047C0.0730786 4.23147 1.07319 2.30521 2.69407 1.17072C5.7289 -0.956453 9.47646 0.0362259 11.4997 2.47065C13.5229 0.0362259 17.2705 -0.96827 20.3053 1.17072C21.9262 2.30521 22.9263 4.23147 22.9953 6.24047C23.1562 10.8257 19.2017 14.501 13.1665 20.138L13.0516 20.2443Z" fill="white"/>
              </svg>

              Favourite</router-link>
            <router-link class="nav-link" :to="{ name: 'histories'}">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.48945 13.0019C4.48945 7.53112 9.00695 3.10028 14.5211 3.25195C19.602 3.39278 23.8486 7.63945 23.9895 12.7203C24.1411 18.2344 19.7103 22.7519 14.2395 22.7519C11.9753 22.7519 9.90612 21.9828 8.25945 20.6828C7.75029 20.2928 7.71779 19.5236 8.17279 19.0686C8.56279 18.6786 9.16945 18.6461 9.60279 18.9819C10.8811 19.9894 12.4953 20.5853 14.2395 20.5853C18.4645 20.5853 21.877 17.1294 21.8228 12.8936C21.7686 8.86362 18.3778 5.47278 14.3478 5.41862C10.1011 5.36445 6.65612 8.77695 6.65612 13.0019H8.59529C9.08279 13.0019 9.32112 13.5869 8.98529 13.9228L5.96279 16.9561C5.74612 17.1728 5.41029 17.1728 5.19362 16.9561L2.17112 13.9228C1.82445 13.5869 2.06279 13.0019 2.55029 13.0019H4.48945ZM13.1561 9.48112C13.1561 9.03695 13.5245 8.66862 13.9686 8.66862C14.4128 8.66862 14.7811 9.03695 14.7811 9.47028V13.1536L17.9011 15.0061C18.2803 15.2336 18.4103 15.7319 18.1828 16.1219C17.9553 16.5011 17.457 16.6311 17.067 16.4036L13.687 14.3994C13.362 14.2044 13.1561 13.8469 13.1561 13.4678V9.48112Z" fill="white"/>
              </svg>

              History</router-link>
          </ul>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
      <b-card class="search-block">
         <h1 class="search-text">Поиск</h1>
        <input v-model="search" @input="waitSearch" class="search" type="search"/>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      search: '',
    }
  },
  methods: {
    searchPhoto() {
      let query = this.search
      this.$store.dispatch("photo/searchPhoto", {
        query,
      })
    },
    waitSearch() {
      setTimeout(() => {
          this.searchPhoto()
      }, 1000)
    }
  }
};
</script>

<style lang="scss" scoped>
.topbar {
  background: #000;
}
.brand {
  margin-left: 231px;
}
.nav-link {
  margin-left: 35px;
  color: white;
  list-style: none;
  &:last-child {
    margin-right: 224px;
  }
}
.search-block {
  background: #000;
  border-radius: 0;
  .search-text {
    color: #ffffff;
    font-size: 72px;
    text-align: center;
  }
  .search {
    margin: 0 auto;
    background: inherit;
    width: 1200px;
    border: none;
    outline: none !important;
    border-bottom: 0.1px solid white;
    color: white;
    &:focus {
      background: inherit;
      outline: none !important;
    }
  }
}
</style>