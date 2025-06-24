import { BorderSquareButton } from "./img/BorderSquareButton";
import { Button } from "./txt/Button";

export function Todo() {
  return (
    <div>
      <div className="h-2 w-2 rotate-45 bg-white border-black inline-block border-2 translate-y-[29px]"></div>
      <div className="mb-4 ml-4 flex justify-between w-full">
        <span>
          <h2 className="font-medium text-2xl" id="title">
            workout
          </h2>
          <h6 className="text-xs opacity-75">for 3 hours</h6>
        </span>
        <div className="flex gap-4 translate-x-[-1rem]">
          <BorderSquareButton url="X" />
          <Button text="done" />
        </div>
      </div>
    </div>
  );
}
