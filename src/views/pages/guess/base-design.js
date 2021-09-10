import React from 'react'
import Inp from '@Components/base/input'
    
const BaseDesign = () => {
    return (
        <div class="w-full mx-auto flex flex-col items-center space-y-5 p-10">
            <div class="t_title">BaseDesign component</div>
            
            <p class="pt-5 t_subtitle">font Montserrat : </p>
            <div class="flex space-x-5 mt-5 text-lg">
                <p >font regular</p>
                <p class="font-medium">font medium</p>
                <p class="font-semibold">font semi bold</p>
                <p class="font-bold">font bold</p>
            </div>

            <p class="pt-5 t_subtitle">Buttons : </p>
            <div class="flex space-x-5 mt-5">
                <button class="t_empty_btn">connect</button>
                <button class="t_btn_fix">fix length</button>
                <button class="t_btn">submit auto width</button>
                <button class="t_btn-red">refuse</button>
            </div>

            <p class="pt-5 t_subtitle">Box shadow : </p>
            <div class="flex space-x-5 mt-5">
                <button class="t_box w-48 h-48">box..</button>
            </div>

            <p class="pt-5 t_subtitle">Input : </p>
            <div class="flex flex-col justify-start items-center space-y-5 mt-5">
                <input class="t_input w-72" placeholder="input"></input>
                <Inp />
            </div>

        </div>
        

    )
}

export default BaseDesign