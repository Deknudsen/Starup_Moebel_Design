import { ref } from 'vue'
import { db } from '../firebase.js'
import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore'

const useTextbox = () => {

    const textboxData = ref([])

    const textboxDataRef = collection(db, "textbox")

    const getTextboxData = () => {
        onSnapshot(textboxDataRef, (snapshot) => {
            textboxData.value = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id,
                }
            })
        })
    }

    const getHomepageTextboxData = () => {
        onSnapshot(textboxDataRef.orderBy("number"), (snapshot) => {
            textboxData.value = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id,
                }
            }).filter(i => i.underside == "Homepage")
        })
    }

    const updateTextbox = async( editTextboxInfo ) => {
        await updateDoc(doc(textboxDataRef, editTextboxInfo.id), {
            text: editTextboxInfo.text
        })
    }

    return {
        textboxData,
        getTextboxData,
        getHomepageTextboxData,
        updateTextbox,
    }
}

export default useTextbox