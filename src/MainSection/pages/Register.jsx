import { Link } from "react-router-dom";


const Register = () => {


    const handleRegisterSubmit = e => {
        e.preventDefault()

        const data = e.target
        const name = data.name.value
        const email = data.email.value
        const pass = data.password.value
        const photo = data.photoUrl.value
        const recevedData = { name, email, pass, photo }
        console.log(recevedData);
    }

    return (
        <div className="bg-white dark:bg-slate-800">
            <form onSubmit={handleRegisterSubmit}>
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-white border rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-gray-900 text-center text-2xl mb-1 font-medium title-font">Register Now</h2>
                        <p className="leading-relaxed mb-5 text-center text-gray-600">Open The Path How You Want To See Us</p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" required id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" data-tempmail="0">
                            </input>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" data-tempmail="0">
                            </input>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" required id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" data-tempmail="0">
                            </input>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="photoUrl" className="leading-7 text-sm text-gray-600">PhotoURL</label>
                            <input type="text" id="photoUrl" name="photoUrl" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" data-tempmail="0">
                            </input>
                        </div>

                        <input type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" value="Register" />
                        <p className="text-xs text-gray-500 mt-3">Already Have An Account? <Link className="text-sky-700 font-bold" to={'/login'}>Log In</Link></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;