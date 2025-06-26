"use client";
import { Button } from "./Buttons/txt/Button";
import { Selector } from "./InfoElements/Selector";
import { useState } from "react";
import { Task } from "./types";
import { BorderSquareButton } from "./Buttons/img/BorderSquareButton";

function sanitizeInput(min: number, max: number, target: HTMLInputElement) {
  const value = target.value;
  if (
    Number(value) > max ||
    Number(value) < min ||
    Number.isNaN(Number(value))
  ) {
    target.value = min.toString();
    return min;
  }
  //to remove zeros from the start
  target.value = Number(value).toString();
  return Number(value);
}

function convertDeadlineToDate(deadline: number[]) {
  const hour = deadline[0];
  const minute = deadline[1];
  const amPm = deadline[2];

  const isPM = amPm === 1;
  const date = new Date();
  const todoHours = isPM ? hour + 12 : hour;
  const tododMinutes = minute;

  if (
    date.getHours() > todoHours ||
    (date.getHours() === todoHours && date.getMinutes() > tododMinutes)
  ) {
    date.setDate(date.getDate() + 1);
  }

  date.setHours(todoHours);
  date.setMinutes(tododMinutes);
  date.setSeconds(0);
  date.setMilliseconds(0);

  return date;
}

function convertDateToDeadline(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amPm = hours >= 12 ? 1 : 0;
  if (hours > 12) {
    return [hours - 12, minutes, amPm];
  }
  return [hours, minutes, amPm];
}

export function Popup(props: {
  task?: Task;
  onSubmit: (title: string, deadline: Date) => void;
  onClose: () => void;
  className?: string;
}) {
  const [title, setTitle] = useState<string>(
    props.task ? props.task.title : "",
  );
  const [deadline, setDeadline] = useState<number[]>(
    props.task ? convertDateToDeadline(props.task.deadline) : [0, 0, 0],
  );
  return (
    <div className={props.className}>
      {/* background */}
      <div className="h-[100vh] w-[100vw] bg-black opacity-50 absolute top-0 left-0 z-10"></div>
      {/* modal */}
      <div className="absolute top-0 left-0 w-full h-full z-20">
        <div className="lg:mx-64 md:mx-32 mx-8 mt-32 h-[30.6rem] w-auto bg-white rounded-xl py-4 px-8">
          <div className="w-full h-auto flex justify-between items-center">
            <span className="font-semibold text-black md:text-4xl text-3xl">
              add a task:
            </span>
            <BorderSquareButton
              src="/close.svg"
              alt="close"
              onClick={props.onClose}
            />
          </div>
          <hr className="mt-4" />
          <div className="mt-8 font-semibold text-black text-2xl">
            description:
          </div>
          <textarea
            className="w-full h-24 border-2 border-black-15 rounded-xl mt-4 font-semibold text-lg p-2"
            placeholder="like :code for one hour"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
          <div className="font-semibold text-black text-2xl mt-4">
            deadline:
          </div>
          <div className="flex space-x-4 mt-4 w-full justify-center">
            <input
              placeholder="12"
              value={deadline[0]}
              onChange={(e) =>
                setDeadline([
                  sanitizeInput(0, 12, e.target),
                  deadline[1],
                  deadline[2],
                ])
              }
            />
            <input
              placeholder="00"
              value={deadline[1]}
              onChange={(e) =>
                setDeadline([
                  deadline[0],
                  sanitizeInput(0, 59, e.target),
                  deadline[2],
                ])
              }
            />
            <Selector
              options={["AM", "PM"]}
              selected={deadline[2] === 0 ? "AM" : "PM"}
              onChange={(e) =>
                setDeadline([
                  deadline[0],
                  deadline[1],
                  e.target.value === "AM" ? 0 : 1,
                ])
              }
            />
          </div>
          <div
            className="w-full flex items-center justify-end mt-8"
            id="buttonWrapper"
          >
            <Button
              text="add"
              onClick={() => {
                props.onSubmit(title, convertDeadlineToDate(deadline));
                props.onClose();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
