<template>
    <div class="toBeDeletedBox">
        <div class="productContainer" v-for="product in filteredProductOnId" :key="product">

            <div class="leftBox">
                <div class="productPictureBox">
                    <v-img class="productPageImg" :src="product.imageUrl" alt="placehold" cover></v-img>
                </div>
            </div>

            <div class="rightBox">
                <div class="productTitle">
                    <h1> {{ product.title }} </h1>
                </div>
                <div class="customText">
                    <p> {{ product.text }} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import useProducts from '@/modules/useProducts'


const { productsData, getProductsData } = useProducts()

onMounted(() => {
    getProductsData()
})

const route = useRoute()
const routeId = ref(route.params.id)

let filteredProductOnId = computed(() => {
    return productsData.value.filter(i => i.id == routeId.value)
})

</script>


<style lang="scss" scoped>
.toBeDeletedBox {
    display: flex;
}

.productContainer {
    display: flex;
}

.leftBox {
    display: flex;
}

.productPictureBox {
    height: 800px;
    width: 750px;

    .productPageImg {
        height:100%
    }
}

.rightBox {
    margin: 130px;
}

.productTitle {
    font-family: $TitleFont;
    font-size: 36px;
    color: $Black;
}

.customText {
    font-family: $MainFont;
    font-size: 16px;
    color: $Black;

}
</style>