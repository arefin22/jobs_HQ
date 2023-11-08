import { Link } from "react-router-dom";

const Ads = () => {
    return (
        <div className="container mx-auto flex md:flex-row justify-around items-center min-h-screen">
            <div className="flex justify-center items-center flex-col text-center">
                <h3 className="text-5xl text-slate-800 dark:text-white font-bold my-9">Looking For A Job ?  </h3>
                <p className="text-center w-2/3 my-4">Find your ideal job opportunity with us! Explore diverse career options, connect with top employers, and take the next step towards a fulfilling career journey.</p>
                <div className="flex flex-row">
                <input type="text" placeholder="Type here" className="input input-ghost dark:bg-slate-800 w-full max-w-xs" />
                <button className="btn rounded-none rounded-tr-xl rounded-br-xl btn-secondary">Search</button>
                </div>
            </div>
            <div className="border-l-2 border-slate-900 dark:border-slate-100 flex justify-center items-center flex-col text-center">
                <h3 className="text-5xl text-slate-800 dark:text-white font-bold my-9">Need An Employee ?  </h3>
                <p className="text-center w-2/3 my-4">Looking for the perfect employee? Let us help you find skilled professionals who match your company needs. Post your job openings and discover the right talent for your team</p>
                <div className="flex flex-row">
                <Link to={'/login'} className="btn rounded btn-outline btn-secondary">Login/SignUp</Link>
                </div>
            </div>
        </div>
    );
};

export default Ads;