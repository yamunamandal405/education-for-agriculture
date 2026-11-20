import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const signInButton = document.querySelector("#google-sign-in");
const signOutButton = document.querySelector("#sign-out");
const status = document.querySelector("#auth-status");
const signedOutPanel = document.querySelector("#signed-out");
const signedInPanel = document.querySelector("#signed-in");
const studentName = document.querySelector("#student-name");
const studentEmail = document.querySelector("#student-email");
const studentPhoto = document.querySelector("#student-photo");
const isConfigured = Object.values(firebaseConfig).every((value) =>
  value && !value.startsWith("PASTE_")
);

function showError(message) {
  status.textContent = message;
  status.classList.add("is-error");
}

if (!isConfigured) {
  showError("Google sign-in is not configured yet. Add your Firebase web app settings and enable Google sign-in; see README.md for setup.");
} else {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  signInButton.disabled = false;
  status.textContent = "Sign in securely with your Google account.";

  signInButton.addEventListener("click", async () => {
    signInButton.disabled = true;
    status.classList.remove("is-error");
    status.textContent = "Opening Google sign-in…";
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      showError(`Google sign-in failed: ${error.message}`);
      signInButton.disabled = false;
    }
  });

  signOutButton.addEventListener("click", async () => {
    signOutButton.disabled = true;
    try {
      await signOut(auth);
      status.classList.remove("is-error");
      status.textContent = "You have signed out.";
    } catch (error) {
      status.textContent = `Sign-out failed: ${error.message}`;
      status.classList.add("is-error");
    } finally {
      signOutButton.disabled = false;
    }
  });

  onAuthStateChanged(auth, (user) => {
    signedOutPanel.hidden = Boolean(user);
    signedInPanel.hidden = !user;
    if (user) {
      studentName.textContent = user.displayName || "Student";
      studentEmail.textContent = user.email || "";
      if (user.photoURL) {
        studentPhoto.src = user.photoURL;
        studentPhoto.hidden = false;
      } else {
        studentPhoto.hidden = true;
        studentPhoto.removeAttribute("src");
      }
    } else {
      signInButton.disabled = false;
    }
  });
}
