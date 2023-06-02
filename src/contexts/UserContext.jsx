import { createContext, useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [darkMode, setDarkMode] = useState(false);

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

  useEffect(() => {
    if (window?.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      setDarkMode(event.matches);
    });
  }, []);

  const passedVals = useMemo(() => ({ currentUser, darkMode }), [currentUser, darkMode]);

  return <UserContext.Provider value={passedVals}>{children}</UserContext.Provider>;
}
