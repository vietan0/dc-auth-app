import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, firebaseSignIn, firebaseSignOut } from '../firebase';
import { Navigate } from 'react-router';

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setCurrentUser(user.toJSON());
        // ...
      } else {
        // User is signed out
        setCurrentUser(null);
        // ...
      }
    });
  });
  return (
    <div id="Home">
      {currentUser || <Navigate to="/signup" />}
      <div>Home</div>
    </div>
  );
}
