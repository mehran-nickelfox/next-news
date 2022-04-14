import React, { useEffect } from "react";
import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";
import { getSession } from "../../../HOC/withAuth";
import { useRouter } from "next/router";
import { authAtom, storeAtom } from "../../../jotai/Atoms";
import { useAtom } from "jotai";
import Hero from "../Hero";
import { data } from "autoprefixer";
import AppLoader from "../Loader";
const Layout = ({ title, description, keywords, children }) => {
  const [user] = useAtom(authAtom);
  const [storedUser] = useAtom(storeAtom);
  const router = useRouter();

  useEffect(() => {
    if (!storedUser) {
      router.replace("/auth", "/auth");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <div>
          <div className="flex flex-col items-center">
            <Hero />
            {children}
          </div>
          <Footer />
        </div>
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
