import React from "react";

const newsCard = (news) => {
    console.log(news);
    return news.map((newsData, i) => {
        return (
            <div className="card w-full lg:w-96 bg-base-100 shadow-xl mt-5">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {newsData.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{newsData.description}</p>
                    <div className="card-actions justify-end mt-4">
                        <div className="badge badge-outline">
                            {newsData.category}
                        </div>
                        <div className="badge badge-outline">
                            {newsData.author}
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

const notFoundNews = () => {
    return "Data tidak ditemukan !";
};

const NewsLists = ({ news }) => {
    return !news ? notFoundNews() : newsCard(news);
};

export default NewsLists;
