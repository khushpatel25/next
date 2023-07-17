import clsx from 'clsx'
import React from 'react'

const Padding = ({children,classes}) => {
  return (
    <div className={clsx(classes,'px-[1rem] sm:px-[2rem] xl:px-[3rem] 2xl:px-[4rem]')}>{children}</div>
  )
}

export default Padding