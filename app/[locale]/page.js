import Image from 'next/image'
import Hero from '../sections/home/hero'
import Services from '../sections/home/services'
import Testimonials from '../sections/home/testimonials'
import Topservices from '../sections/home/topservices'
import Servicesbar from '../components/servicesbar'


export default function Home() {

  let tags = [
    "Cleaning Services",
    "k957",
    "k279",
    "k638",
    "k991",
    "k575",
    "Cleaning Services",
    "k957",
    "k279",
    "k638",
    "k991",
    "k575",
  ];
  return (
    <div>
      <Hero/>
      <Services/>
      <Testimonials/>
      <Topservices/>
      <Servicesbar tags={tags}/>
    </div>
  )
}
