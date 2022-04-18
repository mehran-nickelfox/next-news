import React, { useEffect } from "react";
import Head from "next/head";
import { useAtom } from "jotai";
import Footer from "../Footer";
import Header from "../Header";
import { useRouter } from "next/router";
import { authAtom,  checkingUser} from "../../../jotai/Atoms";
import Hero from "../Hero";
import AppLoader from "../Loader";
import { getSession } from "../../../HOC/withAuth";
const Layout = ({ title, description, keywords, children }) => {
  const [,setUser] = useAtom(authAtom);
  const [checking] = useAtom(checkingUser);
  const session = getSession('user-token')
  const router = useRouter();
  useEffect(() => {
    if (session) {
      setUser(true)
      router.replace("/user/news", "/user/news");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

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
