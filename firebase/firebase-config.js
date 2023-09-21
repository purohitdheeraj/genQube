// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/storage";
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytes,
} from "firebase/storage";

import {
	addDoc,
	collection,
	getFirestore,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDSE79jMtxAsS8hP-DDYsquLbEXa6R8nQQ",
	authDomain: "docsqube.firebaseapp.com",
	projectId: "docsqube",
	storageBucket: "docsqube.appspot.com",
	messagingSenderId: "59384829519",
	appId: "1:59384829519:web:f1b7f87ee6d1eab618bc3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const docsCollection = collection(db, "documents");

// const storageRef = ref(storage);

export { storage };

export const uploadDocument = async ({
	file,
	title,
	description,
	category,
}) => {
	try {
		const storageRef = ref(
			storage,
			`documents/${file.name}`
		);

		const snapshot = await uploadBytes(storageRef, file);
		const downloadURL = await getDownloadURL(storageRef);

		const documentData = {
			title,
			description,
			category,
			downloadURL,
		};

		console.log("document data", documentData);
		const docRef = await addDoc(
			docsCollection,
			documentData
		);

		console.log("Uploaded Document Data", documentData);

		return downloadURL;
	} catch (error) {
		console.error("Error Uploading document", error);
		throw error;
	}
};
