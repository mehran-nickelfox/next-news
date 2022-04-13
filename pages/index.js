import {  useEffect } from "react";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { authAtom } from "../jotai/Atoms";
const Home = () => {
  const [user] = useAtom(authAtom);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.replace("/auth", "/auth");
    }
  });
};

export default Home;