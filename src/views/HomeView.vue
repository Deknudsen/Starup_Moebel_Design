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
    <v-img class="roundImage" cover src="../assets/lampe.png" alt="placehold img"></v-img>
  </div>
  <div class="homeText">
    <div class="homeTextTitle"> Starup Møbel Design </div>
    <div class="homeTextCustomText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
    <div class="homeCTA"> Find inspiration fra vores tidligere produkter, eller tag kontakt til os og find ud af, hvordan vi imødekommer dine ønsker. </div>
    <div class="buttons">
      <router-link to="/produkter">
        <v-btn class="buttonGallery">
          Galleri
        </v-btn>
      </router-link>
      <router-link to="/kontakt" > 
        <v-btn class="buttonContact">
          Kontakt os
        </v-btn>
      </router-link>
    </div>

  </div>
</div>

<div class="FSCboks">
<div class="FSCText">
    <div class="FSCtitle">
      Vi støtter miljøet
    </div>
    <div class="FSCtekst">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</div>
  <div class="FSClogo">
    <a href="https://dk.fsc.org/dk-da/intro-til-fsc/hvad-er-fsc">
      <v-img class="FSClogo" src="../assets/FSC.png" alt="placehold img"></v-img>
    </a> 
  </div>
</div>

</template>

<script setup>


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
}

.homeText {
  width: 500px;
}
.homeTextTitle {
  font-family: $TitleFont;
  font-size: 36px;
}
.homeTextCustomText, .homeCTA {
  font-family: $MainFont;
  font-size: 22px;
  padding-top: 40px;
}
.FSCboks {
  margin-top: 150px;
  display: flex;
  justify-content: space-evenly;
}
.FSClogo {
  width: 500px;
  height: 400px;
  margin-bottom: 150px;
  transition: scale 0.6s;
}

.FSClogo:hover {
  scale: 102%;
}
.FSCtitle {
  width: 700px;
  font-family: $TitleFont;
  font-size: 36px;
}

.FSCtekst {
  font-family: $MainFont;
  font-size: 22px;
  width: 700px;
  padding-top: 40px;

}

.buttons {
  display: flex;
  justify-content: space-between;
  height: 60px;
}

.buttonGallery, .buttonContact {
  width: 230px;
  height: 60px;
  background-color: $Secondary;
  border: solid 2px $Secondary;
  margin: 50px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: $TitleFont;
  color: $White;
  border-radius: 5px;
  font-size: 20px;
  transition: 0.25s;
  box-shadow: 0 6px 12px 0 rgba(0,0,0,0.2), 0 4px 16px 0 rgba(0,0,0,0.19);
}

.buttonGallery {
  background-color: $Primary;
  border: solid 2px $Primary;
}
.buttons {
  a {
    text-decoration: none;
  }
}

.buttonContact:hover {
  background-color: $Tertiary;
  color: $Black;
  border: solid 2px $Secondary;
}

.buttonGallery:hover {
  background-color: $Tertiary;
  color: $Black;
  border: solid 2px $Primary;

}

</style>