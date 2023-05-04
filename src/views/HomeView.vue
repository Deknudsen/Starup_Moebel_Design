<template>
  <!-- <HelloWorld /> -->

<!--   <div class="heroBox">
    <v-img src="../assets/frontpagepic.jpg" alt="placehold img" gradient="to top right, #9F755155, #D1A67C55"></v-img>
  </div> -->

  <v-carousel cycle height="600" hide-delimiters :show-arrows="false">
    <v-carousel-item
    src="../assets/woodcut.jpg" alt="placehold img" gradient="to top right, #9F755180, #D1A67C80"
    cover>    
    <router-link to="/senge" class="carouselLink">
      <div class="carouselBoxOne"> 
        <div class="carouselBoxText"> 
          <p>huuhhuuh</p> 
        </div>
      </div>
    </router-link>
  </v-carousel-item>
<!-- </div> -->

  <v-carousel-item
    src="../assets/painting.jpg" alt="placehold img" gradient="to top right, #9F755180, #D1A67C80"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../assets/child.jpg" alt="placehold img" gradient="to top right, #9F755180, #D1A67C80"
    cover
  ></v-carousel-item>
</v-carousel>

</template>

<script>
<<<<<<< Updated upstream
=======
/* import { defineComponent } from 'vue';
>>>>>>> Stashed changes

// Components


<<<<<<< Updated upstream
=======
  components: {
    HelloWorld,
  },
}); */
>>>>>>> Stashed changes
</script>

<style lang="scss" scoped>
  
.v-carousel-item {
  filter: grayscale(80%);
}
.carouselLink {
  width:100%;
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