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
            title: addFaqInfo.title,
            description: addFaqInfo.description,
        }).then (() => {
            router.push({ path: '/adminFaqs' })
        })
    }

    // Edit and update an already made FAQ
    const editFaq = async (editFaqInfo) => {
        await updateDoc(doc(faqDataRef, editFaqInfo.id), {
            title: editFaqInfo.title,
            description: editFaqInfo.description,
        }).then (() => {            
            router.push({ path: '/adminFaqs' })
        })
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
        deleteFaq
    }
}

export default useFaqs