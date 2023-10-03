"use client"

import { useEffect, useState } from 'react';
import { CarFiltersOption } from '@/components/CarFiltersOption/CarFiltersOption';
import { Hero } from '@/components/Hero/Hero';
import { Searchunput } from '@/components/SearchInput/SearchInput';
import { getCarsList } from '@/services/indext';

import { Carlist } from '@/components/Carlist/Carlist';
import { BookCreatedFlagContext } from '@/context/BookCreatedFlagContext';
import { ToastMsg } from '@/components/ToastMsg/ToastMsg';






export default function Home() {
 const [carList,setCarList] = useState<any>([]);
 const [carOrgList,setCarOrgList] = useState<any>([]);
 const [showToastMsg,setShowToastMsg]= useState<boolean>(false);

 const filterCarList = (brand:string) =>{
 const filterList = carOrgList.filter((item:any) =>
  item.carBrand == brand 
 )
 setCarList(filterList);
 };


  const getCarLists= async()=>{
    const result:any = await getCarsList()
    
    setCarList(result?.carLists)
    setCarOrgList(result?.carLists)
  } 
  const orderCarList =(orde:any)=>{
    const sorteData = [...carOrgList].sort((a,b)=>
    orde == -1? a.price - b.price:b.price -a.price
    )
    setCarList(sorteData);

  }

  
  
  useEffect(()=>{
    getCarLists()
    
  },[]);

  return (
    <div className='overflow-hidden'>
     <BookCreatedFlagContext.Provider value={{showToastMsg,setShowToastMsg}}>
      <Hero/>
      <Searchunput/>
      <CarFiltersOption
      orderCarList = {(value:string)=>orderCarList(value)}
      carList={carOrgList} setBrand={(value:string)=> filterCarList(value)}/>
      <Carlist carList={carList}/>
         {showToastMsg? <ToastMsg/>: null }
         
      </BookCreatedFlagContext.Provider>
     
    </div>
  )
}
