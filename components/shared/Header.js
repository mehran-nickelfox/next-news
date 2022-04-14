import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { toast } from "react-toastify";
import { RESET } from "jotai/utils";
import { getAuth } from "firebase/auth";
import { authAtom, storeAtom, openAtom } from "../../jotai/Atoms";
import logo from "../../public/images/Logo.png";
import logout from "../../public/images/signout.png";
import { removeSession } from "../../HOC/withAuth";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const [user, setUser] = useAtom(authAtom);
  const auth = getAuth();
  const router = useRouter();
  const [, setSaveUser] = useAtom(storeAtom);
  const [, setOpen] = useAtom(openAtom);
  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleOpen = () => setOpen(true);

  const handleClick = () => {
    auth.signOut();
    setUser(false);
    removeSession("user");
    setSaveUser(RESET);
    toast.success("Logged Out");
    router.replace("/auth", "/auth");
  };

  return (
    <div className="z-10 fixed flex top-0 h-24 bg-stone-300 w-screen justify-between">
      <div className="flex items-center w-36 ml-2">
        <Image src={logo} alt="logo" />
      </div>

      <div className="flex items-center w-64 mr-8 justify-between text-red-700">
        <>
          {user ? (
            <Link href="/user/news" passHref>
              <p className="text-2xl  font-bold cursor-pointer hover:bg-red-700 hover:text-white active:bg-red-700 active:text-white hover:p-1 hover:rounded-lg">
                News
              </p>
            </Link>
          ) : (
            <Button
              className="text-red-700 hover:bg-red-700 hover:text-white active:bg-red-700 active:text-white text-xl font-bold hover:p-1 hover:rounded-lg active:rounded-lg"
              onClick={handleOpen}
            >
              <p>News</p>
            </Button>
          )}
          {user ? (
            <Link href="/user/bookmarks" passHref>
              <p className="text-2xl font-bold cursor-pointer hover:bg-red-700 hover:text-white active:bg-red-700 active:text-white hover:p-1 hover:rounded-lg">
                Bookmarks
              </p>
            </Link>
          ) : (
            <Button
              className="text-red-700 text-xl font-bold hover:bg-red-700 hover:text-white active:bg-red-700 active:text-white hover:p-1 hover:rounded-lg active:rounded-lg"
              onClick={handleOpen}
            >
              <p>Bookmarks</p>
            </Button>
          )}
          {user && (
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.7 }}
              onClick={handleClick}
              className="w-7 pt-2 pb-1 px-1 mx-1 hover:bg-red-700 hover:rounded-xl"
            >
              <Image src={logout} alt="power" />
            </motion.button>
          )}
        </>
      </div>
    </div>
  );
};

export default Header;
