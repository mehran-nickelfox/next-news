import React from "react";
import Image from "next/image";
import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";
import { getSession } from "../../../HOC/withAuth";
import { useRouter } from "next/router";
import { authAtom } from "../../../jotai/Atoms";
import { useAtom } from "jotai";
import background from "../../../public/images/1567665.png";
const Layout = ({ title, description, keywords, children }) => {
  const session = getSession("user");
  const [user] = useAtom(authAtom);
  const router = useRouter();
  React.useEffect(() => {
    if (user) {
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
          <div className='absolute -z-10'>
          </div>
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
