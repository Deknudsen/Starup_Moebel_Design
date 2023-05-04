<template>
    <div>
        <div class="editBox" v-for="part in filteredPartOnId" :key="part">
            <v-text-field class="inputField" variant="solo" label="Title" v-model="part.title"></v-text-field>
            <v-text-field class="inputField" variant="solo" label="Description" v-model="part.description"></v-text-field>
        
            <v-btn class="inputBtn" @click="editPart(part)">Edit</v-btn>
            <router-link to="/adminParts" >
                    <v-btn >Cancle</v-btn>
                </router-link>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import useParts from '@/modules/useParts'

//import { getAuth, onAuthStateChanged } from '@firebase/auth';
//import router from '@/router'

const { partsData, getPartsData, editPart } = useParts()


const route = useRoute()
const routeId = ref(route.params.id)

//let auth
//const isLoggedin = ref(false)

let filteredPartOnId = computed(() => {
    return partsData.value.filter(i => i.id == routeId.value)
})

 onMounted(() => {
    getPartsData()
    /*auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user) {
            getEventsData(),
            isLoggedin.value = true
        }
        else {
            router.push({ path: '/login'}),
            isLoggedin.value = false
        }
    })*/
}) 
    
</script>

<style lang="scss" scoped>
.editBox {
    width: 70%;
    margin:50px auto;

    .inputField {
        height: 50px;
        margin: 50px 0;
        
    }
    .inputBtn {
        margin: 50px 0;
    }

}
</style>