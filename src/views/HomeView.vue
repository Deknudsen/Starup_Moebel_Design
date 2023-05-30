<template>


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

  <v-carousel-item
    src="../assets/painting.jpg" alt="placehold img" gradient="to top right, #9F755180, #D1A67C80"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../assets/child.jpg" alt="placehold img" gradient="to top right, #9F755180, #D1A67C80"
    cover
  ></v-carousel-item>
</v-carousel>

<div class="homeContainer">
  <div class="roundImage">
    <v-img class="roundImage" cover src="../assets/cat.jpg" alt="placehold img" gradient="to top right, #9F755155, #D1A67C55"></v-img>
  </div>
  <div class="homeText">
    <div class="homeTextTitle"> Starup Møbel Design </div>
    <div class="homeTextCustomText"> somethingloremipsum </div>
  </div>
</div>

        <button v-if="isLoggedin">
              <v-btn @click="logOut()">
              Logout
            </v-btn>
        </button>

</template>

<script setup>

import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { ref, onMounted } from 'vue'
import useUser from '../modules/useUsers'
const { logOut } = useUser()
let auth
const isLoggedin = ref(false)
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user) {
            isLoggedin.value = true
        }
        else {
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
.homeContainer {
  margin-top: 150px;
  display: flex;
  justify-content: space-evenly;
}
.roundImage {
  width: 700px;
  height: 700px;
  border-radius: 50%;
  margin-bottom: 250px;
}

.homeText {
  width: 500px;
}
.homeTextTitle {
  font-family: $TitleFont;
  font-size: 36px;
}
.homeTextCustomText {
  font-family: $MainFont;
  font-size: 20px;
  padding-top: 40px;
}
 
.buttonTest {
  height: 200px;
  width: 400px;
  background-color: red;
}
</style>