
import { BookCreatedFlagContext } from "@/context/BookCreatedFlagContext";
import { createBooking, getStoreLocations } from "@/services/indext";
import { useUser } from "@clerk/nextjs";
import React, { useContext, useEffect, useState } from "react";

export const Form =({car}:any) => {

  const [storeLocation, setStoreLocation] = useState<any>([]);
  const {showToastMsg,setShowToastMsg}=useContext(BookCreatedFlagContext)
  const [formValue,setFormValue]=useState({
    location:'',
    pickUpDate:'',
    dropOffDate:'',
    pickUpTime:'',
    dropOffTime:'',
    contactNumber:'',
    userName:'Felipe Santos',
    carId: ""
  })

  const today: any = new Date();
  useEffect(() => {
    storeLocations();
  }, []);

  useEffect(()=>{
    if(car)
    {
      setFormValue({
        ...formValue,
        carId: car.id
      });
    }
  },[car])
  const storeLocations= async () => {
    const resp: any = await getStoreLocations();
    setStoreLocation(resp?.storesLocations);
  };

  const handleChange=(event:any)=>{
    setFormValue({
      ...formValue,
      [event.target.name]:event.target.value
    });
  }

  const handleSubmit=async()=>{
    console.log(formValue);
    const resp=await createBooking(formValue);
    console.log(resp);
    if(resp)
    {
      setShowToastMsg(true);
    }
   
  }

  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Local de Retirada</label>
        <select className="select 
        select-bordered w-full max-w-lg"
        name="location" 
        onChange={handleChange}
       >
          <option disabled selected>
          Local de Retirada?
          </option>
          {storeLocation &&
            storeLocation.map((loc: any, index: number) => (
              <option key={index}>{loc?.address}</option>
            ))}
        </select>
      </div>
      <div className="flex flec-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Data de Retirada</label>
          <input
            type="date"
            min={today}
            onChange={handleChange}
            placeholder="Type here"
            name="pickUpDate"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Data de Entrega</label>
          <input
            type="date"
            onChange={handleChange}
            placeholder="Type here"
                name="dropOffDate"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div className="flex gap-5 ">
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Horário de Retirada</label>
          <input
            type="time"
            onChange={handleChange}
            name="pickUpTime"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Horário de Entrega</label>
          <input
            type="time"
            name="dropOffTime"
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>

      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Número de Contato</label>
        <input
          type="text"
          placeholder="(00)00000000"
          onChange={handleChange}
          name="contactNumber"
          className="input input-bordered w-full max-w-lg"
        />
      </div>
      <div className="modal-action">
        
    <button className="btn bg-blue-500 text-white
hover:bg-blue-800"
            onClick={handleSubmit}
        >
          Salvar
        </button>
      </div>
      
    </div>
  );
}
