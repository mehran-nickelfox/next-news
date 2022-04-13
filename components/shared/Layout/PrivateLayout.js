import React from "react";
import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";
import { getSession } from "../../../HOC/withAuth";
import { useRouter } from "next/router";
import { authAtom } from "../../../jotai/Atoms";
import { useAtom } from "jotai";
import Hero from "../Hero";
const Layout = ({ title, description, keywords, children }) => {
  const session = getSession("user");
  const [user] = useAtom(authAtom);
  const router = useRouter();
  React.useEffect(() => {
    if (!user) {
      setTimeout(() => {
      router.replace("/auth", "/auth");
      }, 2500);
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
