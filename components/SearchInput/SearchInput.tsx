 import{HiLocationMarker} from 'react-icons/hi';

export const Searchunput = () => {
  return (
    <div className='max-width  '>
      <div className='mt-5'>
      <h2 className='text-center text-[20px]
        text-gray-400 mb-3'>Vamos buscar o que você precisa.</h2>
     
      </div>
      <div className='flex justify-center  '>
      <div className='flex items-center justify-center bg-gray-100 p-1 px-5 rounded-full divide-x 
      '>
      <div className='flex items-center searchbar__item '>
       
           <HiLocationMarker/>
          <input type="text"  placeholder='Localização' className='p-2 outline-none bg-transparent '/>
        
      </div>
       <div>
        <input type="date" className='p-2 outline-none bg-transparent text-gray-400'/>
       </div>
      </div>
      </div>
    </div>
  )
}
