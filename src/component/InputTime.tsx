import { useState, Dispatch, SetStateAction } from 'react';

interface Time {
  start: string
  end: string
}

interface Props {
  canEdit: boolean;
  times: Time[];
  setTimes: Dispatch<SetStateAction<Time[]>>;
}

const InputTime = ({canEdit, times, setTimes}: Props) => {
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('00:00');

  const handleClick = () => {
    setTimes([...times, {start: startTime, end: endTime}]);
  }

  return (
    (canEdit) ?
      <>
        <div className="flex text-2xl justify-center mt-10">
          <input
            type="time"
            className="border-2 border-gray-400 rounded-lg px-5 text-center"
            value={startTime}
            onChange={e => setStartTime(e.target.value)}
          />
          <p className="mx-2">~</p>
          <input
            type="time"
            className="border-2 border-gray-400 rounded-lg px-5 text-center"
            value={endTime}
            onChange={e => setEndTime(e.target.value)}
            />
        </div>
        <button
          className="bg-gray-200 flex justify-center mx-auto my-3 p-2 rounded-xl text-xl w-3/5"
          onClick={() => handleClick()}
        >
          追加
        </button>
      </>
      :
      <></>
  )
}

export default InputTime;