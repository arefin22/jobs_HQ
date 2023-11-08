

const AboutUs = () => {
    return (
        <section className="text-gray-600 body-font ">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/pv8QKqS/bg-night.webp)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" className="object-cover object-center h-full w-full" src="https://i.ibb.co/qCjvWFy/kate-sade-2z-Zp12-Chxh-U-unsplash.jpg" />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <h2 className='text-5xl font-bold  underline mb-6 text-slate-800 dark:text-white '>Welcome to JOBsHQ</h2>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="flex-grow">
                                <h2 className="text-slate-200 text-lg title-font font-medium mb-3">At JOBsHQ, </h2>
                                <p className="text-slate-300">We believe in connecting talented individuals with opportunities that can transform their careers. Our platform is designed to simplify the job search process, making it easier for both job seekers and employers to find their perfect match. With a user-friendly interface, powerful search tools, and a commitment to excellence, we are here to revolutionize the way people find jobs and companies hire top talent.
                                </p>
                                <h2 className="text-slate-200 mt-4 text-lg title-font font-medium mb-3">Our Mission, </h2>
                                <p className="text-slate-300">To empower individuals to reach their full potential by providing access to meaningful and fulfilling employment opportunities. We are dedicated to creating a world where every person can pursue a career they are passionate about, and every organization can build a workforce of skilled and dedicated professionals.
                                </p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;