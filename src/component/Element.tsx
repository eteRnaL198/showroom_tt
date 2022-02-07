import { Dispatch, SetStateAction } from "react";
import { calculate } from "../utility/index";

interface Time {
  start: string;
  end: string;
}

interface Props {
  canEdit: boolean;
  key: number;
  setTimes: Dispatch<SetStateAction<Time[]>>;
  times: Time[];
}

const Element = ({canEdit, key, setTimes, times}: Props) => {
  const time = times[key];
  
  const handleClick = () => {
    const newTimes = [...times];
    newTimes.splice(key, 1);
    setTimes(newTimes);
  }

  return (
    (canEdit) ?
      <div className="bg-gray-200 contents">
        <p>{time.start}-{time.end}</p>
        <p>{time.start}</p>
        <p>{time.end}</p>
        <button
          className="bg-red-400 rounded-2xl text-white"
          onClick={() => handleClick()}
        >
          削除
        </button>
      </div>
    :
      <div className="bg-gray-200 contents text-lg">
        <p>{time.start}-{time.end}</p>
        <p>{time.start}</p>
        <p>{time.end}</p>
      </div>
  )
}

export default Element;