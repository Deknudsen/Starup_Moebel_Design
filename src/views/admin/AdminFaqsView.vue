<template>
    <div>
        <div v-for="faqs in faqsData" :key="faqs">
    
    <div>
        <h2>{{faqs.title}}</h2>
    </div>
</div>
<div class="createBox">
            <v-text-field class="inputField" variant="solo" label="Title" v-model="addFaqInfo.title"></v-text-field>
            <v-text-field class="inputField" variant="solo" label="Description" v-model="addFaqInfo.description"></v-text-field>
        
            <v-btn class="inputBtn" @click="addFaq(addFaqInfo)">Create</v-btn>            
        </div>

    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import useFaqs from '@/modules/useFaqs'
    

    let addFaqInfo = ref({})    
    const { addFaq, faqsData, getFaqsData } = useFaqs()
    
        
    
    onMounted(() => {
        getFaqsData()
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