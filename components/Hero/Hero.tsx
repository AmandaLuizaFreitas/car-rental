import React from 'react'
import { CustomButton } from '../CustomButton/CustomButton'
import Image from 'next/image';

export const Hero = () => {
 

  return (
    <div className='hero '>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'> 
        Dirija seus sonhos hoje!</h1>
        <p className='hero__subtitle'>
        Expermente a liberdade da estrada com o aluguel de carros RodoAluga.Escolha entre uma variedade de veículos para atender ás suas necessidades.
       </p>
       <CustomButton 
       title='Explorar carros'
       containerStyles = 'bg-primary-blue text-white rounded-full mt-10'
      />
      </div>
      <div className='hero__image-container'>
      <div className='hero__image'>
        <Image src='/img/hero_photo.svg' alt='hero bg'
        fill className='object-contain'/>
        
      
      </div>
      </div>
    </div>
  )
}
