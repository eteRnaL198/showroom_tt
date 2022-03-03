import { Dispatch, SetStateAction } from "react";

interface Props {
  canEdit: boolean;
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
}

const InputDate = ({canEdit, date, setDate}: Props) => {
  return (
    (canEdit) ?
    <>
      <div className="flex text-2xl justify-center mt-10">
        <input
          type="date"
          className="border-2 border-gray-400 rounded-lg px-5 text-center"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </div>
    </>
    :
    <></>
  )
}

export default InputDate;