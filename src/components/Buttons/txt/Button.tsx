export function Button({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="h-12 w-24 bg-black rounded-xl flex items-center justify-center"
      onClick={onClick}
    >
      <button className="text-white text-sm font-black select-none">
        {text}
      </button>
    </div>
  );
}
