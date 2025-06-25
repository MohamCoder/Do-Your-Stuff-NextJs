import { BorderSquareButton } from "./Buttons/img/BorderSquareButton";
import { Button } from "./Buttons/txt/Button";
// todo : add a countdown timer
function countDown(task,tasks) {
  const now = new Date().getTime();
  const distance = deadline - now;

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
}

export function Todo(props: { task: {title: string; deadline: Date} ,isTimeLeft: boolean},onEnd: (task: {title: string; deadline: Date;id: number}) => void) {
  return (
    <div>
      <div className="h-2 w-2 rotate-45 bg-white border-black inline-block border-2 translate-y-[36px]"></div>
      <div className="mb-4 ml-4 flex justify-between w-full">
        <span>
          <h2 className="font-bold text-2xl" id="title">
          </h2>
          <h6 className="text-xs font-bold opacity-50" >
          {
            props.isTimeLeft
          }
          </h6>
        </span>
        <div className="flex gap-4 translate-x-[-1rem]">
          <BorderSquareButton src="/edit.svg" alt="edit" />
          <Button text="done" />
        </div>
      </div>
    </div>
  );
}
