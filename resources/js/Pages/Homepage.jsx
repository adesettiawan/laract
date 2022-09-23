import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";

const Homepage = (props) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        setNews(props.news);
    }, []);

    console.log(news);
    return (
        <>
            <Head title={props.title} />
            <div className="flex-column justify-start items-start min-h-screen bg-neutral-800 text-white">
                <div>
                    <br />
                    <h1 className="p-5 text-3xl">{props.title}</h1>
                    <br />
                </div>
                <div>
                    {news
                        ? news.map((newsData) => {
                              return (
                                  <div
                                      key={newsData.id}
                                      className="p-4 m-3 bg-white text-black rounded"
                                  >
                                      <h1 className="text-dark">
                                          {newsData.title}
                                      </h1>
                                      <p className="pt-3 pb-3 text-sm">
                                          {newsData.description}
                                      </p>
                                      <ul className="flex text-sm">
                                          <li>{newsData.author}</li>
                                          <li className="pl-5">
                                              {newsData.category}
                                          </li>
                                      </ul>
                                  </div>
                              );
                          })
                        : "Data tidak ditemukan!"}
                </div>
            </div>
        </>
    );
};

export default Homepage;
