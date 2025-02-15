import profile from "../assets/profile.jpg"
const AboutDev = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
            <div className="bg-white p-8 shadow-lg rounded-2xl max-w-2xl text-center">
                <img
                    src={profile}
                    alt="Developer"
                    className="w-32 h-32 rounded-full mx-auto border-4 border-teal-500 shadow-md"
                />
                <h1 className="text-3xl font-bold mt-4 text-gray-800">Hi, I&apos;m Md. Fahim Hassan Ovi</h1>
                <p className="text-lg text-gray-600 mt-2">
                    A passionate <span className="font-semibold text-teal-500">Full-Stack Developer </span>  
                    dedicated to crafting seamless user experiences and scalable backend solutions.
                </p>
                
                <div className="mt-4">
                    <h2 className="text-xl font-semibold text-gray-700">Tech Stack 🚀</h2>
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">React.js</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Node.js</span>
                        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">MongoDB</span>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">Express.js</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Tailwind CSS</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Firebase</span>
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-700">Let's Connect 📬</h2>
                    <p className="text-gray-500 mt-1">Feel free to reach out for collaborations or just to say hi!</p>
                    <div className="flex justify-center gap-4 mt-4">
                        <a href="https://github.com/Fahim-Hassan-Ovi" className="text-gray-600 hover:text-gray-900 text-2xl">
                            🔗 GitHub
                        </a>
                        <a href="https://linkedin.com/in/yourlinkedin" className="text-gray-600 hover:text-blue-600 text-2xl">
                            🔗 LinkedIn
                        </a>
                        <a href="fahimhassan125928@gmail.com" className="text-gray-600 hover:text-red-500 text-2xl">
                            📧 Email
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutDev;
