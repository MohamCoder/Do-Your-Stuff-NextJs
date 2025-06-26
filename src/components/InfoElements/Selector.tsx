export function Selector(props: {
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selected: string;
  className?: string;
}) {
  return (
    <div
      className={
        "h-12 w-12 border-2 border-black bg-white rounded-xl flex items-center justify-center select-none" +
        " " +
        props.className
      }
    >
      <select
        className="flex items-center justify-center text-black text-md font-black"
        onChange={props.onChange}
      >
        {props.options.map((option, index) => (
          <>
            {props.selected === option ? (
              <option key={index} selected>
                {option}
              </option>
            ) : (
              <option key={index}>{option}</option>
            )}
          </>
        ))}
      </select>
    </div>
  );
}
