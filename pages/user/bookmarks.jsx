import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getAuth } from "firebase/auth";
import {
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Image from "next/image";
import { useAtom } from "jotai";
import { toast } from "react-toastify";
import { bookmarksAtom, userAtom, dataAtom } from "../../jotai/Atoms";
import { db } from "../../src/config/firebase.config";
import Card from "../../components/shared/Card";
import remove from "../../public/images/delete.png";
const BooksMarks = () => {
  const auth = getAuth();
  const [currentUser] = useAtom(userAtom);
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);
  const [data, setData] = useAtom(dataAtom);
  useEffect(() => {
    if (currentUser) {
      const getBookmarks = async () => {
        const bookmarksRef = collection(db, "bookmarks");
        const q = query(
          bookmarksRef,
          where("userRef", "==", auth.currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        const bookmarks = [];
        querySnapshot.forEach((doc) => {
          return bookmarks.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setBookmarks(bookmarks);
      };

      getBookmarks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);
  const handleDelete = async (id,url) => {
    await deleteDoc(doc(db, "bookmarks", id));
    setData(data.filter((item) => item.link.url !== url));
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
    toast.success("Article Removed");
  };
  return (
    <div className="flex flex-col mb-12 items-center">
      <div className="text-center absolute top-96">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { delay: 1 } },
          }}
          className="text-white font-bold text-6xl"
        >
          {bookmarks && bookmarks.length > 0
            ? "SCROLL FOR BOOKMARKS"
            : "No Bookmarks"}
        </motion.h1>
        <br />
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { delay: 1 } },
          }}
          className="text-white font-bold text-6xl"
        >
          ▼
        </motion.h1>
      </div>
      <div className="flex flex-col w-full items-center -mt-24">
        {bookmarks &&
          bookmarks.map((bookmark, index) => {
            return (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0, transition: { delay: 1 } },
                }}
                key={index}
                className="bg-blue-200 text-black flex flex-col w-3/5 p-2 m-4 rounded-xl z-0"
              >
                <h3 className="font-serif font-bold text-xl m-4 text-red-700">
                  {bookmark.data.link.title}
                </h3>
                <Card key={index} className=" w-full flex p-1 rounded  ">
                  <div className="w-full flex md:flex-nowrap sm:flex-wrap">
                    <Image
                      className="h-40 w-60 m-4 rounded"
                      src={bookmark.data.link.urlToImage}
                      alt="article"
                      width={450}
                      height={200}
                    />
                    <p className="m-4 font-serif text-black">
                      {bookmark.data.link.description === null ? (
                        <span className="font-serif font-bold text-xl">
                          Click Know More For Article
                        </span>
                      ) : (
                        bookmark.data.link.description.substring(0, 150)
                      )}
                      ...
                    </p>
                  </div>
                  <div className="h-100 flex flex-col items-center justify-around">
                    <button className="text-white rounded m-4 p-0.25  w-32 h-12 bg-purple-700 hover:bg-purple-800  font-bold">
                      <a href={bookmark.data.link.url}>Know More</a>
                    </button>
                    <button
                      className="rounded m-4 pt-1 px-1 bg-purple-800 hover:bg-purple-900 cursor-pointer"
                      onClick={() => handleDelete(bookmark.id,bookmark.data.link.url)}
                    >
                      <Image src={remove} alt="delete" width={35} height={35} />
                    </button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default BooksMarks;
