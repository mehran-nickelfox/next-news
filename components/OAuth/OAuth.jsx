import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setSession } from "../../HOC/withAuth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { motion } from "framer-motion";
import { authAtom } from "../../jotai/Atoms";
import { useAtom } from "jotai";
import { db } from "../../src/config/firebase.config";
import googleIcon from "../../public/images/googleIcon.svg";
import Image from "next/image";
const OAuth = () => {
  const [, setUser] = useAtom(authAtom);

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          createdAt: serverTimestamp(),
        });
      }
      setUser(true);
      setSession("user", user.uid);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
      exit={{ opacity: 0 }}
      className="text-center text-black w-full mb-12 p-4 text-6xl font-bold"
    >
      <h3>Sign In Using Google:</h3>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        exit={{ opacity: 0 }}
        className="w-12 mt-52 rounded-full bg-white animate-bounce p-4 "
        onClick={onGoogleClick}
      >
        <Image src={googleIcon} alt="Google" />
      </motion.button>
    </motion.div>
  );
};

export default OAuth;
