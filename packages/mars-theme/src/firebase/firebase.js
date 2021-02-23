import firebase from "firebase";

const config = {
	apiKey: "AIzaSyDmdaeuxG-1Hr-sXp3ONoTl5r_jKMHcrgg",
    authDomain: "rns-solutions.firebaseapp.com",
    databaseURL: "https://rns-solutions.firebaseio.com",
    projectId: "rns-solutions",
    storageBucket: "rns-solutions.appspot.com",
    messagingSenderId: "790127283177",
    appId: "1:790127283177:web:105e92c52bba18768e1978",
    measurementId: "G-CE9R9CL6L8"
};

firebase.initializeApp(config);
export default firebase;
