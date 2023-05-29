<template>
    <v-container v-for="carousel in carouselsData" :key="carousel">
        <v-card class="carouselCard">
            <div v-if="!carousel.editing">
                <img :src="carousel.imageUrl" :alt="carousel.name"/>
                <div class="cardTextArea">
                    <h2>Tekst på billedet: {{ carousel.text }}</h2>
                    <h2>Linker til: <a :href="carousel.link">{{ carousel.link }}</a></h2>
                    <h2>
                        Aktiver Slide
                        <input type="checkbox" :value="carousel.isActive">
                    </h2>
                </div>
                <div class="cardButtons">
                    <button class="editBtn" @click="enableEditing(carousel)">Edit</button>
                </div>
            </div>
            <div v-else>
                <img :src="carousel.imageUrl" :alt="carousel.name">
                <div class="cardTextArea">
                    <div>
                        <label for="sliderText">Tekst på billedet: </label>
                        <input type="text" name="sliderText" :value="carousel.updatedText">
                    </div>
                    <input type="text" :value="carousel.link">
                </div>
                <div class="cardButtons">
                    <button class="editBtn" @click="cancelEditing(carousel)">Annuller</button>
                </div>
            </div>
        </v-card>
    </v-container>
    <v-container>
        <v-card>
            <v-img :src="showImage"></v-img>
            <v-file-input variant="solo" label="Image input" @change="handleFileUpload" accept="image/png, image/jpeg, image/jpg, image/bmp"></v-file-input>
            <v-text-field variant="solo" label="Slider Text" v-model="addCaroselInfo.text"></v-text-field>
            <v-text-field variant="solo" label="Slider Link" v-model="addCaroselInfo.link"></v-text-field>
            <v-btn @click="addCarosel(selectedFile, addCaroselInfo)">Opret</v-btn>
        </v-card>
    </v-container>
</template>

<script setup>
import { onMounted, ref} from 'vue'
import useCarousel from '@/modules/useCarousel'

    let addCaroselInfo = ref({})
    let selectedFile = ref({})
    let showImage = ref({})

    const { carouselsData, getCaroselsData, addCarosel } = useCarousel()

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

    const cancelEditing = (carousel) => {
        carousel.editing = false
    }

    onMounted(() => {
        getCaroselsData()
    })

</script>

<style lang="scss" scoped>
.carouselCard {
    width: 90%;
    display: flex;
    
    div {
        display: flex;

        img {
            height:216px;
            width:384px;
            object-fit: cover;
        }

        .cardTextArea {
            display: flex;
            flex-direction: column;
        }
    }

    
        
}


</style>