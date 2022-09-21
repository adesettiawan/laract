import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

const Homepage = (props) => {
    return (
        <>
            <Head title={props.title} />
            <div className="flex justify-center items-center min-h-screen bg-neutral-800 text-white text-2xl">
                <h1>{props.title}</h1>
                <br />
            </div>
        </>
    );
};

export default Homepage;
