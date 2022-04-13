import React, { useEffect } from "react";
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
import { bookmarksAtom, authAtom } from "../../jotai/Atoms";
import { db } from "../../src/config/firebase.config";
import Card from "../../components/shared/Card";
import remove from "../../public/images/delete.png";
const BooksMarks = () => {
  const auth = getAuth();
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);
  const [user] = useAtom(authAtom);
  useEffect(() => {
    if (user) {
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
  }, []);
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "bookmarks", id));
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
    toast.success("Article Removed");
  };
  return (
    <div className="flex flex-col mb-12 items-center">
      <div className="animate-bounce text-center absolute top-96">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          exit={{ opacity: 0 }}
          className="text-white font-bold text-6xl"
        >
         {bookmarks &&  {bookmarks.length === 0 ? (
            <h1>NO BOOKMARKS FOUND</h1>
          ) : (
            <>
              <h1> SCROLL FOR BOOKMARKS</h1>
              <br />
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 2 } }}
                exit={{ opacity: 0 }}
                className="text-white font-bold text-6xl"
              >
                ▼
              </motion.h1>
            </>
          )}
        }
        </motion.h1>
      </div>
      {bookmarks &&
        bookmarks.map((bookmark, index) => {
          return (
            <div
              key={index}
              className="bg-white text-white flex flex-col w-3/5 p-2 m-4 rounded-xl z-0  "
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
                  <button className="rounded m-4 p-0.25 bg-red-700 w-32 h-12 hover:bg-white hover:text-red-700 border-2 border-red-700 font-bold">
                    <a href={bookmark.data.link.url}>Know More</a>
                  </button>
                  <button
                    className="rounded m-4 p-0.25 bg-red-700 hover:bg-white border-2 border-red-700"
                    onClick={() => handleDelete(bookmark.id)}
                  >
                    <Image src={remove} alt="delete" width={35} height={35} />
                  </button>
                </div>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default BooksMarks;
