import { ref } from 'vue'
import { db } from '../firebase.js'
import { collection, doc, deleteDoc, onSnapshot, addDoc, updateDoc } from 'firebase/firestore'
import router from '@/router/index.js'

const useParts = () => {

    const partsData = ref([])

    const partsDataRef = collection(db, "parts")

    const getPartsData = () => {
        onSnapshot(partDataRef, (snapshot) => {
            partsData.value = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id,
                }
            })
        })
    }

    // Create a part
    const addPart = async (addPartsInfo) => {
        await addDoc(partDataRef, {
            title: addPartInfo.title,
            date: addPartInfo.date,
            description: addPartInfo.description
        }).then (() => {
            router.push({ path: '/adminParts' })
        })
    }

    // Edit and update an already made part
    const editPart = async (editPartInfo) => {
        await updateDoc(doc(partDataRef, editPartInfo.id), {
            title: editPartInfo.title,
            date: editPartInfo.date,
            description: editPartInfo.description
        }).then (() => {            
            router.push({ path: '/adminParts' })
        })
    }

    // Delete a part
    const deletePart = async (id) => {
        await deleteDoc(doc(db, "parts", id))
    }

    //Returning all functions made
    return {
        partsData,
        getPartsData,
        addPart,
        editPart,
        deletePart
    }
}

export default useParts