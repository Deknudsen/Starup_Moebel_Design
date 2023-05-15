<template>
    <div>    
        <div v-for="parts in partsData" :key="parts">
            <div>
                <div>
                    <h2>{{parts.title}}</h2>
                </div>
                <div>
                    <img :src="parts.url" :alt="parts.name">
                </div>
            </div>
        </div>
        <div class="createBox">
            <v-text-field class="inputField" variant="solo" label="Title" v-model="addPartInfo.title"></v-text-field>
            <v-text-field class="inputField" variant="solo" label="Description" v-model="addPartInfo.description"></v-text-field>
            <v-file-input class="inputField" variant="solo" label="Image input" @change="handleFileUpload"></v-file-input>
            <v-btn class="inputBtn" @click="uploadImage(selectedFile, addPartInfo)">Create</v-btn>            
        </div>
    </div>
</template>
    
<script setup>
import { onMounted, ref } from 'vue'
import useParts from '@/modules/useParts'
    
    let addPartInfo = ref({})
    let selectedFile = ref({})

    const { partsData, getPartsData, uploadImage } = useParts()

    const handleFileUpload = (event) => {
        selectedFile = event.target.files[0]
    }
        
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