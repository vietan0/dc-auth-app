// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

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
const provider = new GoogleAuthProvider();

export function firebaseSignIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('profilePic', profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function firebaseSignOut() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('sign-out successful!')
    })
    .catch((error) => {
      console.log('error while signing out')
      // An error happened.
    });
}
