import { db } from "../../../services/db";
import { addDoc, collection, getDocs } from "firebase/firestore";

export interface IAddCar {
	name: string;
	image_path: string;
	power: string;
	vel_max: string;
	zero_to100: string;
}

export const useDb = () => ({
	getAll: async () => {
		const querySnapshot = await getDocs(collection(db, "cars-wiki-90"));
		const carsList = querySnapshot.docs.map((doc) => {
			const data = doc.data();
			const id = doc.id;
			return { id: id, ...data };
		});
		return carsList;
	},
	addOne: async (car: IAddCar, collectionName: string) => {
		await addDoc(collection(db, collectionName), car);
	},
});
