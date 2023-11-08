import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";


const Login = () => {

    const { signInUser, signInUsingPopup } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLoginSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser);
                navigate(location?.state ? location?.state : '/')
                const user = { email }
                axios.post('https://jobs-hq-server.vercel.app/jwt', user)
                    .then(res => {
                        console.log(res);
                        toast('Log In Successful', res)
                    })
            })
            .catch(err => toast('Invalid Email or Password', err))
    }
    // const handleGoogleLogin = () => {
    //     signInUsingPopup
    //     // navigate(location?.state ? location.state : '/')
        
    // }


    return (
        <div className="bg-white dark:bg-slate-800">
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white border rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <form onSubmit={handleLoginSubmit}>
                        <h2 className="text-gray-900 text-center text-2xl mb-1 font-medium title-font">Log In</h2>
                        <p className="leading-relaxed mb-5 text-center text-gray-600">Open The Path How You Want To See Us</p>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" required id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" data-tempmail="0">
                            </input>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" required id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" data-tempmail="0">
                            </input>
                        </div>

                        <input type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" value="Log In" />
                        <p className="text-xs text-gray-500 mt-3">Do Not Have An Account? <Link className="text-sky-700 font-bold" to={'/register'}>Register</Link></p>



                    </form>
                    <div className="w-full pt-4">
                        <hr />
                        <button className="mt-4 w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={signInUsingPopup}>Log In Using Google</button>
                    </div>
                </div>
            </div>



        </div >
    );
};

export default Login;