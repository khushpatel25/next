import React from 'react'
import Logo from '../icons/logo'
import Navlink from './navlink'
import { useTranslations } from 'next-intl'

const Navbar = () => {
    const t = useTranslations()
  return (
    <div className='font-silka bg-brandblack px-[4rem]'>
        <div className='flex items-center gap-8' >
        <Logo color={'white'}/>
        <div className='flex gap-8'>
            <Navlink text={t("93ffc1e2a2")} link={'#'}/>
            <Navlink text={t("eaef6085e2")} link={'#'}/>
            <Navlink text={t("8f59f637a8")} link={'#'}/>
        </div>
        </div>
    </div>
  )
}

export default Navbar