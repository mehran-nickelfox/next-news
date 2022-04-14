import React from "react";
import { getAuth } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../src/config/firebase.config";
import { toast } from "react-toastify";
import marks from "../../public/images/bookmark.png";
import Image from "next/image";

const Marker = (props) => {
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
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button className="rounded m-4 pt-1 px-1 bg-red-700 hover:bg-stone-300 border-2 border-red-700 ">
        <Image src={marks} alt="bookmark" onClick={onBookMark} />
      </button>
    </div>
  );
};

export default Marker;
