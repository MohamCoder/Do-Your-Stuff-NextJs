export function Input(props: {
  placeholder?: string;
  className?: string;
  min?: number;
  max?: number;
  value?: number;
  type?: string;
}) {
  return (
    <input
      className={
        "w-12 h-12 border-2 border-black bg-white rounded-xl flex items-center justify-center select-none text-center placeholder:font-semibold font-semibold" +
        " " +
        props.className
      }
      placeholder={props.placeholder}
      min={props.min}
      max={props.max}
      value={props.value}
      type={props.type}
    />
  );
}
