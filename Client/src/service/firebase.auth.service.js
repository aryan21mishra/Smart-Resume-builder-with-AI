import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "@/config/FireBaseConfig";
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
class FireBaseAuthService {
  async loginWithGoogle() {
    // 1. Authenticate user via Firebase popup
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    // 2. ✅ CORRECT WAY: Get the Firebase ID Token (JWT)
    const idToken = await user.getIdToken();
    // 3. Return the user and the correct token
    return { user, token: idToken };
  }
  // 3. Logout Method
  async logout() {
    await signOut(auth);
  }
  // 4. State Listener (Observe if user is logged in or out)
  subscribeToAuthState(callback) {
    return onAuthStateChanged(auth, (user) => {
      callback(user);
    });
  }
}
export const firebaseAuthService = new FireBaseAuthService();
