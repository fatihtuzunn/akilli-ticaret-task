<template>
    <div class="price">
    <p class="price__endprice">${{item.price}}</p>
<!--         <p class="price__endprice">${{item.price}}<span class="price__porcent">{{item.porcent}}%</span></p>
 -->        <!-- <div class="price__price"><p class="price__pricePara">${{item.price}}</p></div> -->
    </div>
</template>

<script>
export default {
    props:{
        item:{
            type:Object,
            required:true
        }
    }
}
</script>

<style>

</style>