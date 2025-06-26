import { useRef, useState, useEffect } from "react";
import { BorderSquareButton } from "./Buttons/img/BorderSquareButton";
import { Button } from "./Buttons/txt/Button";
import { Popup } from "./Popup";
import { Task } from "./types";
// todo : add a countdown timer
export function setCountDown(
  task: Task,
  onTaskEnd: (task: Task) => void,
  countdownRef: React.RefObject<HTMLDivElement | null>,
) {
  if (!countdownRef.current) return;
  const deadline = task.deadline.getTime();

  const now = new Date().getTime();
  const distance = deadline - now;

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance <= 0) {
    onTaskEnd(task);
    return;
  }

  countdownRef.current.innerHTML = `time left ${hours}:${minutes}:${seconds}`;
}

export function Todo(props: {
  task: Task;
  showCountdown: boolean;
  onTaskEnd: (task: Task) => void;
}) {
  const countdownRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    let interval = null;
    if (props.showCountdown) {
      setCountDown(props.task, props.onTaskEnd, countdownRef);
      interval = setInterval(() => {
        setCountDown(props.task, props.onTaskEnd, countdownRef);
      }, 1000);
    } else {
      countdownRef.current!.innerHTML = String(props.task.deadline);
    }
    return () => clearInterval(interval);
  },[props.showCountdown,props.task,props.onTaskEnd]);
  return (
    <div>
      {showModal && (
        <Popup
          onClose={() => setShowModal(false)}
          task={props.task}
          onSubmit={(title: string, deadline: Date) => {
            props.task.title = title;
            props.task.deadline = deadline;
            setShowModal(false);
          }}
        />
      )}
      <div className="h-2 w-2 rotate-45 bg-white border-black inline-block border-2 translate-y-[36px]"></div>
      <div className="mb-4 ml-4 flex justify-between w-full">
        <span>
          <h2 className="font-bold text-2xl">{props.task.title}</h2>
          <h6 className="text-xs font-bold opacity-50" ref={countdownRef}></h6>
        </span>
        <div className="flex gap-4 translate-x-[-1rem]">
          <BorderSquareButton
            src="/edit.svg"
            alt="edit"
            onClick={() => setShowModal(true)}
          />
          <Button text="done" onClick={() => props.onTaskEnd(props.task)} />
        </div>
      </div>
    </div>
  );
}
