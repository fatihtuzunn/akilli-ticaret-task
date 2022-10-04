<template>
  <NavBar/>
  <router-view/>
  <Footer />
</template>

<style>
@import './assets/css/global.css';


</style>

<script>
import NavBar from '@/components/NavBar/NavBar.vue'
import Footer from './components/Footer/Footer.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    Footer
}
}
</script>
