import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, firebaseSignIn, firebaseSignOut } from './firebase';
import { Outlet } from 'react-router-dom';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setLoggedIn(true);
        setDisplayName(user.displayName);
        // ...
      } else {
        // User is signed out
        setLoggedIn(false);
        setDisplayName('');
        // ...
      }
    });
  }, []);

  return (
    <>
      <h1 className="sr-only">Firebase Auth App</h1>
      <p>Logged In: {displayName}</p>
      {loggedIn ? (
        <button onClick={firebaseSignOut}>Sign Out</button>
      ) : (
        <button onClick={firebaseSignIn}>Sign In</button>
      )}
      <Outlet />
    </>
  );
}
