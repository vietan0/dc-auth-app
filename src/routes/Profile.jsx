import { firebaseSignOut } from '../firebase';

export default function Profile() {
  return (
    <div id="Profile">
      <button onClick={async () => await firebaseSignOut()}>Sign Out</button>
    </div>
  );
}
