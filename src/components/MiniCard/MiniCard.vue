<template>
    <div class="nav__list nav__list--mobile">

                        <p class="nav__subtitle">Sepet</p>

                        <div class="nav__listCartNotEmpty" v-if="items.length>0">

                            <div class="nav__listShopping" v-for="(item,index) in items" :key="index"><!--nav__listShopping-->

                                    <div class="nav__listShoppingImg">
                                        <img :src="item.img" :alt="item.name" class="nav__imgShopping">
                                    </div>

                                    <div class="nav__listShoppingDetails">
                                        <p class="nav__listShoppingName">{{item.name}}</p>
                                        <p class="nav__listShoppingPrices">${{item.price}} x {{item.count}} <span class="nav__listShoppingPrices nav__listShoppingPrices--strong">${{parseInt(item.price * item.count).toFixed(2)}}</span> </p>
                                    </div>

                                    <div class="nav__iconDelete">
                                         <button @click="deleteitems(index)" class="nav__listShoppingDelete"><img src="@/assets/images/icon-delete.svg" alt="icon-delete" class="nav__listShoppingDeleteIcon"></button>
                                    </div>
                                    
                            </div><!--nav__listShopping-->

                        </div>

                        <div class="nav__listCartEmpty" v-else>
                                <p class="nav__listCartEmptyPara">Sepetiniz boş!</p>
                        </div>

                        <div class="nav__check" v-if="items.length>0">
                                <button @click="restart" class="nav__checkBtn">Sepeti Boşalt</button>
                        </div>

    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
    name:"NavBar",
    computed:{

    },
    setup() {
        const store = useStore()
        const items = computed(()=> store.state.items)
        const deleteitems = (index) => store.commit('deleteitems',index)
        const restart = () => store.commit('restart')
        return {
            items,
            deleteitems,
            restart
        }
    }
}
</script>

<style>

</style>