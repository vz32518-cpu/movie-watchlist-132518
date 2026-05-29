import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

    const {
        user,
        logout,
    } = useContext(AuthContext);

    return (

        <nav className="bg-slate-900 text-white px-8 py-5 flex justify-between items-center shadow-md">

            <Link
                to="/"
                className="text-3xl font-bold"
            >
                Movie Watchlist
            </Link>

            <div className="flex items-center gap-5">

                {!user ? (

                    <Link
                        to="/login"
                        className="hover:text-gray-300"
                    >
                        Login
                    </Link>

                ) : (

                    <>

            <span>
              Welcome,
                {" "}
                {user.name}
            </span>

                        <button
                            onClick={logout}
                            className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
                        >
                            Logout
                        </button>

                    </>

                )}

            </div>

        </nav>

    );
}

export default Navbar;