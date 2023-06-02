import { ref } from 'vue'
import { db, storage } from '../firebase.js'
import { collection, doc, deleteDoc, onSnapshot, addDoc, updateDoc } from 'firebase/firestore'
import { uploadBytes, ref as storageRef, getDownloadURL, deleteObject } from "firebase/storage"

const useCarousel = () => {

    const carouselsData = ref([])

    const carouselDataRef = collection(db, "carousel")


    const getCarouselsData = async () => {
        await onSnapshot(carouselDataRef, (snapshot) => {
            carouselsData.value = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id,
                }
            })

        })
    }

    const getActiveCarouselsData = async () => {
        await onSnapshot(carouselDataRef, (snapshot) => {
            carouselsData.value = snapshot.docs.map(doc => {
                 return {
                    ...doc.data(),
                    id: doc.id,
                }
            }).filter(i => i.isActive)
        })
    }

    // Create a carousel
    const addCarousel = async (selectedFile, addCarouselInfo) => {
        const filename = selectedFile.name;
        const timestamp = Date.now();
        // Creating a unique filename so firebase doesnt override in case another file of the same name is uploaded
        // and so there wont be multiple database entries with the same file reference
        const uniqueFilename = `${timestamp}_${filename}`;

        const uploadImageRef = storageRef(storage, "images/carousel/" + uniqueFilename);

        const uploadTask = uploadBytes(uploadImageRef, selectedFile);
        await uploadTask;

        const downloadURL = await getDownloadURL(uploadImageRef);

        await addDoc(carouselDataRef, {
            text: addCarouselInfo.text,
            link: addCarouselInfo.link,
            name: filename,
            imageName: uniqueFilename,
            imageUrl: downloadURL,
            isActive: false,
        });

    }

    // Edit and update an already made part
    const editCarousel = async (/* selectedFile, */ editCarouselInfo) => {
        await updateDoc(doc(carouselDataRef, editCarouselInfo.id), {
            text: editCarouselInfo.updatedText,
            link: editCarouselInfo.updatedLink
        })
        /* if(selectedFile.name != editCarouselInfo.name) {
            const uploadImageRef = storageRef(storage, "images/carousel/" + selectedFile.name)
            const uploadTask = uploadBytes(uploadImageRef, selectedFile)
            await uploadTask
            const downloadURL = await getDownloadURL(uploadImageRef)
            await updateDoc(doc(carouselDataRef, editCarouselInfo.id), {
                text: editCarouselInfo.text,
                link: editCarouselInfo.link,
                name: selectedFile.name,
                imageUrl: downloadURL,
            })
        }
        else {
            await updateDoc(doc(carouselDataRef, editCarouselInfo.id), {
                text: editCarouselInfo.updatedText,
                link: editCarouselInfo.updatedLink
            })
        } */
    }

    // Edit and update if slide is active
    const editActive = async (editCarouselInfo) => {
        updateDoc(doc(carouselDataRef, editCarouselInfo.id), {
            isActive: editCarouselInfo.isActive
        })
    }

    // Delete a carousel
    const deleteCarousel = async (deleteCarouselInfo) => {
        await deleteDoc(doc(db, "carousel", deleteCarouselInfo.id))
        const storageRefPath = storageRef(storage, 'images/carousel/' + deleteCarouselInfo.imageName)
        await deleteObject(storageRefPath)
    }

    //Returning all functions made
    return {
        carouselsData,
        getCarouselsData,
        addCarousel,
        editCarousel,
        editActive,
        deleteCarousel,
        getActiveCarouselsData
    }
}

export default useCarousel