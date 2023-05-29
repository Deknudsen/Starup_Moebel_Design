import { ref } from 'vue'
import { db, storage } from '../firebase.js'
import { collection, doc, deleteDoc, onSnapshot, addDoc, updateDoc } from 'firebase/firestore'
import { uploadBytes, ref as storageRef, getDownloadURL } from "firebase/storage"

const useCarousel = () => {

    const carouselsData = ref([])

    const carouselDataRef = collection(db, "carousel")
    

    const getCaroselsData = () => {
        onSnapshot(carouselDataRef, (snapshot) => {
            carouselsData.value = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id,
                }
            })
            
        })
    }

    // Create a carousel
    const addCarosel = async (selectedFile, addCaroselInfo) => {
        console.log(selectedFile.name)
        const uploadImageRef = storageRef(storage, "images/carousel/" + selectedFile.name)
        const uploadTask = uploadBytes(uploadImageRef, selectedFile)
        await uploadTask
        const downloadURL = await getDownloadURL(uploadImageRef)
        await addDoc(carouselDataRef, {
            text: addCaroselInfo.text,
            link: addCaroselInfo.link,
            name: selectedFile.name,
            imageUrl: downloadURL,
            isActive: false,
        })
        
    }

    // Edit and update an already made part
    const editCarosel = async (selectedFile, editCaroselInfo) => {
        const uploadImageRef = storageRef(storage, "images/carousel/" + selectedFile.name)
        const uploadTask = uploadBytes(uploadImageRef, selectedFile)
        await uploadTask
        const downloadURL = await getDownloadURL(uploadImageRef)
        await updateDoc(doc(carouselDataRef, editCaroselInfo.id), {
            text: editCaroselInfo.text,
            link: editCaroselInfo.link,
            name: selectedFile.name,
            imageUrl: downloadURL,
        })
    }


    // Delete a carousel
    const deleteCarosel = async (id) => {
        await deleteDoc(doc(db, "carousel", id))
    }

    //Returning all functions made
    return {
        carouselsData,
        getCaroselsData,
        addCarosel,
        editCarosel,
        deleteCarosel
    }
}

export default useCarousel