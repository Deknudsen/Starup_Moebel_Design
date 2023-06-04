<template>
  <div>


    <v-carousel cycle height="600" hide-delimiters :show-arrows="false">
      <v-carousel-item v-for="carousel in carouselsData" :key="carousel" :src="carousel.imageUrl" :alt="carousel.name">
        <router-link :to="carousel.link" class="carouselLink">
          <div class="carouselBoxOne">
            <div class="carouselBoxText">
              <p>{{ carousel.text }}</p>
            </div>
          </div>
        </router-link>
      </v-carousel-item>

      <!-- <v-carousel-item src="@/assets/woodcut.jpg" alt="placehold img" gradient="to top right, #9F755180, #D1A67C80" cover>
        <router-link to="/senge" class="carouselLink">
          <div class="carouselBoxOne">
            <div class="carouselBoxText">
              <p>huuhhuuh</p>
            </div>
          </div>
        </router-link>
      </v-carousel-item>

      <v-carousel-item src="@/assets/painting.jpg" alt="placehold img" gradient="to top right, #9F755180, #D1A67C80"
        cover></v-carousel-item>

      <v-carousel-item src="@/assets/child.jpg" alt="placehold img" gradient="to top right, #9F755180, #D1A67C80"
        cover></v-carousel-item> -->
    </v-carousel>
    <router-link to="/adminCarosel">rediger slider</router-link>
    <div class="homeContainer">
      <div class="roundImage">
        <v-img class="roundImage" cover src="@/assets/lampe.png" alt="placehold img"></v-img>
      </div>
      <div class="homeText">
        <div class="homeTextTitle"> Starup Møbel Design </div>
        <textarea class="homeTextCustomText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum. </textarea>
        <div class="homeCTA"> Find inspiration fra vores tidligere produkter, eller tag kontakt til os og find ud af,
          hvordan vi imødekommer dine ønsker. </div>
        <div class="buttons">
          <router-link to="/produkter">
            <v-btn class="buttonGallery">
              Galleri
            </v-btn>
          </router-link>
          <router-link to="/kontakt">
            <v-btn class="buttonContact">
              Kontakt os
            </v-btn>
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, /*computed*/ } from 'vue'
import { getAuth, onAuthStateChanged } from '@firebase/auth'
import router from '@/router/index.js'
import useCarousel from '@/modules/useCarousel'
//import useTextbox from '@/modules/useTextbox'

const { carouselsData, getActiveCarouselsData } = useCarousel()
//const { textboxData, getHomepageTextboxData } = useTextbox()

let auth
const isLoggedin = ref(false)
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedin.value = true
      getActiveCarouselsData()
      //getHomepageTextboxData()
    }
    else {
      router.push({ path: '/login' })
      isLoggedin.value = false
    }
  })
})


</script>

<style lang="scss" scoped>
.v-carousel-item {
  filter: grayscale(80%);
}

.carouselLink {
  width: 100%;
  height: 100%;
}

.carouselBoxOne {
  display: flex;
  position: absolute;
}

.carouselBoxText {
  position: relative;
  left: 100px;
  top: 100px;
}

.homeContainer {
  margin-top: 150px;
  display: flex;
  justify-content: space-evenly;
}

.roundImage {
  width: 700px;
  height: 700px;
  border-radius: 50%;
}

.homeText {
  width: 500px;
}

.homeTextTitle {
  font-family: $TitleFont;
  font-size: 36px;
}

.homeTextCustomText,
.homeCTA {
  font-family: $MainFont;
  font-size: 22px;
  padding-top: 40px;
}</style>