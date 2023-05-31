<template>
  <div>


    <v-carousel  cycle height="600" hide-delimiters :show-arrows="false">
      <v-carousel-item v-for="carousel in filteredCarouselOnActive" :key="carousel" :src="carousel.imageUrl" :alt="carousel.name">
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

  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import useCarousel from '@/modules/useCarousel'

  const { carouselsData, getCarouselsData } = useCarousel()

  let filteredCarouselOnActive = computed(() => {
    return carouselsData.value.filter(i => i.isActive)
  })

  onMounted (() => {
    getCarouselsData()
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
</style>