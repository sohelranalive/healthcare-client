import Container from "../../../components/Container";
import useAuth from "../../../hooks/useAuth";
import logo from "/healthcare-logo.png"
import { NavLink } from "react-router-dom";

const Header = () => {

    const { user, userLogOut } = useAuth()

    const userLogOutHandler = () => {
        userLogOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <Container>
                <div className="flex items-center justify-between py-2">
                    {/* logo and name */}
                    <div className="flex items-center">
                        <img src={logo} alt="" />
                        <h1 className="font-semibold text-2xl ms-1"><span className="text-[#007E85]">Health</span><span className="text-[#6EAB36]">care</span></h1>
                    </div>
                    {/* header menu items */}
                    <div className="flex items-center pt-1 space-x-24 font-semibold">
                        <div>
                            <ul className="flex space-x-8">
                                <li><NavLink to='/' className={({ isActive }) => isActive ? "active" : ""
                                }>Home</NavLink></li>
                                <li><NavLink to='/service' className={({ isActive }) => isActive ? "active" : ""
                                }>Service</NavLink></li>
                                <li><NavLink to='/contact' className={({ isActive }) => isActive ? "active" : ""
                                }>Contact Us</NavLink></li>
                                <li><NavLink to='/about' className={({ isActive }) => isActive ? "active" : ""
                                }>About</NavLink></li>
                                <li><NavLink to='/blog' className={({ isActive }) => isActive ? "active" : ""
                                }>Blog</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            {user
                                ? <ul className="flex space-x-8 items-center">
                                    <li><button onClick={userLogOutHandler} className="primary-button">Logout</button></li>
                                    <li>
                                        <div className="h-12 w-12 rounded-full border-2 border-[#007E85]">
                                            <img src={user.photoURL} alt="user" className="h-full w-full rounded-full" />
                                        </div>
                                    </li>
                                </ul>
                                : <ul className="flex space-x-8">
                                    <li><NavLink to='/signup' className={({ isActive }) => isActive ? "active" : ""}>SingUp</NavLink></li>
                                    <li><NavLink to='/login' className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink></li>
                                </ul>}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;