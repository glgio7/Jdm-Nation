import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_APP_GOOGLE_API_KEY,

	authDomain: "jdm-nation.firebaseapp.com",

	projectId: "jdm-nation",

	storageBucket: "jdm-nation.appspot.com",

	messagingSenderId: "803639224555",

	appId: "1:803639224555:web:e40f2aa3dbb56a960eb6ae",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
