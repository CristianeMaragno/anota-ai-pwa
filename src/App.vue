<template>
  <topBar></topBar>
  <router-view/>
</template>

<script>
//import MainPage from './components/mainPage/mainPage.vue'

export default {
  name: 'App',
  components: {
    //MainPage
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
