import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase_init";
import { toast } from "react-toastify";

export const googleLogin = (navigate, setUser, from = "/my-profile") => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user.photoURL);
      toast.success(`Welcome ${user.displayName || "User"}!`);
      navigate(from, { replace: true });
    })
    .catch((error) => {
      // console.log(error);
      toast.error("Google Sign-in failed!");
    });
};
