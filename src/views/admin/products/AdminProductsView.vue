<template>
    <div>
        <div class="sengeHeader"> Her vises tidligere produkter, som vi har produceret. </div>
        <button @click="addProductSite">Tilføj Produkt</button>

        <div class="gallery"> 
          <div class="imageBox" v-for="product in productsData" :key="product">
            <router-link :to="{ name:'admin edit products', params:{ id : product.id }}">
              <div class="cardBox">
                <h2>{{ product.title }}</h2>
                <div class="galleryImage">
                 <img :src="product.imageUrl" :alt="product.name" /> 
                </div>
              </div>
            </router-link>
            <!-- <img :src="product.imageUrl" :alt="product.name"> -->
            <!-- <div class="cardBox" @click="updatePage(product)">
                <h2>{{ product.name }}</h2>
                <div class="galleryImage">
                 <img :src="product.imageUrl" :alt="product.name" /> 
                </div>
            </div> -->
          </div>
        </div>
     </div> 

</template>

<script setup>
import { onMounted } from 'vue'
import useProducts from '@/modules/useProducts'
import router from '@/router'

    const { getProductsData, productsData } = useProducts()

    const addProductSite = () => {
        router.push({path: "/adminAddProducts"})
    }

    /* const updatePage = (product) => {
        router.push({ name: 'admin edit products', params: {id: product.id}})
    } */

    onMounted (() => {
        getProductsData()
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

.productCards {
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
        width:auto;
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