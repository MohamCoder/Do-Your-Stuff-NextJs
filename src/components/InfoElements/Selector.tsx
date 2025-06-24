export function Selector(props : {
  options: string[];
  className?: string;
}) {
  return (
    <div
      className={"h-12 w-12 border-2 border-black bg-white rounded-xl flex items-center justify-center select-none" + " " + props.className}
    >
      <select className="flex items-center justify-center text-black text-md font-black">

        {props.options.map((option, index) => (
          <option key={index} >{option}</option>
        ))}
      </select>
    </div>
  );
}
