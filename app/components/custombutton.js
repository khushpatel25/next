import clsx from 'clsx'
import React from 'react'

const Custombutton = ({text,icon,classes,onClick}) => {
  return (
    <button className={clsx(classes,"px-6  py-[0.8rem] rounded-full  font-gilroy font-medium text-[14px] items-center antialiased  ")} onClick={onClick}>
       {text}
       {icon}
    </button>
  )
}

export default Custombutton