import { Link } from "@inertiajs/inertia-react";

const Paginate = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current_page = meta.current_page;

    return (
        <div className="btn-group ">
            {prev && (
                <Link href={prev} className="btn btn-outline">
                    «
                </Link>
            )}
            <button className="btn bg-slate-900">Page {current_page}</button>
            {next && (
                <Link href={next} className="btn btn-outline outline-none">
                    »
                </Link>
            )}
        </div>
    );
};

export default Paginate;
