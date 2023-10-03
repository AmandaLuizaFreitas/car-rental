import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import { FaGasPump } from 'react-icons/fa';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';
import { PiSteeringWheelFill } from 'react-icons/pi';




export const BookinModal = ({car}:any) => {

  
  return (
    <div className="modal-box w-11/12 max-w-5xl items-center">
      <div className='modal-action '>
        <form method="dialog m-auto ">
      <button className="btn  bg-blue-200">
      <AiOutlineClose/>
        </button> 
      </form>
      </div>
      <div className='border-b-[1px] pb-2'>
    <h3 className="font-bold text-lg text-gray-400">Alugue um carro agora!</h3>
    </div>
    <div className='flex justify-center flex-col'>
      <div className='m-5  p-5'>
      <div className='bg-primary-blue-100 p-5 flex justify-center items-center flex-col'>
      <div className="w-full flex justify-center items-cente gap-2 ">
      <h2 className="text-[22px] leading-[26px] font-bold capitalize ">
          {car?.name} {car?.model}
        </h2>
      </div>

      <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold justify-center'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
        {car?.price}
        <span className='self-end text-[14px] leading-[17px] font-medium'>/dia</span>
      </p>

      <div className='relative w-full h-40 my-3 flex justify-center object-contain'>
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
        <li className='flex  items-center justify-between  bg-primary-blue-100 mb-3 py-1 px-2 '>
          <span className='font-medium'>Portas </span>  
          
         {car?.carDoor}
        </li>
        <li className='flex  items-center justify-between bg-primary-blue-100   mb-3 py-1 px-2'>
        <span className='font-medium'> Combustível </span> 
        
          
           {car?.fueltype}
        </li>
        <li className='flex  items-center justify-between bg-primary-blue-100   mb-3 py-1 px-2'>
        <span className='font-medium'>Ano </span> 
          
          {car?.year}
        </li>
      </ul>
     
      </div>
     
      
      
    </div>
   
  </div>
  )
}
