export function Button({text}: {text: string}) {
  return (
      <div className="h-12 w-24 bg-black rounded-xl flex items-center justify-center">
        <button className="text-white text-custom-1 font-black select-none">{text}</button>
      </div>
  )
}

