import React from 'react'
import { useState, Dispatch, SetStateAction } from 'react';
import { calculateStarTime, calculateNextStreamingTime } from "../utility/index";

interface Time {
  collect: string
  discard: string
  end: string
  start: string
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
    const [collectTime, discardTime] = calculateStarTime(startTime, endTime);
    const isCorrectInput = (collectTime.length === 5 && discardTime.length === 5); // 正常な場合 11:11
    if (isCorrectInput) {
      setTimes([...times, {
        collect: collectTime, discard: discardTime, end: endTime, start: startTime
      }]);
      const [nextStartTime, nextEndTime] = calculateNextStreamingTime(startTime, endTime);
      setStartTime(nextStartTime);
      setEndTime(nextEndTime);
    } else {
      window.alert("時刻を正しく入力してください");
    }
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