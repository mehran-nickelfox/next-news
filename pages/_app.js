import React from "react";
import "../styles/index.css";
import { useRouter } from "next/router";
import { Provider } from "jotai";
import PrivateLayout from "../components/shared/Layout/PrivateLayout";
import PublicLayout from "../components/shared/Layout/PublicLayout";
function MyApp({ Component, pageProps }) {
  
  const path = useRouter()
  const isPublic = path.asPath.includes("/auth")
  const isPrivate = path.asPath.includes("/user")
  
  const Wrapper = isPublic ? PublicLayout : isPrivate ? PrivateLayout : React.Fragment
  return (
    <Provider>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Provider>
  );
}

export default MyApp;
