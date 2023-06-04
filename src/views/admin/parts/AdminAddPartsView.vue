<template>
    <div class="toBeDeletedBox">
        <form class="partContainer" >
            <div class="leftBox">
                <div class="partPictureBox">
                    <v-img class="partPageImg" :src="showImage || require('@/assets/placehold.png')" alt="placehold" />
                </div>
            </div>

            <div class="rightBox">
                <div class="btnBox">
                    <button @click="addPart(selectedFile, addPartInfo)">Tilføj</button>
                    <button @click="canclePart()">Annuller</button>
                </div>
                <v-file-input variant="solo" label="Image input" @change="handleFileUpload"
                accept="image/png, image/jpeg, image/jpg, image/bmp"></v-file-input>
                <div class="partTitle">
                    <input type="text" v-model="addPartInfo.title">
                </div>
                <div class="customText">
                    <textarea type="text" v-model="addPartInfo.text"></textarea>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged } from '@firebase/auth'
import router from '@/router/index.js'
import useParts from '@/modules/useParts'

let addPartInfo = ref({})
let selectedFile = ref({})
let showImage = ref('')

const { addPart } = useParts()

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

const canclePart = () => {
    router.push({ path: '/adminParts' })
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

.partContainer {
    display: flex;
    
}

.partPictureBox {
    height: auto;
    width: 750px;
}

.rightBox {
    margin: 130px;
}

.partTitle {
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