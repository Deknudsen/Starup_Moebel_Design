import { ref } from 'vue'
import { db, storage } from '../firebase.js'
import { collection, doc, deleteDoc, onSnapshot, addDoc, updateDoc } from 'firebase/firestore'
import { uploadBytes, ref as storageRef, listAll, getDownloadURL } from "firebase/storage"
import router from '@/router/index.js'

const useParts = () => {

    const partsData = ref([])

    const partDataRef = collection(db, "parts")

    const partImageRef = storageRef(storage, "images/parts")
    
    //const uploadTask = uploadBytesResumable(partImageRef, file, metadata)

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
    const addPart = async (addPartInfo) => {
        const imageList = await listAll(partImageRef);
        const promises = imageList.items.map(async (item) => {
            const url = await getDownloadURL(item);
            await addDoc(partDataRef, {
                title: addPartInfo.title,
                description: addPartInfo.description,
                name: item.name,
                url,
            }).then (() => {
                router.push({ path: '/adminParts' })
            })
        })
        await Promise.all(promises)
    }

    const uploadImage = async (selectedFile, addPartInfo) => {
        const uploadImageRef = storageRef(storage, "images/parts/" + selectedFile.name)
        await uploadBytes(uploadImageRef, selectedFile)
        console.log('Image uploaded successfully!')
        await addPart(addPartInfo)
    }

    // Edit and update an already made part
    const editPart = async (editPartInfo) => {
        await updateDoc(doc(partDataRef, editPartInfo.id), {
            title: editPartInfo.title,
            description: editPartInfo.description,
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
        uploadImage,
        editPart,
        deletePart
    }
}

export default useParts