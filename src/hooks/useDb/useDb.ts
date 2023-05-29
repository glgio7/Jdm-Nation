import { db } from "../../../services/db";
import {
	addDoc,
	collection,
	doc,
	getDocs,
	updateDoc,
} from "firebase/firestore";
import { ICar } from "../../pages/Cars/types";
import { app } from "../../../services/config";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { UploadImageProps } from "./types";

export const useDb = () => ({
	getAll: async (collectionName: string) => {
		const querySnapshot = await getDocs(collection(db, collectionName));
		const carsList = querySnapshot.docs.map((doc) => {
			const data = doc.data();
			const id = doc.id;
			return { id: id, ...data };
		});
		return carsList as ICar[];
	},
	addOne: async (car: ICar, collectionName: string) => {
		await addDoc(collection(db, collectionName), car);
	},
	updateOne: async (collectionName: string, carId: string, updatedData: {}) => {
		const docRef = doc(db, collectionName, carId);

		const updatedDoc = await updateDoc(docRef, updatedData);

		return updatedDoc;
	},

	uploadImage: async ({ e, setImageUrl, setError }: UploadImageProps) => {
		const file = e.target.files && e.target.files[0];
		const storage = getStorage(app);
		const storageRef = ref(storage, `images/${file!.name}`);

		try {
			await uploadBytes(storageRef, file!);
			const downloadUrl = await getDownloadURL(storageRef);
			setImageUrl(downloadUrl);
		} catch (error) {
			setError("Erro ao fazer upload!");
			console.log("Error uploading image:", error);
		}
	},
});
