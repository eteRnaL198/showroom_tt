const InputTime = () => {
  return (
    <div className="flex text-xl justify-center my-10">
      <input type="time" placeholder="00:00" className="border-2 border-gray-400 rounded-lg text-center w-32"/>
      <p className="mx-2">~</p>
      <input type="time" placeholder="00:00" className="border-2 border-gray-400 rounded-lg text-center w-32"/>
    </div>
  )
}

export default InputTime;