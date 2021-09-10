import React from 'react'

const InlineInp = ({label, placeholder, value, onChange, register, inputName, type, validateMessage}) => {
    return (
        <div className="mb-3 justify-end flex">
          {label && (
            <label for="input" className="px-3" style={{
              alignItems: 'center',
              display: 'flex',
            }}>{label}</label>
          )}
          {register ? (
            <div
              className="flex flex-col">
              <input
              {...register(inputName?.toString())} type={type} name={inputName} id="input" className={`t_input ${label ? 'w-72' : 'w-100'}`} placeholder={placeholder} value={value || ''} onChange={(input) => onChange(input)}></input>
              {validateMessage && (
                  <p className="text-center t_err">{validateMessage}</p>
              )}
            </div>
          ) : (
            <>
              <input type={type} name={inputName} id="input" className={`t_input ${label ? 'w-72' : 'w-100'} `} placeholder={placeholder} value={value || ''} onChange={(input) => onChange(input)}></input>
              {validateMessage && (
                  <p className="text-center t_err">{validateMessage}</p>
              )}
            </>
          )
        }   
      </div>
    )
}

export default InlineInp