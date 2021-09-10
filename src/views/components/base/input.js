import React from 'react'

const Inp = () => {
    return (
        <div>
            <label for="input" class="px-3">label :</label>
            <input id="input" class="t_input w-72" placeholder="input"></input>
            <p class="text-right t_err">error submit</p>
        </div>
    )
}

export default Inp