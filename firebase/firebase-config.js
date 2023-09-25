// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/storage";
import {
	getDownloadURL,
	getStorage,
	ref,
	updateMetadata,
	uploadBytes,
} from "firebase/storage";

import {
	getAuth,
	GoogleAuthProvider,
	setPersistence,
	browserSessionPersistence,
} from "firebase/auth";

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

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

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

		await uploadBytes(storageRef, file);

		const documentMetaData = {
			title,
			description,
			category,
		};

		await updateMetadata(storageRef, {
			customMetadata: documentMetaData,
		});

		const downloadURL = await getDownloadURL(storageRef);

		const user = auth?.currentUser;

		const documentData = {
			userId: user.uid,
			title,
			description,
			category,
			downloadURL,
		};

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

export { storage, auth, provider, docsCollection };
