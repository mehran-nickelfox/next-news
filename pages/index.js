import {  useEffect } from "react";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { authAtom } from "../jotai/Atoms";
const Home = () => {
  const [user] = useAtom(authAtom);
  const router = useRouter();
  useEffect(() => {
    const data = localStorage.getItem("user");
    if (!user) {
      router.replace("/auth", "/auth");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
};

export default Home;