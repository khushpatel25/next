import Link from 'next/link'
import React from 'react'
import Location from '../icons/location'

const Topservicecard = ({
	src,
	service,
	name,
	designation,
	location,
	href,
}) => {
  return (
    <div className="flex flex-col justify-center items-start cursor-pointer">
			<div className="w-[32vw] md:w-[25vw] lg:w-[17vw] xl:w-[15vw] 2xl:w-56">
				<img src={src} alt="services image" className="w-full" />
			</div>
			<Link href={href} className="my-3 block overflow-hidden">
				<p className="font-semibold text-gray-800 text-base xl:text-lg lg:text-lg truncate font-gilroy">
					{service || name}
				</p>
			</Link>
			<div className="flex flex-row items-start gap-2">
				{location && (
					<div className="ml-1 ">
						<Location className="transform scale-80" />
					</div>
				)}
				<p className="text-gray-600 text-sm lg:text-base">
					{location || designation}
				</p>
			</div>
		</div>
  )
}

export default Topservicecard