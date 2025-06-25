"use client";
import { SquareButton } from "@/components/Buttons/img/SquareButton";
import { BorderSquareButton } from "@/components/Buttons/img/BorderSquareButton";
import { Button } from "@/components/Buttons/txt/Button";
import { Todo } from "@/components/Todo";
import { Popup } from "@/components/Popup";
import { useEffect, useState } from "react";

export default function Home() {
  const [isAscending, setIsAscending] = useState(false);
  const [isTimeLeft, setIsTimeLeft] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState<{ title: string; deadline: Date ,id: number}[]>([]);
  let lastId = 0;
  useEffect(() => {
    console.log(tasks);
  }, [tasks, isAscending, isTimeLeft, showModal]);

  return (
    <>
      {showModal && (
        <Popup
          onClose={() => setShowModal(false)}
          onSubmit={(title: string, deadline: Date) =>
            setTasks([...tasks, { title: title, deadline: deadline ,id: lastId++}])
          }
        />
      )}
      <nav className="my-8 mx-32">
        <div className="flex justify-between items-center w-full gap-4">
          <span className="font-black text-black text-4xl">
            do
            <span className="font-outline-2 text-white"> your </span>
            stuff
          </span>

          <Button text="Add" onClick={() => setShowModal(true)} />
        </div>
      </nav>

      <hr />

      <div className="mx-64 my-32 mb-2">
        <div className="flex justify-between items-center w-full">
          <h3 className="font-bold text-3xl">Your Tasks:</h3>
          <span className="flex justify-between gap-4">
            <SquareButton
              src="/time.svg"
              alt="time left"
              className={isTimeLeft ? "hidden" : ""}
              onClick={() => setIsTimeLeft(!isTimeLeft)}
            />
            <BorderSquareButton
              src="/time.svg"
              alt="date"
              className={!isTimeLeft ? "hidden" : ""}
              onClick={() => setIsTimeLeft(!isTimeLeft)}
            />

            <SquareButton
              src="/sort.svg"
              alt="Ascending Order"
              className={isAscending ? "hidden" : ""}
              onClick={() => setIsAscending(!isAscending)}
            />
            <BorderSquareButton
              src="/sort.svg"
              alt="Descending Order"
              className={!isAscending ? "hidden" : ""}
              onClick={() => setIsAscending(!isAscending)}
            />
          </span>
        </div>
      </div>

      <hr className="mx-64" />

      <div id="tasks" className="mx-64 my-8">
        {tasks.map((task, index) => (
          <Todo key={index} task={task} isTimeLeft={isTimeLeft}/>
        ))}
      </div>
    </>
  );
}
