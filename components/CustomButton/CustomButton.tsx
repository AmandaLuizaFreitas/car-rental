import { CustomButtonProps } from '@/types';
import React from 'react';
import Image from 'next/image';

export const CustomButton = ({title,textStyles,containerStyles,handleClick,rightIcon,btnType}:CustomButtonProps) => {
  return (
    <button 
    disabled ={false} 
    type={btnType||'button'}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
    <span className={`flex-1  ${textStyles}`}>
    {title}
    </span>
    {rightIcon && (
           <div className="relative w-6 h-6">
             <Image
           src={rightIcon}
           alt="arrow_left"
           fill
           className="object-contain"
        />
           </div>
        )}

    </button>
  )
}
