<template>
    <div>
        <div class="createBox">
            <v-text-field class="inputField" variant="solo" label="Question" v-model="addFaqInfo.question"></v-text-field>
            <v-text-field class="inputField" variant="solo" label="Answer" v-model="addFaqInfo.answer"></v-text-field>

            <v-btn class="inputBtn" @click="addFaq(addFaqInfo)">Create</v-btn>
        </div>

        <div v-for="faqs in faqsData" :key="faqs">
            <v-card class="editOrDeleteCard">
                <h2>Q: {{ faqs.question }}</h2>
                <h3>A: {{ faqs.answer }}</h3>

                <v-text-field class="inputField" variant="solo" label="Question" v-model="faqs.question"></v-text-field>
                <v-text-field class="inputField" variant="solo" label="Answer" v-model="faqs.answer"></v-text-field>

                <v-btn class="inputBtnEdit" @click="editFaq(faqs)">Edit</v-btn>
                <v-btn class="inputBtnDelete" @click="deleteFaq(faqs.id)">Delete</v-btn>
            </v-card>

        </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged } from '@firebase/auth'
import useFaqs from '@/modules/useFaqs'
import router from '@/router/index.js'


let addFaqInfo = ref({})
const { addFaq, faqsData, getFaqsData, editFaq, deleteFaq } = useFaqs()

let auth
const isLoggedin = ref(false)
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedin.value = true
            getFaqsData()
        }
        else {
            router.push({ path: '/login' })
            isLoggedin.value = false
        }
    })
})

</script>

<style lang="scss" scoped>
.editOrDeleteCard {
    background-color: rgb(247, 243, 242);
    padding: 20px;
    width: 50%;
    margin: 50px auto;

    h3 {
        padding-bottom: 30px;
    }

    .inputBtnEdit {
        margin-right: 30px;
        background-color: rgb(251, 251, 111);
    }

    .inputBtnDelete {
        margin-right: 30px;
        background-color: rgb(255, 91, 91);
    }

}

.createBox {
    width: 50%;
    margin: 50px auto;

    .inputField {
        height: 50px;
        margin: 50px 0;
    }

    .inputBtn {
        margin: 50px 0;
    }

}
</style>