import React from 'react';

const ERROR404 = () => {
    return (
        <div class="flex flex-col justify-center items-center w-full h-screen space-y-5">
            <div class="text-red-500 font-medium text-3xl">This page is not found !</div>
            <div><a class="text-blue-500 cursor-pointer"   href="/">back to home page</a></div>
        </div>
    )
}
export default ERROR404