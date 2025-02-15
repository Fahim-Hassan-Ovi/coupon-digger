import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
    const emailRef = useRef();
    const { userLogin, setUser, signInWithGoogle, updatePassword } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
                // alert(error.code);
                setError({ ...error, login: err.code })
            })
    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            // console.log(result.user);
            navigate('/')
        })
        .catch(error => {
            // console.log('ERROR', error.message)
        });
    }
    const handleForgetPassword = () =>{
        const email = emailRef.current.value;
        if(!email){
            toast.error('Please provide a valid email address')
        }
        else{
            updatePassword(email)
            .then(() =>{
                toast.success('Password Reset email send. Please check your email')
            })
        }
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <Toaster />
            <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" ref={emailRef} name="email" placeholder="email" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered bg-[#F3F3F3]" required />
                        {
                            error.login && (
                                <>
                                    <label className="label  text-sm text-red-600">
                                        {error.login}
                                    </label>
                                    <br />
                                </>
                            )
                        }
                        <label onClick={handleForgetPassword} className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-full bg-[#403F3F] border-none shadow-none hover:bg-gray-500">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Dont’t Have An Account ? <Link className="text-red-500" to="/auth/register">Register</Link></p>
                
                    <button onClick={handleGoogleSignIn} className="btn btn-primary bg-[#403F3F] border-none shadow-none mx-8 mt-4 hover:bg-gray-500">Google</button>
                
            </div>
        </div>
    );
};

export default Login;