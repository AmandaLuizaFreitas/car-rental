import React from 'react'
import { CustomButton } from '../CustomButton/CustomButton'
import Image from 'next/image';

export const Hero = () => {
 

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'> 
        Qualidade por equipe experiente.</h1>
        <p className='hero__subtitle'>
        Estamos aqui para fornecer aos nosso clientes a mais alta qualidade de serviços.com nossa dedicação á satisfação dp cliente,voçê pode ter certeza de que terá uma ótima experiência.
       </p>
       <CustomButton 
       
       title='Explorar carros'
       containerStyles = 'bg-primary-blue text-white rounded-full mt-10'
       
       
       />
      </div>
      <div className='hero__image-container'>
      <div className='hero__image'>
        <Image src='/icon/hero-bg.png' alt='hero bg'
        fill className='object-contain'
        />
      </div>
      
      </div>
    </div>
  )
}
