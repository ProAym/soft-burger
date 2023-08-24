import React, { useState } from "react";
import 'alertifyjs/build/css/alertify.css';
import burgerLogo from "../../assets/backgroundyok.png";
import { Link } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-white ">
            <div className="bg-white p-12 rounded-lg shadow-lg">
                <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
                <img src={burgerLogo} alt="Burger Logo" className="w-[150px] h-[150px] mx-auto mb-2" />

                    Soft Burger'e Hoşgeldiniz
                </h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-800">
                            E-Posta
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="E-posta"
                            id="email"
                            name="email"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-purple-200 focus:border-purple-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-lg font-medium text-gray-800">
                            Şifre
                        </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Şifre"
                            id="password"
                            name="password"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-red-200 focus:border-red-500"
                        />
                    </div>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-md w-full font-semibold transition duration-300"
                        type="submit"
                    >
                        Giriş Yap
                    </button>
                </form>
                <p className="text-center mt-6 text-gray-600">
                    Henüz bir hesabınız yok mu?{" "}
                    <Link to="/signup">
                    <button
                        className="text-red-500 hover:underline font-semibold"
                        
                    >
                        Kaydolun
                    </button>
                    </Link>
                    
                </p>
            </div>
        </div>
    );
};

export default Login;
