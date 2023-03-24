import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBBFFsXDo39DZm045q10wfmyZIjfc2H_6k",

	authDomain: "jdm-nation.firebaseapp.com",

	projectId: "jdm-nation",

	storageBucket: "jdm-nation.appspot.com",

	messagingSenderId: "803639224555",

	appId: "1:803639224555:web:e40f2aa3dbb56a960eb6ae",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
