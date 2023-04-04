import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCJMiMef-sN9Vq56dnM01EYVBIdJTxSUvw",
  authDomain: "flamingo-react-app.firebaseapp.com",
  projectId: "flamingo-react-app",
  storageBucket: "flamingo-react-app.appspot.com",
  messagingSenderId: "607407114742",
  appId: "1:607407114742:web:497349ff801290f33edfd7",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
