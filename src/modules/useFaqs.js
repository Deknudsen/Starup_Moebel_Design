import { ref } from 'vue'
import { db } from '../firebase.js'
import { collection, doc, deleteDoc, onSnapshot, addDoc, updateDoc } from 'firebase/firestore'
import router from '@/router/index.js'

const useFaqs = () => {

    const faqsData = ref([])

    const faqDataRef = collection(db, "faqs")

    const getFaqsData = () => {
        onSnapshot(faqDataRef, (snapshot) => {
            faqsData.value = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id,
                }
            })
        })
    }

    // Create a FAQ
    const addFaq = async (addFaqInfo) => {
        await addDoc(faqDataRef, {
            question: addFaqInfo.question,
            answer: addFaqInfo.answer,
        }).then (() => {
            router.push({ path: '/adminFaqs' })
        })
    }

    // Edit and update an already made FAQ
    const editFaq = async (editFaqInfo) => {
        await updateDoc(doc(faqDataRef, editFaqInfo.id), {
            question: editFaqInfo.question,
            answer: editFaqInfo.answer,
        }).then (() => {            
            router.push({ path: '/adminFaqs' })
        })
    }

    const updateSingleItem = async(id) => {

        await updateDoc(doc(faqDataRef, id), {
          question: faqsData.value.find(faq => faq.id === id).question,
          answer: faqsData.value.find(faq => faq.id === id).answer,
        });
        } 

    // Delete a FAQ
    const deleteFaq = async (id) => {
        await deleteDoc(doc(db, "faqs", id))
    }

    //Returning all functions made
    return {
        faqsData,
        getFaqsData,
        addFaq,
        editFaq,
        updateSingleItem,
        deleteFaq
    }
}

export default useFaqs