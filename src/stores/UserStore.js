import { defineStore } from "pinia";
import { ref } from "vue";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export const useUserStore = defineStore("userStore", () => {
  const user = ref("");

  async function getUserByGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    try {
      const responese = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(responese);
      const token = credential.accessToken;
      // The signed-in user info.
      user.value = responese.user;

      return user.value;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      throw error;
    }
  }

  return { user, getUserByGoogle };
});
