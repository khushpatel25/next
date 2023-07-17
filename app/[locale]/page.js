import Image from 'next/image'
import Dropdown from '../components/dropdown'
import LocaleSwitcherSelect from '../components/LocaleSwitcherSelect'

export default function Home() {
  return (
    <div className='mx-60'>
      <LocaleSwitcherSelect/>
    </div>
  )
}
