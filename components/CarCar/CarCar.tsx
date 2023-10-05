import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import{MdAirlineSeatReclineNormal} from 'react-icons/md';
import{FaGasPump} from 'react-icons/fa';
import{PiSteeringWheelFill} from 'react-icons/pi';
import { CustomButton } from '../CustomButton/CustomButton';
export const CarCar = (props:any) => {

  const [car,setcar]= useState<any>();

  useEffect(()=>{
  if(props.car){
    setcar(props.car)
  }
  },[props.car]);
  return car&&(
    <div className='car-card group  '>
      <div className="car-card__content">
      <h2 className="car-card__content-title">
          {car?.name} {car?.model}
        </h2>
        
      </div>
      <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
        {car?.price}
        <span className='self-end text-[14px] leading-[17px] font-medium'>/dia</span>
      </p>
      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={car?.image?.url}  alt='image do carro' width={220} height={200}/>
      </div>
      <div className='flex justify-around items-center gap-2 group-hover:hidden '>
        <div className='car-card__icon  text-gray-500'>
            <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
            <h2 className=' car-card__icon-text'>{car?.carType}</h2>
        </div>
        <div className='car-card__icon  text-gray-500'>
            <MdAirlineSeatReclineNormal  className="w-full text-[22px] mb-2" />
            <h2 className='car-card__icon-text'>{car?.seat} Seat</h2>
        </div>
        <div className=' car-card__icon  text-gray-500 '>
            <FaGasPump className="w-full text-[22px] mb-2" />
            <h2 className='car-card__icon-text'>{car?.carAvg} MPG</h2>
        </div>
        
    </div>
    <div className='hidden group-hover:flex
    p-2 rounded-lg text-white w-full px-5 justify-between'
    >
      <CustomButton
            title='Ver Mais'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/icon/right-arrow.svg'
            
          />
    </div>
   
    </div>
  )
}
