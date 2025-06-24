import { Button } from "@/components/txt/Button";
import { SquareButton } from "@/components/img/SquareButton";
import { Todo } from "@/components/Todo";

export default function Home() {
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
            <SquareButton  src="/time.svg" alt="show time"/>
            <SquareButton  src="/sort.svg" alt="sort"/>
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
      </div>
    </>
  );
}
