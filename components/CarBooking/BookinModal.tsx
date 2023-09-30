import React from 'react'
import { CarCar } from '../CarCar/CarCar'
import { Form } from './Form'
import Image from 'next/image';
import {PiSteeringWheelFill} from 'react-icons/pi';
import {MdAirlineSeatReclineNormal} from 'react-icons/md';
import {FaGasPump} from 'react-icons/fa';
import{AiOutlineClose} from 'react-icons/ai';

export const BookinModal = ({car}:any) => {

  
  return (
    <div className="modal-box w-11/12 max-w-5xl">
      <div className='modal-action '>
        <form method="dialog m-auto ">
      <button className="btn  bg-primary-blue-100">
      <AiOutlineClose/>
        </button> 
      </form>
      </div>
      <div className='border-b-[1px] pb-2'>
    <h3 className="font-bold text-lg text-gray-400">Alugue um carro agora!</h3>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className='m-5  p-5'>
      <div className='bg-primary-blue-100 p-5'>
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
      
      
      <ul className='flex items-center  gap-4'>
        <li className='car-card__icon'>
        <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
            <h2 className=' car-card__icon-text'>{car?.carType}</h2>
        </li>
        <li className='car-card__icon'>
        <MdAirlineSeatReclineNormal  className="w-full text-[22px] mb-2" />
            <h2 className='car-card__icon-text'>{car?.seat} Seat</h2>
        </li>
        <li className='car-card__icon'>
        <FaGasPump className="w-full text-[22px] mb-2" />
            <h2 className='car-card__icon-text'>{car?.carAvg} MPG</h2>
        </li>
      </ul>
      </div>
      <ul className='mt-5 text-start   '>
        <li className='flex  items-center justify-between  bg-purple-50 mb-3 py-1 px-2 '>
          <span className='font-medium'>Portas </span>  
          
          <span> {car?.carDoor}</span>
        </li>
        <li className='flex  items-center justify-between bg-purple-50  mb-3 py-1 px-2'>
        <span className='font-medium'> Combustível </span> 
        
          
          <span> {car?.fueltype}</span>
        </li>
        <li className='flex  items-center justify-between bg-purple-50  mb-3 py-1 px-2'>
        <span className='font-medium'>Ano </span> 
          
          <span> {car?.year}</span>
        </li>
      </ul>
      <div>
        
      </div>
      </div>

      <div className='modal-action'>
      <form  className='flex items-center justify-center'>
        <Form car={car}/>
      
      </form>

      </div>
      
    </div>
   
  </div>
  )
}
