<template>
    <div>
        <div class="createBox">
            <v-text-field class="inputField" variant="solo" label="Question" v-model="addFaqInfo.question"></v-text-field>
            <v-text-field class="inputField" variant="solo" label="Answer" v-model="addFaqInfo.answer"></v-text-field>
        
            <v-btn class="inputBtn" @click="addFaq(addFaqInfo)">Create</v-btn>            
        </div>

        <div v-for="faqs in faqsData" :key="faqs">
            <v-card class="editOrDeleteCard">
                <h2>{{faqs.question}}</h2>
                <h3>{{faqs.answer}}</h3>
            
                <v-text-field class="inputField" variant="solo" label="Question" v-model="editFaqInfo.question"></v-text-field>
                <v-text-field class="inputField" variant="solo" label="Answer" v-model="editFaqInfo.answer"></v-text-field>

                <v-btn class="inputBtn" @click="editFaq(faqsData.id)">Edit</v-btn>
            </v-card>

        </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import useFaqs from '@/modules/useFaqs'
    

    let addFaqInfo = ref({})    
    const { addFaq, faqsData, getFaqsData, editFaq } = useFaqs()
    
        
    
    onMounted(() => {
        getFaqsData()
    })

</script>

<style lang="scss" scoped>

    .editOrDeleteCard {
        width: 900px;
        height: 300px;
        background-color: rgb(230, 226, 224);
    }
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