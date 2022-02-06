import { Element } from "./index";

interface Time {
  start: string
  end: string
}

interface Props {
  canEdit: boolean;
  times: Time[];
}

const Table = ({canEdit, times}: Props) => {
  return (
    (canEdit) ?
      <div className="border-2 border-gray-400 gap-3 grid grid-cols-4 mx-auto p-3 rounded-lg text-center w-11/12">
        <div className="contents font-bold">
          <p>配信</p>
          <p>星集め</p>
          <p>捨て星</p>
          <p></p>
        </div>
        {times.map((time, idx) => (
          <Element canEdit={canEdit} key={idx} time={time}/>
        ))}
      </div>
    :
      <div className="border-2 border-gray-400 gap-3 grid grid-cols-3 mx-auto p-3 rounded-lg text-center w-11/12">
        <div className="contents font-bold text-lg">
          <p>配信</p>
          <p>星集め</p>
          <p>捨て星</p>
        </div>
        {times.map((time, idx) => (
          <Element canEdit={canEdit} key={idx} time={time}/>
        ))}
      </div>
  )
}

export default Table;