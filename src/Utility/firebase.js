import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgXX3KgCqV3F63xh0q6MYNMah82GfCAyY",
  authDomain: "clone-d72ca.firebaseapp.com",
  projectId: "clone-d72ca",
  storageBucket: "clone-d72ca.appspot.com",
  messagingSenderId: "983223362309",
  appId: "1:983223362309:web:577ad33aff0fcc305e8d6c",
  measurementId: "G-4L61VZS8WP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { auth, analytics, db };
