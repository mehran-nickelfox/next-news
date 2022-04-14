import React, { useEffect } from "react";
import Head from "next/head";
import { useAtom } from "jotai";
import Footer from "../Footer";
import Header from "../Header";
import { useRouter } from "next/router";
import { authAtom, storeAtom , checkingUser} from "../../../jotai/Atoms";
import Hero from "../Hero";
import AppLoader from "../Loader";
const Layout = ({ title, description, keywords, children }) => {
  const [user, setUser] = useAtom(authAtom);
  const [storedUser] = useAtom(storeAtom);
  const [checking] = useAtom(checkingUser);
  const router = useRouter();
  useEffect(() => {
    if (storedUser) {
      setUser(true)
      router.replace("/user/news", "/user/news");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <div className=" flex flex-col text-black items-center">
          {checking && <AppLoader/>}
          <Hero />
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

Layout.defaultProps = {
  title: "News For You",
  description: "Know the latest news of your Country",
  keywords: "news",
};

export default Layout;
