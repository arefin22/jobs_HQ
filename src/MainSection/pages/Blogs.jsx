import './Blogs.css'
const Blogs = () => {



    return (
        <div className="bg-white grid lg:grid-cols-3 dark:bg-slate-900 ">
            <div className='text-justify p-6 bg-slate-200  dark:bg-slate-800 m-14'>
                <div className="text-2xl font-semibold mb-5">What is an access token and refresh token? How do they work and where should we store them on the client-side?</div>
                <div className=" text-slate-400">
                    <p>An access token is a credential used by an application to access an API on behalf of a user. It represents the authorization granted to the application and specifies the permissions granted. Access tokens are short-lived and expire after a certain period.</p>

                    <p>A refresh token is used to obtain a new access token when the current access token expires. It helps in maintaining a users session without requiring them to log in again. Refresh tokens are long-lived and more secure than access tokens since they are only exchanged for a new access token when necessary.</p>

                    <p>To securely store these tokens on the client-side:</p>
                    <ul>
                        <li>Access tokens should be stored in memory (e.g., variables) during a users session. Avoid storing them in local storage or cookies to prevent XSS attacks.</li>
                        <li>Refresh tokens should be stored in a secure HttpOnly and Secure cookie. This way, they are sent automatically with each HTTP request, and they are not accessible via JavaScript, enhancing security.</li>
                    </ul>

                    <p>Proper token management is crucial for application security and user privacy.</p>
                </div>
            </div>
            <div className='text-justify p-6 bg-slate-200 dark:bg-slate-800 m-14'>
                <div className="text-2xl font-semibold mb-5">What is an access token and refresh token? How do they work and where should we store them on the client-side?</div>
                <div className="text-slate-400">
                    <p>An access token is a credential used by an application to access an API on behalf of a user. It represents the authorization granted to the application and specifies the permissions granted. Access tokens are short-lived and expire after a certain period.</p>

                    <p>A refresh token is used to obtain a new access token when the current access token expires. It helps in maintaining a users session without requiring them to log in again. Refresh tokens are long-lived and more secure than access tokens since they are only exchanged for a new access token when necessary.</p>

                    <p>To securely store these tokens on the client-side:</p>
                    <ul>
                        <li>Access tokens should be stored in memory (e.g., variables) during a users session. Avoid storing them in local storage or cookies to prevent XSS attacks.</li>
                        <li>Refresh tokens should be stored in a secure HttpOnly and Secure cookie. This way, they are sent automatically with each HTTP request, and they are not accessible via JavaScript, enhancing security.</li>
                    </ul>

                    <p>Proper token management is crucial for application security and user privacy.</p>
                </div>
            </div>
            <div className='text-justify p-6 bg-slate-200 dark:bg-slate-800 m-14'>
                <div className="text-2xl font-semibold mb-5">What is an access token and refresh token? How do they work and where should we store them on the client-side?</div>
                <div className="text-slate-400">
                    <p>An access token is a credential used by an application to access an API on behalf of a user. It represents the authorization granted to the application and specifies the permissions granted. Access tokens are short-lived and expire after a certain period.</p>

                    <p>A refresh token is used to obtain a new access token when the current access token expires. It helps in maintaining a users session without requiring them to log in again. Refresh tokens are long-lived and more secure than access tokens since they are only exchanged for a new access token when necessary.</p>

                    <p>To securely store these tokens on the client-side:</p>
                    <ul>
                        <li>Access tokens should be stored in memory (e.g., variables) during a users session. Avoid storing them in local storage or cookies to prevent XSS attacks.</li>
                        <li>Refresh tokens should be stored in a secure HttpOnly and Secure cookie. This way, they are sent automatically with each HTTP request, and they are not accessible via JavaScript, enhancing security.</li>
                    </ul>

                    <p>Proper token management is crucial for application security and user privacy.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;