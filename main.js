// main.js

import app from './firebaseconfig.js';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Initialize Firebase Auth
const auth = getAuth(app);

// Example: Sign in a test user
signInWithEmailAndPassword(auth, 'testuser@example.com', 'password123')
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('Signed in as:', user.email);
  })
  .catch((error) => {
    console.error('Error signing in:', error.message);
  });
