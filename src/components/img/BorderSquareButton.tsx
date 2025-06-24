import Image from "next/image";
import { imageButtonProps } from "./types";

export function BorderSquareButton(props : imageButtonProps) {
  return (
    <div
      className="h-12 w-12 border-2 border-black bg-white rounded-xl flex items-center justify-center"
      onClick={props.onClick}
    >
      <Image src={props.src} alt={props.alt} width={24} height={24} />
    </div>
  );
}
