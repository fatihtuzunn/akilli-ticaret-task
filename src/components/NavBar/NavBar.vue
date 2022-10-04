<template>
    <div class="nav nav--mobile">
        <!--start nav-->

        <div class="nav__desktop">
            <!--nav__desktop-->
            <div class="nav__primary">
                <ul class="social">
                    <li>
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-brands fa-facebook" />
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-brands fa-youtube" />
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-brands fa-instagram" />
                    </li>



                </ul>
                <ul>


                    <li><a href="#">Yardım</a></li>
                    <li><a href="#">Blog</a></li>


                </ul>



            </div>
            <div class="nav__sec">
                <div class="nav__logo nav__logo-desktop">
                    <img src="https://commons.wikimedia.org/wiki/File:Product_Red.svg" alt="logo-svg">
                </div>


                <div class="nav__search">
                    <input type="text" name="" id="" class="searchControl" placeholder="Ne aramıştınız...">
                    <button class="searchBtn">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    </button>
                </div>


                <div class="nav__cart nav__cart--desktop">
                    
                    
                    <div class="login " > Giriş yap <span>veya üye ol</span></div>
                    
                    <div class="nav__cartShopping nav__cartShopping--desktop">

                        <div class="nav__shoppingIconCart" @click="changeMiniCard">
                            <img src="@/assets/images/icon-cart.svg" alt="icon-cart" >

                            <h4>Sepet</h4>
                        </div>

                        <span class="nav__cartNumber nav__cartNumber--desktop" @click="changeMiniCard"
                            v-if="items.length>0">{{items.length}}</span>
                    </div>


                </div>

                <div class="nav__miniCard nav__miniCard--desktop" v-if="showMiniCard">
                    <MiniCard />
                </div>
            </div>

            <div class="nav__ter">


                <nav class="nav__links">
                    <router-link to="/" class="nav__link nav__link--noSpace">Kadın</router-link>
                    <router-link to="/" class="nav__link">Erkek</router-link>
                    <router-link to="/" class="nav__link">Elektronik</router-link>
                    <router-link to="/" class="nav__link">Gıda</router-link>
                    <router-link to="/" class="nav__link">Aksesuar</router-link>
                </nav>

            </div>


        </div>
        <!--end nav__desktop-->

        <div class="nav__mobile">
            <!--nav__mobile-->

            <div class="nav__container">
                <div class="nav__mobileContainer">

                    <div :class="showMenu ? 'hambu hambu--active':'hambu'" @click="toggleMenu"></div>

                    <div class="nav__mobileLinksContainer" v-if="showMenu">
                        <div class="nav__mobileLinks">
                            <nav class="nav__linksMobile">
                                <router-link to="/" class="nav__linkMobile">Kadın</router-link>
                                <router-link to="/" class="nav__linkMobile">Erkek</router-link>
                                <router-link to="/" class="nav__linkMobile">Elektronik</router-link>
                                <router-link to="/" class="nav__linkMobile">Gıda</router-link>
                                <router-link to="/" class="nav__linkMobile">Aksesuar</router-link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <!--end nav__mobile-->

            <div class="nav__logo nav__logo--mobile">
                <img src="https://commons.wikimedia.org/wiki/File:Product_Red.svg" alt="logo-svg">
            </div>

            <div class="nav__cart">
                <div class="nav__cartShopping">
                    <img src="@/assets/images/icon-cart.svg" alt="icon-cart" @click="changeMiniCard">
                    <span class="nav__cartNumber" v-if="items.length>0">{{items.length}}</span>
                </div>

                <div class="nav__avatarImg">
                    Üye ol
                </div>
            </div>

            <div class="nav__miniCard" v-if="showMiniCard">
                <MiniCard />
            </div>

        </div>
        <!--end nav__mobile-->

    </div>
    <!--end nav-->
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import MiniCard from '@/components/MiniCard/MiniCard.vue'
export default {
    name: "NavBar",
    components: {
        MiniCard
    },
    setup() {
        const showMenu = ref(false)
        const store = useStore()
        const items = computed(() => store.state.items)
        const showMiniCard = ref(false)

        const changeMiniCard = () => {
            showMiniCard.value = !showMiniCard.value
        }

        const toggleMenu = () => {
            showMenu.value = !showMenu.value
        }


        return {
            showMenu,
            items,
            showMiniCard,
            changeMiniCard,
            toggleMenu
        }
    }
}
</script>

<style>

</style>