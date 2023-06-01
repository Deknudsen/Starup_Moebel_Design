import { ref } from 'vue'
import { db, storage } from '../firebase.js'
import { collection, doc, deleteDoc, onSnapshot, addDoc, updateDoc } from 'firebase/firestore'
import { uploadBytes, ref as storageRef, getDownloadURL, deleteObject } from "firebase/storage"
import router from '@/router/index.js'

const useProducts = () => {

    const productsData = ref([])

    const productDataRef = collection(db, "product")


    const getProductsData = () => {
        onSnapshot(productDataRef, (snapshot) => {
            productsData.value = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id,
                }
            })

        })
    }

    // Create a product
    const addProduct = async (selectedFile, addProductInfo) => {
        const filename = selectedFile.name;
        const timestamp = Date.now()
        // Creating a unique filename so firebase doesnt override in case another file of the same name is uploaded
        // and so there wont be multiple database entries with the same file reference
        const uniqueFilename = `${timestamp}_${filename}`;

        const uploadImageRef = storageRef(storage, "images/product/" + uniqueFilename);

        const uploadTask = uploadBytes(uploadImageRef, selectedFile)
        await uploadTask;

        const downloadURL = await getDownloadURL(uploadImageRef)
        console.log(uploadImageRef)

        await addDoc(productDataRef, {
            title: addProductInfo.title,
            text: addProductInfo.text,
            name: filename,
            imageName: uniqueFilename,
            imageUrl: downloadURL,
        }).then (() => {
            router.push({ path: '/adminProducts' })
        })

    }

    // Edit and update an already made part
    const editProduct = async ( selectedFile, editProductInfo) => {
        console.log(selectedFile)
        if(selectedFile !== null && selectedFile !== undefined) {
            console.log("Med billede")
            const storageRefPath = storageRef(storage, 'images/product/' + editProductInfo.imageName)
            await deleteObject(storageRefPath)
            const filename = selectedFile.name;
            const timestamp = Date.now();
            // Creating a unique filename so firebase doesnt override in case another file of the same name is uploaded
            // and so there wont be multiple database entries with the same file reference
            const uniqueFilename = `${timestamp}_${filename}`

            const uploadImageRef = storageRef(storage, "images/product/" + uniqueFilename)

            const uploadTask = uploadBytes(uploadImageRef, selectedFile)
            await uploadTask

            const downloadURL = await getDownloadURL(uploadImageRef)
        console.log(uploadImageRef);
            await updateDoc(doc(productDataRef, editProductInfo.id), {
                title: editProductInfo.title,
                text: editProductInfo.text,
                name: filename,
                imageName: uniqueFilename,
                imageUrl: downloadURL,
            }).then (() => {
                router.push({ path: '/adminProducts' })
            })
        }
        else {
            console.log("uden billede")
            await updateDoc(doc(productDataRef, editProductInfo.id), {
                title: editProductInfo.title,
                text: editProductInfo.text,
            }).then (() => {
                router.push({ path: '/adminProducts' })
            })
        } 
    }

    // Edit and update if slide is active
    const editActive = async (editProductInfo) => {
        updateDoc(doc(productDataRef, editProductInfo.id), {
            isActive: editProductInfo.isActive
        })
    }

    // Delete a product
    const deleteProduct = async (deleteProductInfo) => {
        await deleteDoc(doc(db, "product", deleteProductInfo.id))
        const storageRefPath = storageRef(storage, 'images/product/' + deleteProductInfo.imageName)
        await deleteObject(storageRefPath)
        .then (() => {
            router.push({ path: '/adminProducts' })
        })
    }

    //Returning all functions made
    return {
        productsData,
        getProductsData,
        addProduct,
        editProduct,
        editActive,
        deleteProduct
    }
}

export default useProducts