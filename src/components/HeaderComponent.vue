<template>
  <header>
    <div class="logo"> 
        <router-link to="/"> Logo </router-link>
    </div>
    <div class="headerlinks">
        <router-link to="/"> Forside </router-link>
        <router-link to="/buildabed"> Build-a-Bed </router-link>
        <router-link to="/produkter"> Produkter </router-link>
        <router-link to="/maleguide"> Maleguide </router-link>
        <router-link to="/om-os"> Om os </router-link>
        <router-link to="/kontakt"> Kontakt </router-link>
        <button class="logOutButton" v-if="isLoggedin" @click="logOut">Log out</button>
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
//@import "@/assets/style/variables";

  header {
    display: flex;
    justify-content: right;
    align-items: center;
    height: 90px;
    width: 100%;
    background-color: $White;
  }

  .logo {
    width:16%;
  }
  .headerlinks {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;


    a, .logOutButton {
        padding: 0 50px 0 50px;
        text-decoration: none;
        color: black;
        font-family: $TitleFont;
    } 
    .logOutButton {
      color:red;
    }

    .router-link-exact-active {
        color: $Secondary;
  }
}
</style>