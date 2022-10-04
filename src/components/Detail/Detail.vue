<template>
   <section class="detail" v-if="item">
                   <h2 class="detail__company">{{item.company}}</h2>
                   <h1 class="detail__name">{{item.name}}</h1>

                   <p class="detail__description">{{item.description}}</p>

                   <Price :item="item"/>

                   <div class="detail__add">

                        <div class="detail__buttons">

                            <button @click="count > 0 ? count-- : count = 0" class="detail__btn detail__btn--minus">
                                  <img src="@/assets/images/icon-minus.svg" alt="icon-minus" class="detail__minusIcon">
                            </button>

                             <span class="detail__count">{{count}}</span>

                           <button @click="count++" class="detail__btn detail__btn--plus">
                                  <img src="@/assets/images/icon-plus.svg" alt="icon-plus" class="detail__plusImg">
                           </button>
                       </div>

                       <div class="detail__addtoCart">
                           <button @click="addShopping" class="detail__addTocartBtn"><img src="@/assets/images/icon-cart-white.svg" alt="icon-cart-white" class="detail__addToCartBtn">Add to cart</button>
                       </div>


                   </div>

    </section>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex'
import Price from '../Price/Price.vue'

export default {
    props:['item'],
    components:{
        Price
    },
    setup(props) {

        const count = ref(0)
         const store = useStore()
        const add = (product) => store.commit('add',product)

        const addShopping = () => {

            if(count.value > 0) {
                const newOrder = { 
                name:props.item.name,
                img:props.item.image,
                price:props.item.price,
                count:count.value,
            }

             add(newOrder)
             count.value = 0
            }

        }


        return {
            count,
            addShopping,
        }
    }
}
</script>

<style>

</style>