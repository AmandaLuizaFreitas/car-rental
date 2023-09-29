"use client"

import { useEffect, useState } from 'react';
import { CarFiltersOption } from '@/components/CarFiltersOption/CarFiltersOption';
import { Hero } from '@/components/Hero/Hero';
import { Searchunput } from '@/components/SearchInput/SearchInput';
import { getCarsList } from '@/services/indext';
import Image from 'next/image'
import { Carlist } from '@/components/Carlist/Carlist';

export default function Home() {
 const [carList,setCarList] = useState<any>([]);
 const [carOrgList,setCarOrgList] = useState<any>([]);

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

  useEffect(()=>{
    getCarLists()
    
  },[]);

  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Searchunput/>
      <CarFiltersOption carList={carOrgList} setBrand={(value:string)=> filterCarList(value)}/>
      <Carlist carList={carList}/>
    </div>
  )
}
