import app from './firebaseconfig.js';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById('login-btn').addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log('Signed in as:', user.email);
    })
    .catch((error) => {
      console.error('Login error:', error.message);
    });
});
