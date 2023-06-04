<template>
    <div class="toBeDeletedBox">
        <div class="partContainer" v-for="part in filteredPostOnId" :key="part">
            <div class="leftBox">
                <div class="partPictureBox">
                    <v-img class="partPageImg" :src="showImage || part.imageUrl" alt="placehold" />
                </div>
            </div>

            <div class="rightBox">
                <div class="btnBox">
                    <button @click="editPart(selectedFile, part)">Tilføj</button>
                    <button @click="canclePart()">Annuller</button>
                    <button @click="deletePart(part)">Slet</button>
                </div>
                <v-file-input variant="solo" label="Image input" @change="handleFileUpload"
                    accept="image/png, image/jpeg, image/jpg, image/bmp"></v-file-input>
                <div class="partTitle">
                    <input type="text" v-model="part.title">
                </div>
                <div class="customText">
                    <textarea type="text" v-model="part.text"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { getAuth, onAuthStateChanged } from '@firebase/auth'
import useParts from '@/modules/useParts'
import router from '@/router/index.js'

let selectedFile = ref({})
let showImage = ref('')

const { getPartsData, partsData, editPart, deletePart } = useParts()

const route = useRoute()
const routeId = ref(route.params.id)

let filteredPostOnId = computed(() => {
    return partsData.value.filter(i => i.id == routeId.value)
})

const canclePart = () => {
    router.push({ path: '/adminParts' })
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

let auth
const isLoggedin = ref(false)
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedin.value = true
            getPartsData()
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
    min-height: 800px;
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