"use client";
import { SquareButton } from "@/components/Buttons/img/SquareButton";
import { BorderSquareButton } from "@/components/Buttons/img/BorderSquareButton";
import { Button } from "@/components/Buttons/txt/Button";
import { Todo } from "@/components/Todo";
import { PopupModal } from "@/components/PopupModal";
import { useState } from "react";

export default function Home() {
  const [isAsending, setIsAsending] = useState(false);
  const [isTimeLeft, setIsTimeLeft] = useState(false);

  return (
    <>
      <nav className="my-8 mx-32">
        <div className="flex justify-between items-center w-full gap-4">
          <span className="font-black text-black text-4xl">
            do
            <span className="font-outline-2 text-white"> your </span>
            stuff
          </span>

          <Button text="Add" />
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
              className={isTimeLeft? "hidden" : ""}
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
              alt="Asending Order"
              className={isAsending ? "hidden" : ""}
              onClick={() => setIsAsending(!isAsending)}
            />
            <BorderSquareButton
              src="/sort.svg"
              alt="Descending Order"
              className={!isAsending ? "hidden" : ""}
              onClick={() => setIsAsending(!isAsending)}
            />
          </span>
        </div>
      </div>

      <hr className="mx-64" />

      <div id="tasks" className="mx-64 my-8">
        <ul>
          <li>
            <Todo />
          </li>
        </ul>
          <PopupModal />
      </div>
    </>
  );
}
