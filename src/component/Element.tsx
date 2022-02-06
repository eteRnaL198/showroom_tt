import { calculate } from "../utility/index";

interface Time {
  start: string;
  end: string;
}

interface Props {
  canEdit: boolean;
  time: Time;
}

const Element = ({canEdit, time}: Props) => {
  return (
    (canEdit) ?
      <div className="bg-gray-200 contents">
        <p>{time.start}-{time.end}</p>
        <p>{time.start}</p>
        <p>{time.end}</p>
        <button
          className="bg-red-400 rounded-2xl text-white"
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