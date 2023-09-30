import  { useEffect, useState } from 'react'
import { CarCar } from '../CarCar/CarCar'
import { BookinModal } from '../CarBooking/BookinModal'
import { CarCardSkelton } from '../CarCardSkelton/CarCardSkelton'

export const Carlist = (props:any) => {
  const [isLoaded,setIsLoaded]=useState(true)
  const [selectedCar,setSelectedCar]=useState<any>([]);

  useEffect(()=>{
    if(props.carsList)
    {
        setIsLoaded(false)
    }
},[props.carsList]);

  return (
    <div className=' max-width grid  gap-8 mb-2
    sm:grid-cols-2 px-5 py-2 
    md: grid-cols-1
    lg:grid-cols-4
    '>
      
    {props.carList.map((car:any,index:number)=>(
      <div key={index} onClick={()=>{(window as any).my_modal_4.showModal();setSelectedCar(car)}}>
       <CarCar car={car}/>
       </div>
      
       
       
    ))}
   
   {isLoaded?
        [1,2,3,4,5].map((item)=>(
          <CarCardSkelton/>  
        ))
        :null}   


<dialog id="my_modal_4" className="modal">
 <BookinModal car={selectedCar}/>
</dialog>
    
    </div>
  )
}
