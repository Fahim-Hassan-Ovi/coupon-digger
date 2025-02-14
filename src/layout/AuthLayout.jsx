
import { Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar"
const AuthLayout = () => {
    return (
        <div className=''>
            <header className='py-3 '>
                <Navbar></Navbar>
            </header>
            <Outlet />
        </div>
    );
};

export default AuthLayout;