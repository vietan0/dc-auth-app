// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signOut } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCz9X0WxeOGoRvdbIf22favHrAWqvcWFbQ',
  authDomain: 'dc-auth-app.firebaseapp.com',
  projectId: 'dc-auth-app',
  storageBucket: 'dc-auth-app.appspot.com',
  messagingSenderId: '717092564249',
  appId: '1:717092564249:web:f6ba4bed303391b2536988',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export async function firebaseSignIn(provider) {
  try {
    const result = await signInWithPopup(auth, provider);
    // const { displayName, email, photoURL } = await result.user.displayName;
  } catch (err) {
    console.log(err);
  }
}

export async function firebaseSignOut() {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
}
