import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setSession } from "../../HOC/withAuth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { motion } from "framer-motion";
import { authAtom, storeUserAtom } from "../../jotai/Atoms";
import { useAtom } from "jotai";
import { db } from "../../src/config/firebase.config";
import googleIcon from "../../public/images/googleIcon.svg";
import Image from "next/image";
const OAuth = () => {
  const [, setUser] = useAtom(authAtom);
  const [, setSaveUser] = useAtom(storeUserAtom);
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
      setSaveUser(user.uid);
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
        className="rounded-full bg-slate-700 w-32 m-24 animate-bounce hover:bg-blue-700 transition-all ease-out duration-300 h-full"
        onClick={onGoogleClick}
      >
        <Image src={googleIcon} alt="Google" width={50} />
      </motion.button>
    </motion.div>
  );
};

export default OAuth;
