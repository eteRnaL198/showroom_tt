import { Dispatch, SetStateAction } from "react";
import { calculate } from "../utility/index";

interface Time {
  start: string;
  end: string;
}

interface Props {
  canEdit: boolean;
  id: number;
  setTimes: Dispatch<SetStateAction<Time[]>>;
  times: Time[];
}

const Element = ({canEdit, id, setTimes, times}: Props) => {
  const time = times[id];
  const [collectTime, discardTime] = calculate(time.start, time.end);
  const elem = <>
    <p>{time.start}-{time.end}</p>
    <p>{collectTime}</p>
    <p>{discardTime}</p>
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