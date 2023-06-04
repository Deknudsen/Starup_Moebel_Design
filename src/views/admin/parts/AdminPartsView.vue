<template>
    <div>
        <div class="sengeHeader"> Her vises de forskellige dele, som vi tilbyder til vores samle selv senge. </div>
        <button @click="addPartSite">Tilføj Del</button>

        <div class="gallery">
            <div class="imageBox" v-for="part in partsData" :key="part">
                <router-link :to="{ name: 'admin edit parts', params: { id: part.id } }">
                    <div class="cardBox">
                        <h2>{{ part.title }}</h2>
                        <div class="galleryImage">
                            <img :src="part.imageUrl" :alt="part.name" />
                        </div>
                    </div>
                </router-link>

            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged } from '@firebase/auth'
import useParts from '@/modules/useParts'
import router from '@/router'

const { getPartsData, partsData } = useParts()

const addPartSite = () => {
    router.push({ path: "/adminAddParts" })
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
.sengeHeader {
    height: 200px;
    width: 100%;
    font-family: $TitleFont;
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 70px 10% 130px 10%;
}

.partCards {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 50px;
    border: #272727;

}

a:link {
    text-decoration: none;
}

.cardBox {
    height: 450px;
    width: 400px;
    background-color: rgb(240, 240, 240);
    filter: drop-shadow(5px 5px 4px rgb(132, 115, 103));
    border-radius: 5px;
    border-style: solid 3px;
    border-color: rgb(218, 218, 218);
}

.galleryImage {
    height: 100%;
    width: auto;
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        object-fit: cover;
        width: auto;
        height: 100%;
        overflow: hidden;
    }
}

.infoBox {
    display: flex;
    justify-content: center;
    margin: 15px;
    flex-direction: column;
    text-align: left;
    color: #272727;
}
</style>