import React from "react";
import { getAuth } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../src/config/firebase.config";
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
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button className="rounded m-4 p-0.25 bg-red-700">
        <Image src={marks} alt="bookmark" onClick={onBookMark} />
      </button>
    </div>
  );
};

export default Marker;
