import React from 'react'
import { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { storeTimes } from "../utility/index";

interface Time {
  collect: string
  discard: string
  end: string
  start: string
}

interface Props {
  canEdit: boolean;
  date: string;
  times: Time[];
  setCanEdit: Dispatch<SetStateAction<boolean>>;
}

const ToggleDisplayButton = ({canEdit, date, times, setCanEdit}: Props) => {

  const handleOkClick = async () => {
    if (date === '') {
      alert("日付を入力してください")
    } else  if(times.length === 0) {
      alert("時間を入力してください")
    } else {
      setCanEdit(false);
      try {
        await storeTimes(date, times);
        alert("通知を設定しました")
      } catch (e) {
        alert("通知の設定に失敗しました")
      }
    }
  }

  return (
    (canEdit) ?
      <button
        onClick={() => handleOkClick()}
        className="bg-green-200 flex justify-center mx-auto my-5 py-1 rounded-xl w-1/3"
      >
        OK
      </button>
    :
      <button
        onClick={() => setCanEdit(true)}
        className="right-3 bottom-3 fixed  text-2xl text-gray-400"
      >
        <FontAwesomeIcon icon={faEdit} />
      </button>
  )
}

export default ToggleDisplayButton;