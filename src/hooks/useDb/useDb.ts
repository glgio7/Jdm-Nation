import { db } from "../../../services/db";
import { collection, getDocs } from "firebase/firestore";

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
});
