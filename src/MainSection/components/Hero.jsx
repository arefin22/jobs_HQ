import { useTheme } from "../hooks/useTheme";

const Hero = () => {

    const { mode } = useTheme();

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/YkKMXD9/mixkit-exhausted-man-in-front-of-a-computer-with-his-head-69-original.png)' }}>
            {
                mode === 'dark' ? <div className="hero-overlay bg-opacity-90"></div>
                :
                <div className="hero-overlay bg-opacity-80"></div>
            }
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-5xl">
                    <h1 className="mb-5 text-8xl text-white font-bold">Find & Hire Experts for any Job.</h1>
                    <p className="my-10 text-lg text-white">Unlock your potential with quality job & earn from world leading brands.</p>
                    <div className="relative max-w-md mx-auto h-32  ">
                        <input type="text" placeholder="Search By Name" className="input input-bordered bg-white text-slate-800 dark:bg-slate-800 dark:text-white h-16 w-full pr-16" />
                        <button className="p-4  hover:bg-gray-500 bg-green-700 text-white absolute px-9 top-0 right-0 rounded-r-lg h-16">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;