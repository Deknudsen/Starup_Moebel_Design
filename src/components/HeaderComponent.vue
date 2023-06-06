<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <v-img src="../assets/image/Starup_Moebel_Design.svg" alt="Starup Møbel Design Logo"></v-img>
      </router-link>
    </div>
    <div class="headerlinks" v-if="!isLoggedin">
      <router-link class="underlineAnimation" to="/"> Forside </router-link>
      <router-link class="underlineAnimation" to="/buildabed"> Build-a-Bed </router-link>
      <router-link class="underlineAnimation" to="/produkter"> Produkter </router-link>
      <router-link class="underlineAnimation" to="/maleguide"> Maleguide </router-link>
      <router-link class="underlineAnimation" to="/om-os"> Om os </router-link>
      <router-link class="underlineAnimation" to="/kontakt"> Kontakt </router-link>
    </div>
    <div class="headerlinks" v-else>
      <router-link class="underlineAnimation" to="/adminHome">Forside</router-link>
      <router-link class="underlineAnimation" to="/adminParts">Build-a-Bed</router-link>
      <router-link class="underlineAnimation" to="/adminProducts"> Produkter </router-link>
      <router-link class="underlineAnimation" to="/maleguide"> Maleguide </router-link>
      <router-link class="underlineAnimation" to="/om-os"> Om os </router-link>
      <router-link class="underlineAnimation" to="/kontakt"> Kontakt </router-link>
      <button class="underlineAnimation logOutButton"  @click="logOut">Log out</button>
    </div>
  </header>
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
    if (user) {
      isLoggedin.value = true
    }
    else {
      isLoggedin.value = false
    }

  })
})

</script>

<style lang="scss" scoped>
//@import "@/assets/style/variables";

header {
  display: flex;
  justify-content: right;
  align-items: center;
  height: 90px;
  width: 100%;
  background-color: $Tertiary;
}

.logo {
  width: 16%;
  height: 80px;
  padding: 7px;
}

.headerlinks {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;


  a, .logOutButton {
    padding: 0 50px;
    text-decoration: none;
    color: black;
    font-family: $TitleFont;
  }

  .router-link-exact-active {
    color: $Secondary;
  }
}

.underlineAnimation {
    display: inline-block;
    position: relative;
}
  
.underlineAnimation:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: $Secondary;
    transition: transform 0.25s ease-out;
}
  
.underlineAnimation:hover:after {
    transform: scaleX(1);
}
</style>