import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { query, orderBy, limit } from "firebase/firestore";  

// const q = query(citiesRef, orderBy("name"), limit(10));

const firebaseConfig = {
        apiKey: "yourApiKey",
        authDomain: "your AuthDomain",
        projectId: "yourProjectId",
        storageBucket: "yourStorageBucket",
        messagingSenderId: "yourMessagingSenderId",
        appId: "yourAppId",
        measurementId: "yourMeasurementId"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
