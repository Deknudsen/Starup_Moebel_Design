<template>
    <div>        
        <div class="createBox">
            <v-text-field class="inputField" variant="solo" label="Title" v-model="addPartInfo.title"></v-text-field>
            <v-text-field class="inputField" variant="solo" label="Description" v-model="addPartInfo.description"></v-text-field>
            <v-file-input class="inputField" variant="solo" label="Image input" @change="handleFileUpload" accept="image/png, image/jpeg, image/jpg, image/bmp"></v-file-input>
            <v-btn class="inputBtn" @click="addPart(selectedFile, addPartInfo)">Create</v-btn>            
        </div>
        <div class="partCartContainer">            
            <div class="partCart" v-for="part in partsData" :key="part">
                <div v-if="!part.editing">
                    <div>
                        <h2>{{ part.title }}</h2>
                    </div>
                    <div>
                        <p>{{ part.description }}</p>
                    </div>
                    <div>
                        <img class="cardImg" :src="part.imageUrl" :alt="part.name">
                    </div>
                    <div>
                        <button @click="enableEditing(part)">Edit</button>
                    </div>
                </div>
                <div v-else>
                    <v-text-field class="inputField" variant="solo" label="Title" v-model="part.updatedTitle"></v-text-field>
                    <v-text-field class="inputField" variant="solo" label="Description" v-model="part.updatedDescription"></v-text-field>
                    <v-file-input class="inputField" variant="solo" label="Image input"  accept="image/png, image/jpeg, image/jpg, image/bmp"></v-file-input>
                    <v-btn class="inputBtn" @click="uploadImage(selectedFile, addPartInfo)">Edit</v-btn> 
                    <div>
                        <button @click="cancelEditing(part)">cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import { onMounted, ref } from 'vue'
import useParts from '@/modules/useParts'
    
    let addPartInfo = ref({})
    let selectedFile = ref({})

    const { partsData, getPartsData, uploadImage, addPart, } = useParts()

    const handleFileUpload = (event) => {
        selectedFile = event.target.files[0]
    }

    const enableEditing = (part) => {
        part.editing = true
        part.updatedTitle = part.title
        part.updatedDescription = part.description
    }

    const cancelEditing = (editPartInfo) => {
        editPartInfo.editing = false
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
.partCartContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 10%;
    .partCart {
        width:22%;
        display: flex;
        .cardImg {
            max-height: 200px;
            width: 200px;
        }
    }
    &::after {
        //content: "";
        flex: auto;
    }
}

</style>