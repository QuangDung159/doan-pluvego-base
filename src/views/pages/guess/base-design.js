import React from 'react'
import Inp from '@Components/base/input'
    
const BaseDesign = () => {
    return (
        <div className="w-full mx-auto flex flex-col items-center space-y-5 p-10">
            <div className="t_title">BaseDesign component</div>
            
            <p className="pt-5 t_subtitle">font Montserrat : </p>
            <div className="flex space-x-5 mt-5 text-lg">
                <p >font regular</p>
                <p className="font-medium">font medium</p>
                <p className="font-semibold">font semi bold</p>
                <p className="font-bold">font bold</p>
            </div>

            <p className="pt-5 t_subtitle">Buttons : </p>
            <div className="flex space-x-5 mt-5">
                <button className="t_empty_btn">connect</button>
                <button className="t_btn_fix">fix length</button>
                <button className="t_btn">submit auto width</button>
                <button className="t_btn-red">refuse</button>
            </div>

            <p className="pt-5 t_subtitle">Box shadow : </p>
            <div className="flex space-x-5 mt-5">
                <button className="t_box w-48 h-48">box..</button>
            </div>

            <p className="pt-5 t_subtitle">Input : </p>
            <div className="flex flex-col justify-start items-center space-y-5 mt-5">
                <input className="t_input w-72" placeholder="input"></input>
                <Inp />
            </div>

        </div>
        

    )
}

export default BaseDesign