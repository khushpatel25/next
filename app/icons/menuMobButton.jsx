import React from 'react'

const MenuMobButton = ({stroke,className}) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8H20M4 16H20" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export default MenuMobButton
