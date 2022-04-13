import React, { useEffect } from "react";
import Head from "next/head";
import { useAtom } from "jotai";
import Footer from "../Footer";
import Header from "../Header";
import { getSession } from "../../../HOC/withAuth";
import { useRouter } from "next/router";
import { authAtom } from "../../../jotai/Atoms";
import Hero from "../Hero";
const Layout = ({ title, description, keywords, children }) => {
  const session = getSession("user");
  const [user, setUser] = useAtom(authAtom);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.replace("/user/news", "/user/news");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(data);
    }
  });

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
