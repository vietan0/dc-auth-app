import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, firebaseSignIn, firebaseSignOut } from './firebase';

export default function App() {
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
  }, []);

  return (
    <>
      <h1>Firebase Auth App</h1>
      <p>Logged In: {currentUser?.displayName}</p>

      {currentUser ? (
        <>
          <button onClick={firebaseSignOut}>Sign Out</button>
          <pre>{JSON.stringify(currentUser, null, 2)}</pre>
        </>
      ) : (
        <button onClick={firebaseSignIn}>Sign In</button>
      )}
    </>
  );
}
