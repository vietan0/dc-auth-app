import { useContext, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import dcLight from '../assets/devchallenges-light.svg';
import dc from '../assets/devchallenges.svg';
import { Route, Routes } from 'react-router-dom';
import Feed from './Feed';
import Profile from './Profile';
import NotFound from './NotFound';

export default function Home() {
  const { currentUser, darkMode } = useContext(UserContext);
  const nav = useNavigate();

  useEffect(() => {
    if (!currentUser) nav('/signup');
  }, [currentUser, nav]);

  return (
    <div id="Home">
      <header className="sticky flex w-screen justify-between px-12 py-8">
        <Link to="/">
          <img
            src={darkMode ? dcLight : dc}
            alt="devchallenges logo"
            className="mb-4 max-w-[120px]"
          />
        </Link>
        <Link to="profile">
          <p>{currentUser?.displayName || currentUser?.email}</p>
        </Link>
      </header>
      <div className="px-12 pb-8">
        <Outlet />
      </div>
    </div>
  );
}
