"use client";
import { SquareButton } from "@/components/Buttons/img/SquareButton";
import { BorderSquareButton } from "@/components/Buttons/img/BorderSquareButton";
import { Button } from "@/components/Buttons/txt/Button";
import { Todo } from "@/components/Todo";
import { Popup } from "@/components/Popup";
import { Task } from "@/components/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [sortMethod, setSortMethod] = useState("Ascending");
  const [showCountdown, setShowCountdown] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [lastId, setLastId] = useState(0);
  useEffect(() => {
    console.log(tasks);
  }, [tasks, sortMethod, showCountdown, showModal]);

  return (
    <>
      {showModal && (
        <Popup
          onClose={() => setShowModal(false)}
          onSubmit={(title: string, deadline: Date) => {
            setTasks([
              ...tasks,
              { title: title, deadline: deadline, id: lastId + 1 },
            ]);
            setLastId(lastId + 1);
          }}
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
              className={!showCountdown ? "hidden" : ""}
              onClick={() => setShowCountdown(!showCountdown)}
            />
            <BorderSquareButton
              src="/time.svg"
              alt="date"
              className={showCountdown ? "hidden" : ""}
              onClick={() => setShowCountdown(!showCountdown)}
            />

            <SquareButton
              src="/sort.svg"
              alt="Ascending Order"
              className={sortMethod === "Descending" ? "hidden" : ""}
              onClick={() => setSortMethod("Descending")}
            />
            <BorderSquareButton
              src="/sort.svg"
              alt="Descending Order"
              className={sortMethod === "Ascending" ? "hidden" : ""}
              onClick={() => setSortMethod("Ascending")}
            />
          </span>
        </div>
      </div>

      <hr className="mx-64" />

      <div id="tasks" className="mx-64 my-8">
        {tasks.map((task: Task, index: number) => (
          <Todo
            key={index}
            task={task}
            onTaskEnd={(task: Task) => {
              setTasks(tasks.filter((t) => t.id !== task.id));
            }}
            showCountdown={showCountdown}
          />
        ))}
      </div>
    </>
  );
}
