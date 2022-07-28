import React from "react";

function LoginPage(props) {

    return (
        <div className="bg-neutral-900 bg-opacity-95 fixed inset-0 z-50 backdrop-blur-sm">
            <div className="flex flex-col h-screen justify-center place-items-center">
                <div className="text-9xl cursor-pointer flex items-center font-poppins text-pearmint p-1 ml-4">
                        <span className="mr-2 p-2">
                        <i class="fa-brands fa-spotify fa-2x"></i>
                        </span>
                        Statify
                </div>
                <a href={props.Src} className="text-neutral-900 text-5xl font-bold p-6 m-4 bg-pearmint rounded-full font-poppins duration-300 hover:scale-125" onClick={props.ClickFunction}>Log In</a>

            </div>
        </div>
    );
};

export default LoginPage;