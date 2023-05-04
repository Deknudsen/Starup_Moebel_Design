<template>
    <div>
        <div class="hero">
            <div class="heroText"> Maleguide </div>
        <v-img class="maleguidePic" src="../assets/maleguide.jpg" alt="placehold img" gradient="to top right, #9F755155, #D1A67C55"></v-img>
      </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .hero {
        height: 400px;
        width: 100%;
    }

    .maleguidePic {
        filter: grayscale(80%);
        object-fit: cover;
        width: 100%;

    }
    
</style>