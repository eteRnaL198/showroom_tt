import React from 'react'
import { Dispatch, SetStateAction } from "react";

interface Time {
  collect: string;
  discard: string;
  end: string;
  start: string;
}

interface Props {
  canEdit: boolean;
  id: number;
  setTimes: Dispatch<SetStateAction<Time[]>>;
  times: Time[];
}

const Element = ({canEdit, id, setTimes, times}: Props) => {
  const time = times[id];
  const elem = <>
    <p>{time.start}-{time.end}</p>
    <p>{time.collect}</p>
    <p>{time.discard}</p>
  </>

  const handleClick = () => {
    const newTimes = [...times];
    newTimes.splice(id, 1);
    setTimes(newTimes);
  }

  return (
    (canEdit) ?
      <div className="bg-gray-200 contents">
        {elem}
        <button
          className="bg-red-400 rounded-2xl text-white"
          onClick={() => handleClick()}
        >
          削除
        </button>
      </div>
    :
      <div className="bg-gray-200 contents text-lg">
        {elem}
      </div>
  )
}

export default Element;