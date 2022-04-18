import React from "react";
import { getAuth } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../src/config/firebase.config";
import { toast } from "react-toastify";
import { dataAtom } from "../../jotai/Atoms";
import { useAtom } from "jotai";
import marks from "../../public/images/bookmark.png";
import Image from "next/image";

const Marker = (props) => {
  const [data, setData] = useAtom(dataAtom);
  const { link } = props;
  const auth = getAuth();

  const onBookMark = async () => {
    const newsData = {
      link,
      userRef: auth.currentUser.uid,
    };
    try {
      // eslint-disable-next-line no-unused-vars
      const docRef = addDoc(collection(db, "bookmarks"), newsData);
      toast.success("Article Bookmarked");
      setData([...data, newsData]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button
        onClick={onBookMark}
        className={
          data.some((item) => item.link.url === link.url)
            ? "rounded m-4 pt-1 px-1 bg-purple-700 hover:bg-purple-800 cursor-pointer"
            : "rounded m-4 pt-1 px-1 bg-purple-700 hover:bg-purple-800 cursor-pointer"
        }
        disabled={data.some((item) => item.link.url === link.url)}
      >
        <Image src={marks} alt="bookmark"  />
      </button>
    </div>
  );
};

export default Marker;
