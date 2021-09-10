import React, { useState } from 'react';
import logo from '@Assets/images/logo.png';
import { AlignJustify, X } from 'react-feather';

const Header = () => {
    
    const [showSidebar, setShowSidebar] = useState(0);

    let classStr = (showSidebar ? 'opacity-100 duration-700' : 'duration-700 opacity-0 transform -translate-x-full') 
    + " md:hidden left-0 top-0 z-30  h-t_menu fixed flex justify-end w-6/12 t_box cursor-pointer"

    let classStr2 = (showSidebar ? 'opacity-100 duration-700' : 'duration-700 opacity-0 transform -translate-x-full') 
    + " md:hidden mt-100 top-0 z-20 h-full fixed  w-6/12 t_box cursor-pointer"

    return (
        <div class="shadow-md w-full z-10 fixed top-0 left-0 text-gray-700 h-t_menu flex bg-white">
            {/* horizontal menu */}
            <div class="container max-w-screen-xl flex items-center justify-between" onClick={() => setShowSidebar(1)}>
                <img src = { logo } class="w-32 hidden md:block cursor-pointer" alt="logo" />
                <div class="hidden md:block">
                    <button class="t_empty_btn cursor-pointer">login</button>
                </div>
                {/* show menu on mobile */}
                <AlignJustify size="32" onClick={() => setShowSidebar(!showSidebar)} class="md:hidden cursor-pointer"/>
                <img src = { logo } class="w-32 md:hidden cursor-pointer" alt="logo" />
            </div>

            {/* side bar menu */}
            <div class = {classStr} onClick={() => setShowSidebar(!showSidebar)}>
                <X size="32" onClick={() => setShowSidebar(!!showSidebar)} class="md:hidden cursor-pointer"/>
            </div>
            <div class={classStr2}>
                {
                    [...Array(10)].map((x, i) =>
                        <p class="pt-20">sdfsdfds</p>
                    )
                }
            </div>
        </div>
    )
}

export default Header