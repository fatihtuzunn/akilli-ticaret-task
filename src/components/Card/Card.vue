<template>
    <div class="card">
        <div class="card__img">
            <img :src="item.image" class="card__image" loading="lazy" :alt="item.title">
        </div>

        <div class="card__detail">
            <h3 class="card__detail-title">{{item.title}}</h3>
            <div class="card__detail-price">
                <Price :item="item" />

            </div>


            <div class="card__detail-hover">


                <a @click="addShopping" class="hover-butons hover-butons-sepet" title="Sepete Ekle">
                    <img src="../../assets/images/icon-cart.svg" alt="icon-cart" class="nav__shoppingIconCart">
                    Sepete Ekle
                </a>

                <button class="hover-butons hover-butons-fav" title="Favorilere Ekle">
                    <i class="akilli akilli-heart" aria-hidden="true"></i>
                </button>

                <a href="" title="Karşılaştır" class="hover-butons hover-butons-karsilastir">
                    <i class="ion-ios-settings" aria-hidden="true"></i>
                </a>


            </div>


        </div>

        
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex'
import Price from '../Price/Price.vue'

export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    components: {
        Price
    },
    setup(props) {

        const count = ref(0)
        const store = useStore()
        const add = (product) => store.commit('add', product)

        const addShopping = () => {


            const newOrder = {
                name: props.item.title,
                img: props.item.image,
                price: props.item.price,
                count: 1,
            }

            add(newOrder)



        }


        return {
            count,
            addShopping,
        }
    }
}
</script>

<style>
    .card{
        border: 1px solid ;
    }
.card__detail {
    
    width: 100%;
    min-height: 135px;
    padding: 0;
}


.card__detail-hover {
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
}

.card:hover .card__detail-hover{
    visibility: visible;
    opacity: 1;

}
</style>