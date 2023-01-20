<template>
  <topBar></topBar>
  <userPage v-if="authenticated"></userPage>
  <landingPage v-else></landingPage>
</template>

<script>
import topBar from "@/components/core/topBar/topBar.vue";
import UserPage from '@/views/userPage/userPage.vue'
import LandingPage from '@/views/landingPage/landingPage.vue';

export default {
  name: 'App',

  components: {
    topBar,
    UserPage,
    LandingPage
  },

  data(){
    return{
      authenticated: true
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
