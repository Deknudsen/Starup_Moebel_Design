<template>
  <header>
    <div class="logo"> 
        <router-link to="/"> Logo </router-link>
    </div>
    <div class="headerlinks">
        <router-link to="/"> Forside </router-link>
        <router-link to="/buildabed"> Build-a-Bed </router-link>
        <router-link to="/senge"> Senge </router-link>
        <router-link to="/maleguide"> Maleguide </router-link>
        <router-link to="/om-os"> Om os </router-link>
        <router-link to="/kontakt"> Kontakt </router-link>
        </div>
  </header>
</template>

<script setup>



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


    a {
        padding: 0 50px 0 50px;
        text-decoration: none;
        color: black;
        font-family: $TitleFont;
    }

    .router-link-exact-active {
        color: rgb(184, 124, 11);
  }
}
</style>