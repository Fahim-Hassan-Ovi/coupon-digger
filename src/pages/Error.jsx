import error from "../assets/error.jpg"
const Error = () => {
    return (
        <div className="w-3/4 mx-auto flex flex-col gap-10">
           <img src={error} alt="" /> 
           <p className="text-3xl font-bold text-center">Sorry Page Not Found</p>
        </div>
    );
};

export default Error;