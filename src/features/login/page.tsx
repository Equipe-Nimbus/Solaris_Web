import React from 'react';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="w-full max-w-4xl flex">
                <div className="w-1/2 bg-black flex flex-col justify-center items-center p-10">
                    <div className="text-left">
                        <img src="/public/logo.svg" alt="Solaris Logo" className="w-32 mb-4" />
                    </div>
                </div>

                <div className="w-1/2 bg-black flex flex-col justify-center items-center p-10">
                    <h2 className="text-3xl font-semibold text-white mb-6">Bem Vindo</h2>

                    <form className="w-full max-w-sm">
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                                Email:
                            </label>
                            <input
                                className="shadow appearance-none border-4 border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Informe seu email"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                                Senha:
                            </label>
                            <input
                                className="shadow appearance-none border-4 border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Informe sua senha"
                            />
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
