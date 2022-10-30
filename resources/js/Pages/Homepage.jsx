import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import NewsLists from "@/Components/News/NewsLists";
import Navbar from "@/Components/Navbar";
import Paginate from "@/Components/Pagination/Paginate";

const Homepage = (props) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        setNews(props.news.data);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex flex-col lg:flex-row gap-4 pt-4 pb-4 lg:flex-wrap lg:items-stretch justify-center items-center px-4">
                <NewsLists news={news} />
            </div>
            <div className="flex items-center justify-center py-16">
                <Paginate meta={props.news.meta} />
            </div>
        </div>
    );
};

export default Homepage;
