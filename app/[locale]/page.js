import Image from 'next/image'
import Hero from '../sections/home/hero'
import Services from '../sections/home/services'
import Testimonials from '../sections/home/testimonials'
import Topservices from '../sections/home/topservices'


export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Testimonials/>
      <Topservices/>
    </div>
  )
}
