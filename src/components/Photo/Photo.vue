<template>
  <div class="photo"><!--start photo-->

         <div class="photo__especial" v-if="mainitem"><!--start photo__especial-->
                 <ShowProduct :showButtons="screenSize" :changeShowModal="screenSize === false ? changeShowModal:''" @resize="console.log(window.innerWidth)"/>
                 <Modal :main="true" v-if="showModal" title="Fall Limited Edition Sneakers" :close="changeShowModal"/>
         </div><!--end photo__especial-->

         <div v-if="!mainitem && item" class="photo__normal">
             <img :src="item.image" :alt="item.name" @click="changeShowModal" class="photo__imgNormal">
             <Modal :main="false" v-if="showModal" :title="item.name" :close="changeShowModal" :item="item"/>
         </div>

  </div><!--end photo-->
</template>

<script>
import { ref } from '@vue/reactivity'
import Modal from '@/components/Modal/Modal.vue'
import ShowProduct from "@/components/ShowProduct/ShowProduct.vue"
import { onMounted } from '@vue/runtime-core'
export default {
    props:['item','mainitem'],
    components:{
      Modal,
      ShowProduct
    },
    setup() {
        const screenSize = ref(true)
         const showModal = ref(false);

        const changeShowModal = () => {
            showModal.value = !showModal.value
        }

       onMounted(()=>{
          window.addEventListener('resize',() => {
          if(window.innerWidth>700) {
            screenSize.value = false
          } else {
            screenSize.value = true
          }
        })
          if(window.innerWidth>700) {
            screenSize.value = false
          } else {
            screenSize.value = true
          }
       })

      return {
        showModal,
        changeShowModal,
        screenSize
      }
    }
}
</script>

<style>

</style>