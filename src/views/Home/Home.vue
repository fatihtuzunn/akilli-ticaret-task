<template>
  <div class="home">
    <div class="home__loading" v-if="items.length<1">
      <h2 class="home__loadingTitle">Loading
        <span class="home__span home__span-1">.</span>
        <span class="home__span home__span-2">.</span>
        <span class="home__span home__span-3">.</span>
        <span class="home__span home__span-4">.</span>
      </h2>
    </div>



    <div class="home__container" v-else>
      <div class="home__product" v-for="item in items" :key="item.id">
       <!--  <router-link
          :to="item.id === 0 ? {name:'Product',params:{id:item.title}} : {name:'Details', params:{id:item.title}}">
          <Card :item="item" />
        </router-link> -->
       
          <Card :item="item" />
        
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Card from '@/components/Card/Card'
export default {
  name: 'Home',
  data() {
    return {
      items: []
    }
  },
  components: {
    Card
  },
  async created() {
      
      try {
        const res = await axios.get(`https://fakestoreapi.com/products`);
        console.log(res)
        this.items = res.data;
      } catch (error) {
        console.log(error);
      }
    },



  /* async created() {
    try {

      const res = await axios({
        method: 'get',
        url: 'https://api.akilliticaretim.com/api/Product/ListProducts/1',
        headers: {
          'Content-Type': 'application/json',
          "GUID": "0739-E657-C4F4-98B4"
        },
        auth: {
          username: 'user',
          password: '123456' 
        }
      })
      console.log(res)
      this.items = res.data;
    } catch (error) {
      console.log(error);
    }
  }, */


}
</script>

<style scoped>

</style>
