<template>
    <div>
        <v-container v-for="carousel in carouselsData" :key="carousel">
            <v-card class="carouselCard">
                <div v-if="!carousel.editing">
                    <img :src="carousel.imageUrl" :alt="carousel.name" />
                    <div class="cardTextArea">
                        <h2>Tekst på billedet: {{ carousel.text }}</h2>
                        <h2>Linker til: <a :href="carousel.link">{{ carousel.link }}</a></h2>
                        <h2>
                            Aktiver Slide
                            <input type="checkbox" :checked="carousel.isActive" @click="changeActive(carousel)">
                        </h2>
                    </div>
                    <div class="cardButtons">
                        <button class="editBtn" @click="enableEditing(carousel)">Edit</button>
                        <button class="deleteBtn" @click="deleteCarousel(carousel)">Delete</button>
                    </div>
                </div>
                <div v-else>
                    <img :src="carousel.imageUrl" :alt="carousel.name">
                    <div class="cardTextArea">
                        <div>
                            <label for="sliderText">Tekst på billedet: </label>
                            <input type="text" name="sliderText" v-model="carousel.updatedText" >
                        </div>
                        <input type="text" v-model="carousel.updatedLink">
                    </div>
                    <div class="cardButtons">                        
                        <button class="editBtn" @click="sendEdit(carousel)">Edit</button>
                        <button class="editBtn" @click="cancelEditing(carousel)">Annuller</button>
                    </div>
                </div>
            </v-card>
        </v-container>
        <v-container>
            <v-card>
                <v-img :src="showImage"></v-img>
                <v-file-input variant="solo" label="Image input" @change="handleFileUpload"
                    accept="image/png, image/jpeg, image/jpg, image/bmp"></v-file-input>
                <v-text-field variant="solo" label="Slider Text" v-model="addCaroselInfo.text"></v-text-field>
                <v-text-field variant="solo" label="Slider Link" v-model="addCaroselInfo.link"></v-text-field>
                <v-btn @click="addCarousel(selectedFile, addCaroselInfo)">Opret</v-btn>
            </v-card>
        </v-container>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged } from '@firebase/auth'
import router from '@/router/index.js'
import useCarousel from '@/modules/useCarousel'

let addCaroselInfo = ref({})
let selectedFile = ref({})
let showImage = ref({})

const { carouselsData, getCarouselsData, addCarousel, editCarousel, deleteCarousel, editActive } = useCarousel()

const handleFileUpload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = () => {
        selectedFile.value = event.target.files[0]
        showImage.value = reader.result
    }

    if (file) {
        reader.readAsDataURL(file)
    }
}

const enableEditing = (carousel) => {
    carousel.editing = true
    carousel.updatedText = carousel.text
    carousel.updatedLink = carousel.link
}

const sendEdit = (carousel) => {
    editCarousel(carousel)
    carousel.editing = false
}

const cancelEditing = (carousel) => {
    carousel.editing = false
}

const changeActive = (carousel) => {
    if(carousel.isActive) {
        carousel.isActive = false
        editActive(carousel)
    }
    else {
        carousel.isActive = true
        editActive(carousel)
    }
}

let auth
const isLoggedin = ref(false)
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedin.value = true
      getCarouselsData()
    }
    else {
      router.push({ path: '/login' })
      isLoggedin.value = false
    }
  })
})


</script>

<style lang="scss" scoped>
.carouselCard {
    width: 90%;
    display: flex;

    div {
        display: flex;

        img {
            height: 216px;
            width: 384px;
            object-fit: cover;
        }

        .cardTextArea {
            display: flex;
            flex-direction: column;
        }
    }



}
</style>