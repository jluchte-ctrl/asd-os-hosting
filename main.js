import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

// ✅ Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3ab9_jZiAYB1-ql_6IX2XsDVXD2UpCv8",
  authDomain: "gen-lang-client-0814041184.web.app",
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

        // ✅ Display user info on the page
        document.body.innerHTML = `
          <div style="text-align: center; margin-top: 50px;">
            <h2>Welcome, ${user.displayName}</h2>
            <p>Email: ${user.email}</p>
            <img src="${user.photoURL}" alt="Profile Picture" style="border-radius: 50%; width: 100px; height: 100px;" />
          </div>
        `;
      })
      .catch((error) => {
        console.error('❌ Login error:', error.message);
        alert(`Login failed: ${error.message}`);
      });
  });
} catch (err) {
  console.error("🔥 Firebase initialization failed:", err.message);
}
