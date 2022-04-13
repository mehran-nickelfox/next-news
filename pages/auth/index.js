import React from "react";
import { useAtom } from "jotai";
import { motion } from "framer-motion";
import { authAtom } from "../../jotai/Atoms";
import OAuth from "../../components/OAuth/OAuth";
const Home = () => {
  const [user] = useAtom(authAtom);

  return (
    <div className="z-0 absolute top-36">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        exit={{ opacity: 0 }}
        className="text-center non-italic text-white font-bold w-full  mb-12 text-6xl"
      >
        <h1 className="z-10">BRINGING YOU THE</h1>
        <br />
        <h1 className="">NEWS!</h1>
      </motion.div>
      {!user && (
        <>
          <OAuth />
        </>
      )}
    </div>
  );
};

export default Home;
