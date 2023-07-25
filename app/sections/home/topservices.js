import Padding from '@/app/components/padding'
import { useTranslations } from 'next-intl'
import React from 'react'

const Topservices = () => {
    const t= useTranslations()
  return (
    <div className='bg-[#2B2D33] mt-16 xl:mt-44'>
        <Padding>
            <div className=''>
                <p className='text-[#B8BABD]'>
                {t("k1357")}
                </p>
                <p className='text-[#B8BABD]'>
                    {t("k698")}
                </p>
            </div>
        </Padding>
    </div>
  )
}

export default Topservices