import React from 'react'

const Button = ({ title }) => {
    return (
        <button
            className='capitalize bg-brightColor flex items-center text-white px-4 py-1 rounded-tl-lg rounded-br-lg text-base hover:bg-hoverColor transition duration-300 ease-in-out'
        >
            {title}
        </button>
    )
}

export default Button