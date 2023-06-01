<template>
    <div class="toBeDeletedBox">
        <div class="productContainer" v-for="product in filteredPostOnId" :key="product">
            <div class="leftBox">
                <div class="productPictureBox">
                    <v-img class="productPageImg" :src="showImage || product.imageUrl" alt="placehold" />
                </div>
            </div>

            <div class="rightBox">
                <div class="btnBox">
                    <button @click="editProduct(selectedFile, product)">Tilføj</button>
                    <button @click="cancleProduct()">Annuller</button>
                    <button @click="deleteProduct(product)">Slet</button>
                </div>
                <v-file-input variant="solo" label="Image input" @change="handleFileUpload"
                accept="image/png, image/jpeg, image/jpg, image/bmp"></v-file-input>
                <div class="productTitle">
                    <input type="text" v-model="product.title">
                </div>
                <div class="customText">
                    <textarea type="text" v-model="product.text"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import useProducts from '@/modules/useProducts'
import router from '@/router/index.js'

let selectedFile = ref({})
let showImage = ref('')

const { getProductsData, productsData, editProduct, deleteProduct } = useProducts()

const route = useRoute()
const routeId = ref(route.params.id)

let filteredPostOnId = computed(() => {
    return productsData.value.filter(i => i.id == routeId.value)
})

const cancleProduct = () => {
    router.push({ path: '/adminProducts' })
}

const handleFileUpload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = () => {
        selectedFile.value = file
        showImage.value = reader.result
    }

    if (file) {
        reader.readAsDataURL(file)
    }
}

onMounted(() => {
    getProductsData()
})

</script>


<style lang="scss" scoped>
.toBeDeletedBox {
    display: flex;
}

.leftBox {
    display: flex;
}
.productContainer {
    display: flex;
    min-height: 800px;
}

.productPictureBox {
    height: auto;
    width: 750px;
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