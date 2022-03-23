import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD05bEESfY-0YvHG81qRTGm6X91kycwMnE",
    authDomain: "fir-tutorial-e6385.firebaseapp.com",
    projectId: "fir-tutorial-e6385",
    storageBucket: "fir-tutorial-e6385.appspot.com",
    messagingSenderId: "857596999329",
    appId: "1:857596999329:web:c0ed8f286401b27cc6a2e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);