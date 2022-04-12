import React from "react";
import { useAtom } from "jotai";
import { motion } from "framer-motion";
import { authAtom } from "../../jotai/Atoms";
import OAuth from "../../components/OAuth/OAuth";
const Home = () => {
  const [user] = useAtom(authAtom);

  return (
    <div className="mt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        exit={{ opacity: 0 }}
        className="text-center text-black font-bold w-full mb-12 text-6xl"
      >
        <h1 className="">THE NAME YOU CAN NEWS</h1>
        <br />
        <h1 className="">UPON!</h1>
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
