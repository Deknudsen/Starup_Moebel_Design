<template>
    <div>    
        <div v-for="parts in partsData" :key="parts">
    
                <div>
                    <h2>{{parts.title}}</h2>
                </div>
        </div>
        <div class="createBox">
            <v-text-field class="inputField" variant="solo" label="Title" v-model="addPartInfo.title"></v-text-field>
            <v-text-field class="inputField" variant="solo" label="Description" v-model="addPartInfo.description"></v-text-field>
        
            <v-btn class="inputBtn" @click="addPart(addPartInfo)">Create</v-btn>            
        </div>
    </div>
</template>
    
<script setup>
import { onMounted, ref } from 'vue'
import useParts from '@/modules/useParts'
    
    let addPartInfo = ref({})    
    const { addPart, partsData, getPartsData } = useParts()
        
    onMounted(() => {
        getPartsData()
    })
    
</script>
    
<style lang="scss" scoped>
    .createBox {
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