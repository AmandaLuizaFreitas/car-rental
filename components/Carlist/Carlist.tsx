import React from 'react'
import { CarCar } from '../CarCar/CarCar'

export const Carlist = (props:any) => {
  return (
    <div className=' max-width grid  gap-8 mb-2
    sm:grid-cols-2 px-5 py-2 
    md: grid-cols-1
    lg:grid-cols-4
    '>
      
    {props.carList.map((car:any,index:number)=>(
      
       <CarCar car={car}/>

      
       
       
    ))}
    
    </div>
  )
}
