import Image from "next/image";
import { imageButtonProps } from "./types";

export function SquareButton(props : imageButtonProps) {
  return (
    <div
      className={"h-12 w-12 bg-black rounded-xl flex items-center justify-center select-none"+" "+props.className}
      onClick={props.onClick}
    >
      <Image src={props.src} alt={props.alt} width={24} height={24} className="invert"/>
    </div>
  );
}
