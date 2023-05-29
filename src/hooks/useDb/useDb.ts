import { db } from "../../../services/db";
import {
	addDoc,
	collection,
	doc,
	getDocs,
	updateDoc,
} from "firebase/firestore";
import { ICar } from "../../pages/Cars/types";

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
});
