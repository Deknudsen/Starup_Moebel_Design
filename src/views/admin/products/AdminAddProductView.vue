<template>
    <div class="toBeDeletedBox">
        <form class="productContainer" >
            <div class="leftBox">
                <div class="productPictureBox">
                    <v-img class="productPageImg" :src="showImage || require('@/assets/placehold.png')" alt="placehold" />
                </div>
            </div>

            <div class="rightBox">
                <div class="btnBox">
                    <button @click="addProduct(selectedFile, addProductInfo)">Tilføj</button>
                    <button @click="cancleProduct()">Annuller</button>
                </div>
                <v-file-input variant="solo" label="Image input" @change="handleFileUpload"
                accept="image/png, image/jpeg, image/jpg, image/bmp"></v-file-input>
                <div class="productTitle">
                    <input type="text" v-model="addProductInfo.title">
                </div>
                <div class="customText">
                    <textarea type="text" v-model="addProductInfo.text"></textarea>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged } from '@firebase/auth'
import useProducts from '@/modules/useProducts'
import router from '@/router/index.js'

let addProductInfo = ref({})
let selectedFile = ref({})
let showImage = ref('')

const { addProduct } = useProducts()

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

const cancleProduct = () => {
    router.push({ path: '/adminProducts' })
}


let auth
const isLoggedin = ref(false)
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedin.value = true
        }
        else {
            router.push({ path: '/login' })
            isLoggedin.value = false
        }
    })
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