import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

// ✅ Debug log to confirm config at runtime
const firebaseConfig = {
  apiKey: "AIzaSyB3ab9_jZiAYB1-ql_6IX2XsDVXD2UpCv8",
  authDomain: "gen-lang-client-0814041184.firebaseapp.com",
  projectId: "gen-lang-client-0814041184",
  storageBucket: "gen-lang-client-0814041184.appspot.com",
  messagingSenderId: "519555891397",
  appId: "1:519555891397:web:09f875db43f04cd12f30ac",
  measurementId: "G-8YT1LKFV3T"
};

console.log("🔍 Firebase config at runtime:", firebaseConfig);

try {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  document.getElementById('login-btn').addEventListener('click', () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('✅ Signed in as:', user.email);
      })
      .catch((error) => {
        console.error('❌ Login error:', error.message);
      });
  });
} catch (err) {
  console.error("🔥 Firebase initialization failed:", err.message);
}
