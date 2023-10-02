
import { footerLinks } from '@/constant';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
     <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
          <Image src="/img/logo.png" alt='logo' width={180} height={20} className='object-contain'/> 
          <p>Na RodoAluga,<br/> a liberdade está ao seu alcance.
          
          </p>
      </div>
      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>&copy;2023 RodoAluga. Todos os Direitos Reservados</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
        Política de Privacidade
        </Link>
        <Link href="/" className="text-gray-500">
        Termos & Condições
        </Link>
      </div>
    </div>
  
    </footer>
  )
}
