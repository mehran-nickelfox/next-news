import React, { useEffect } from "react";
import Image from "next/image";
import { useAtom } from "jotai";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../src/config/firebase.config";
import { motion } from "framer-motion";
import { newsAtom, userAtom, bookmarksAtom, dataAtom } from "../../jotai/Atoms";
import Card from "../../components/shared/Card";
import Marker from "../../components/Marker/Marker";
const News = ({ data }) => {
  const [news, setNews] = useAtom(newsAtom);

  useEffect(() => {
    setNews(data.articles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" flex flex-col items-center ">
      <div className="text-center absolute top-96">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { delay: 1 } },
          }}
          className="text-white font-bold text-6xl"
        >
          SCROLL FOR NEWS
        </motion.h1>
        <br />
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { delay: 1 } },
          }}
          className="text-white font-bold text-6xl"
        >
          ▼
        </motion.h1>
      </div>
      <div className="flex flex-col w-full items-center -mt-24">
        {news &&
          news.map((article, index) => (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0, transition: { delay: 1 } },
              }}
              key={index}
              className="bg-stone-300 text-white flex flex-col w-3/5 p-2 m-4 rounded-xl z-0"
            >
              <h3 className="font-serif font-bold text-xl m-4 text-red-700">
                {article.title.substring(0, 50)}...
              </h3>
              <Card key={index} className=" w-full flex p-1 rounded">
                <div className="w-full flex md:flex-nowrap sm:flex-wrap text-black">
                  <Image
                    className="h-40 w-60 m-4 rounded"
                    src={article.urlToImage}
                    alt={article.source.name}
                    width={450}
                    height={200}
                  />
                  <p className="m-4 font-serif text-black">
                    {article.description === null ? (
                      <span className="font-serif font-bold text-xl">
                        Click Know More For Article
                      </span>
                    ) : (
                      article.description.substring(0, 150)
                    )}
                    ...
                  </p>
                </div>
                <div className="h-100 flex flex-col items-center justify-around">
                  <button className="rounded m-4 p-0.25 bg-red-700 w-32 h-12 hover:bg-stone-300 hover:text-red-700 border-2 border-red-700 font-bold">
                    <a href={article.url}>Know More</a>
                  </button>

                  <Marker link={article} />
                </div>
              </Card>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=2207cb0d3da34c0589ff1bcef4f3dfe1`
  );
  const data = await res.json();

  return { props: { data } };
}

export default News;
