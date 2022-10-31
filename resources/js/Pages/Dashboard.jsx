import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const values = {
            title,
            description,
            category,
        };
        Inertia.post("/news", values);

        setTitle("");
        setDescription("");
        setCategory("");
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-4">
                        <div className="p-6">
                            <input
                                type="text"
                                placeholder="Title"
                                className="input input-bordered w-full my-2"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Description"
                                className="input input-bordered w-full my-2"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Category"
                                className="input input-bordered w-full my-2"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <button
                                onClick={() => handleSubmit()}
                                className="btn bg-teal-600 text-white border-none text-sm mt-4 hover:bg-teal-700"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
