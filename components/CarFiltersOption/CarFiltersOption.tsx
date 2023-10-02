import  { useEffect, useState } from 'react';

export const CarFiltersOption = ({carList,setBrand,orderCarList}:any) => {
  const [brandList,setBrandList] = useState<any>();

  const BrandSet = new Set();

  useEffect(()=>{
   if(carList){
    filterCarList()
   }
  },[carList]);

 const filterCarList = () =>{
  carList.forEach((e:any)=>{
    BrandSet.add(e.carBrand)
  });
 
  setBrandList(Array.from(BrandSet))
 };

  return (
    <div className='mt-10 flex items-center justify-between max-width' >
      <div className='home__text-container mb-5 '>
        <h2 className='text-2xl ml-2 md:text-4xl font-extrabold '> Catálogo de Carros</h2>
        <p className='hidden md:block'>Explore o carro que você pode gostar</p>
      </div>
      <div className=' flex gap-3'>
      <select className="select select-ghost w-full max-w-xs"
       onChange={(e)=>orderCarList(e.target.value)}
      >
       <option disabled selected>Preço</option>
       <option value={-1}>Menor Preço</option>
        <option value={1}>Maior Preço</option>

   </select>
   <select className="select select-ghost  w-full md:block max-w-xs hidden" onChange={(e)=>setBrand(e.target.value)}>
       <option disabled selected>Fabricante</option>
       {brandList&&brandList.map((brand:string,index:number)=>(
              <option key={index}>{brand}</option>
            ))}
       
   </select>
     
      </div>
    </div>
  )
}
