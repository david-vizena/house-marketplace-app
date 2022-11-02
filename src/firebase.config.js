import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBkD7JadBHSKub1bhTfkAISvZTir814YEY',
	authDomain: 'house-marketplace-app-122bc.firebaseapp.com',
	projectId: 'house-marketplace-app-122bc',
	storageBucket: 'house-marketplace-app-122bc.appspot.com',
	messagingSenderId: '87564644857',
	appId: '1:87564644857:web:cc15fed060b5fe887acd28',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
