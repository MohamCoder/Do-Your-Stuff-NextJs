import { BorderSquareButton } from "./Buttons/img/BorderSquareButton";
import { Button } from "./Buttons/txt/Button";
import { Input } from "./InfoElements/Input";
import { Selector } from "./InfoElements/Selector";

export function PopupModal() {
  return (
    <div className="lg:mx-64 md:mx-32 mx-8 mt-32 h-[490px] w-auto bg-white rounded-xl py-4 px-8">
      <div className="w-full h-auto flex justify-between items-center" >
        <BorderSquareButton src="/close.svg" alt="close" />
        <span className="font-semibold text-black md:text-custom-2 text-3xl">
          add a task:
        </span>
      </div>
      <hr className="mt-4"/>
      <div className="mt-8 font-semibold text-black text-2xl">description:</div>
      <textarea
        className="w-full h-24 border-2 border-black-15 rounded-xl mt-4 font-semibold text-lg p-2"
        placeholder="like :code for one hour"
      ></textarea>
      <div className="font-semibold text-black text-2xl mt-4">deadline:</div>
      <div
        className="flex space-x-4 mt-4 w-full justify-center"
      >
        <Input placeholder="12"  min={0} max={12} type="number"/>
        <Input placeholder="00"  min={0} max={59} type="number"/>
        <Selector options={["AM","PM"]}/>
      </div>
      <div
        className="w-full flex items-center justify-end mt-8"
        id="buttonWrapper"
      >
        <Button text="add"/>
      </div>
    </div>
  );
}
