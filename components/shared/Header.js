import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useAtom } from "jotai";
import {RESET} from 'jotai/utils'
import { getAuth } from "firebase/auth";
import { authAtom,storeUserAtom } from "../../jotai/Atoms";
import logo from "../../public/images/logos.png";
import logout from "../../public/images/logout.png";
import { removeSession } from "../../HOC/withAuth";

const Header = () => {
  const [user, setUser] = useAtom(authAtom);
  const auth = getAuth();
  const [, setSaveUser] = useAtom(storeUserAtom);


  const handleClick = () => {
    auth.signOut();
    setUser(false);
    removeSession("user");
    setSaveUser(RESET);
  };
  return (
    <div className="z-10 fixed flex top-0 h-20 bg-slate-700 w-screen justify-between">
      <div className="flex items-center w-36 ml-2">
        <Image src={logo} alt="logo" />
      </div>
      <div className="flex items-center w-64 mr-8 justify-between text-white">
        <>
          <Link href="/user/news" className="text-2xl font-bold " passHref>
            <p className="text-2xl font-bold ">News</p>
          </Link>
          <Link href="/user/bookmarks" passHref>
            <p className="text-2xl font-bold ">Bookmarks</p>
          </Link>
          {user && (
            <button onClick={handleClick} className="w-10">
              <Image src={logout} alt="power"  />
            </button>
          )}
        </>
      </div>
    </div>
  );
};

export default Header;
