import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { auth } from './firebase';
import Home from './routes/Home';
import LogIn from './routes/LogIn';
import NotFound from './routes/NotFound';
import SignUp from './routes/SignUp';
import Feed from './routes/Feed';
import Profile from './routes/Profile';

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
    <div
      id="App"
      className="flex min-h-screen bg-white dark:bg-zinc-900"
    >
      <h1 className="sr-only">Firebase Auth App</h1>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        >
          <Route index element={<Feed />} />
          <Route
            path="profile"
            element={<Profile />}
          />
        </Route>
        <Route
          path="/login"
          element={<LogIn />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
}
