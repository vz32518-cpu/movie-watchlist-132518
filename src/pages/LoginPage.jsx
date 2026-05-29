import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const { login } =
        useContext(AuthContext);

    const navigate =
        useNavigate();

    const handleLogin = () => {

        login();

        navigate(
            "/movies"
        );

    };

    return (

        <div className="min-h-screen bg-slate-100 flex justify-center items-center">

            <div className="bg-white shadow-lg rounded-xl p-10 w-96">

                <h1 className="text-3xl font-bold mb-8">

                    Login

                </h1>

                <button
                    onClick={handleLogin}
                    className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700"
                >

                    Login

                </button>

            </div>

        </div>

    );
}

export default LoginPage;