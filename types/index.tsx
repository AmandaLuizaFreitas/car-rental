import { MouseEventHandler } from "react";



export interface CustomButtonProps {
  isDisabled?: boolean;
  title:string;
  textStyles?: string;
  rightIcon?: string;
  containerStyles?:string;
  handleClick?:MouseEventHandler<HTMLButtonElement>;
  btnType?: "button"|"submit";
}