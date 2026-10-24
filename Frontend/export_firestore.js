import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import fs from "fs";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function exportData() {
  console.log("Script lancé…");
  const snapshot = await getDocs(collection(db, "DemandeAnimation"));
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  fs.writeFileSync("demandeAnimation.json", JSON.stringify(data, null, 2));

  console.log("Export terminé → demandeAnimation.json créé !");
}

exportData();
