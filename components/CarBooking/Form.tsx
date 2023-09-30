import React from 'react'

export const Form = ({car}:any) => {
  return (
    
      <div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Local de Retirada</label>
        <select className="select 
        select-bordered w-full max-w-lg"
        name="location" 
      
       >
          <option disabled selected>
          Local de Retirada?
          </option>
          <option>
            teste
          </option>
        </select>
      </div>
      <div className="flex flec-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Data de Retirada</label>
          <input
            type="date"
           
            placeholder="Type here"
            name="pickUpDate"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Data de Devolução</label>
          <input
            type="date"
          
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
            
            name="pickUpTime"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Horário de Devolução</label>
          <input
            type="time"
            name="dropOffTime"
           
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>

      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Número de Contato</label>
        <input
          type="text"
          placeholder="(99)9999-9999"
          
          name="contactNumber"
          className="input input-bordered w-full max-w-lg"
        />
      </div>
       
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">E-mail</label>
        <input
          type="text"
          placeholder="exemplo@email.com"
          
          name="contactNumber"
          className="input input-bordered w-full max-w-lg"
        />
      </div>

      <div className="modal-action">
        <button className="btn">Close</button>
        <button
          className="btn bg-primary-blue text-white
hover:bg-blue-800"
           
        >
          Save
        </button>
      </div>
      
    </div>
    
  )
}

