export function Button({text, onClick}: {text: string , onClick?: () => void}) {
  return (
      <div className="h-12 w-24 bg-black rounded-xl flex items-center justify-center">
        <button className="text-white text-sm font-black select-none" onClick={onClick}>{text}</button>
      </div>
  )
}

