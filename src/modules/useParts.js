import { ref } from 'vue'
import { db, storage } from '../firebase.js'
import { collection, doc, deleteDoc, onSnapshot, addDoc, updateDoc } from 'firebase/firestore'
import { uploadBytes, ref as storageRef, getDownloadURL, deleteObject } from "firebase/storage"
import router from '@/router/index.js'

const useParts = () => {

    const partsData = ref([])

    const partDataRef = collection(db, "part")


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
    const addPart = async (selectedFile, addPartInfo) => {
        const filename = selectedFile.name;
        const timestamp = Date.now()
        // Creating a unique filename so firebase doesnt override in case another file of the same name is uploaded
        // and so there wont be multiple database entries with the same file reference
        const uniqueFilename = `${timestamp}_${filename}`;

        const uploadImageRef = storageRef(storage, "images/part/" + uniqueFilename);

        const uploadTask = uploadBytes(uploadImageRef, selectedFile)
        await uploadTask;

        const downloadURL = await getDownloadURL(uploadImageRef)

        await addDoc(partDataRef, {
            title: addPartInfo.title,
            text: addPartInfo.text,
            name: filename,
            imageName: uniqueFilename,
            imageUrl: downloadURL,
        }).then (() => {
            router.push({ path: '/adminParts' })
        })

    }

    // Edit and update an already made part
    const editPart = async ( selectedFile, editPartInfo) => {
        if(selectedFile !== null && selectedFile !== undefined) {
            const storageRefPath = storageRef(storage, 'images/part/' + editPartInfo.imageName)
            await deleteObject(storageRefPath)
            const filename = selectedFile.name;
            const timestamp = Date.now();
            // Creating a unique filename so firebase doesnt override in case another file of the same name is uploaded
            // and so there wont be multiple database entries with the same file reference
            const uniqueFilename = `${timestamp}_${filename}`

            const uploadImageRef = storageRef(storage, "images/part/" + uniqueFilename)

            const uploadTask = uploadBytes(uploadImageRef, selectedFile)
            await uploadTask

            const downloadURL = await getDownloadURL(uploadImageRef)
        console.log(uploadImageRef);
            await updateDoc(doc(partDataRef, editPartInfo.id), {
                title: editPartInfo.title,
                text: editPartInfo.text,
                name: filename,
                imageName: uniqueFilename,
                imageUrl: downloadURL,
            }).then (() => {
                router.push({ path: '/adminParts' })
            })
        }
        else {
            await updateDoc(doc(partDataRef, editPartInfo.id), {
                title: editPartInfo.title,
                text: editPartInfo.text,
            }).then (() => {
                router.push({ path: '/adminParts' })
            })
        } 
    }

    // Delete a part
    const deletePart = async (deletePartInfo) => {
        await deleteDoc(doc(db, "part", deletePartInfo.id))
        const storageRefPath = storageRef(storage, 'images/part/' + deletePartInfo.imageName)
        await deleteObject(storageRefPath)
        .then (() => {
            router.push({ path: '/adminParts' })
        })
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