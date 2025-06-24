import { BorderSquareButton } from "./img/BorderSquareButton";
import { Button } from "./txt/Button";

export function Todo() {
  return (
    <div className="mb-4 flex justify-between w-full">
      <span>
        <h2 className="text-2xl" id="title">
          workout
        </h2>
        <h6 className="text-xs">for 3 hours</h6>
      </span>
      <div className="flex gap-4">
        <BorderSquareButton url="X" />
        <Button text="done" />
      </div>
    </div>
  );
}
