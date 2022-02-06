const Input = () => {
  return (
    <div className="flex text-lg justify-center">
      <input type="text" placeholder="00:00" className="border-2 border-gray-400 rounded-lg text-center w-16"/>
      <p>~</p>
      <input type="text" placeholder="00:00" className="border-2 border-gray-400 rounded-lg text-center w-16"/>
    </div>
  )
}

export default Input;