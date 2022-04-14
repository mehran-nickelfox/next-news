import React from "react";
import { useAtom } from "jotai";
import { motion } from "framer-motion";
import { authAtom } from "../../jotai/Atoms";
import OAuth from "../../components/OAuth/OAuth";
import BasicModal from "../../components/shared/Modal";
const Home = () => {
  const [user] = useAtom(authAtom);
  return (
    <div className="z-0 absolute top-36">
      <div className="text-center title-font text-white font-bold w-full  mb-12 text-6xl">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { delay: 2 } },
          }}
          className="z-10"
        >
          BRINGING THE NEWS
        </motion.h1>
        <br />
        <BasicModal/>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { delay: 2 } },
          }}
        >
          TO YOU!
        </motion.h1>
      </div>
      {!user && (
        <>
          <OAuth />
        </>
      )}
    </div>
  );
};

export default Home;
