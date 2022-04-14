import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setSession } from "../../HOC/withAuth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { motion } from "framer-motion";
import { authAtom, storeAtom,checkingUser } from "../../jotai/Atoms";
import { useAtom } from "jotai";
import { db } from "../../src/config/firebase.config";
import googleIcon from "../../public/images/googleIcon.svg";
import Image from "next/image";
const OAuth = () => {
  const [, setUser] = useAtom(authAtom);
  const [, setSaveUser] = useAtom(storeAtom);
  const [, setChecking] = useAtom(checkingUser);
  const onGoogleClick = async () => {
    setChecking(true);
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
      
      setSaveUser(user);
      setSession("user", user.uid);
      setChecking(false);

    } catch (err) {
      console.log(err);
    }
    setUser(true);
  };
  return (
    <motion.div className="flex flex-col items-center justify-center">
      <motion.button
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0, transition: { delay: 1 } },
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.7 }}
        className="flex flex-row items-center justify-around rounded-full bg-stone-300 w-80 h-24 m-24 hover:bg-sla00 font-bold text-zinc-600"
        onClick={onGoogleClick}
      >
        <Image src={googleIcon} alt="Google" width={50} /> Sign In Using Google:
      </motion.button>
    </motion.div>
  );
};

export default OAuth;
