import React, { useEffect } from "react";
import Head from "next/head";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { checkingUser, userAtom } from "../../../jotai/Atoms";
import { useAtom } from "jotai";
import Footer from "../Footer";
import Header from "../Header";
import { getSession } from "../../../HOC/withAuth";
import { useRouter } from "next/router";
import Hero from "../Hero";
const Layout = ({ title, description, keywords, children }) => {
  const auth = getAuth();
  const session = getSession("user-token");
  const [checking, setChecking] = useAtom(checkingUser);
  const [currentUser, setCurrentUser] = useAtom(userAtom);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, async (currentUSer) => {
      if (currentUSer) {
        setCurrentUser(currentUSer);
      }
    });

    if (!session) {
      router.replace("/auth", "/auth");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, currentUser]);
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
          <div className=" flex flex-col text-black items-center">
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
