import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAiyz9vKjmmQEFoRHfjAity0wpSLq_Cg3g",
  authDomain: "sampleproject-16ac4.firebaseapp.com",
  projectId: "sampleproject-16ac4",
  storageBucket: "sampleproject-16ac4.appspot.com",
  messagingSenderId: "566563420230",
  appId: "1:566563420230:web:3b9bb16739ba67fd697247",
  measurementId: "G-1NWW34QCSC"
};
 
  const app = firebase.initializeApp(firebaseConfig);
  export const auth = app.auth();

  export default app;