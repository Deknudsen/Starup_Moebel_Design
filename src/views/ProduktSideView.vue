<template>
    <div class="toBeDeletedBox">
    <!-- <div class="productContainer" v-for="product in filteredPostOnId" :key="product"> -->
        <div class="leftBox">
            <div class="productPictureBox">
                <v-img class="productPageImg" src="../assets/placehold.png" alt="placehold" /> 
            </div>
        </div>

        <div class="rightBox">
             <div class="productTitle"> <!-- <h1> {{product.productTitle}} </h1> --> Product Title
                    
            </div>
            <div class="customText"> loremipsumloremimpsum </div>
        </div>
    <!-- </div> -->
    </div>

</template>

<script setup>

/* import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';


const { posts, getPostsData } = usePosts()

onMounted(() => {
    getPostsData()
})

const route = useRoute()
const routeId = ref(route.params.id)

let filteredPostOnId = computed(() => {
    return posts.value.filter(i => i.id == routeId.value)
})
 */
</script>


<style lang="scss" scoped>
    
.toBeDeletedBox {
    display: flex;
}
.leftBox {
    display: flex;
}

.productPictureBox {
    height: auto;
    width: 750px;
}

.rightBox {
    margin: 130px;
}

.productTitle {
    font-family: $TitleFont;
    font-size: 36px;
    color: $Black;
}

.customText {
    font-family: $MainFont;
    font-size: 16px;
    color: $Black;

}

</style>