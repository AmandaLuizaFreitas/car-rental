

import { Hero } from '@/components/Hero/Hero'
import { Searchunput } from '@/components/SearchInput/SearchInput'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero/>
       <Searchunput/>
    </div>
  )
}
