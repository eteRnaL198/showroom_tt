import { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

interface Props {
  canEdit: boolean;
  setCanEdit: Dispatch<SetStateAction<boolean>>
}

const EditButton = ({canEdit, setCanEdit}: Props) => {
  return (
    (canEdit) ?
      <button
        onClick={() => setCanEdit(false)}
        className="bg-green-200 flex justify-center mx-auto my-5 py-1 rounded-xl w-1/3"
      >
        OK
      </button>
    :
      <button
        onClick={() => setCanEdit(true)}
        className="right-8 bottom-8 fixed  text-4xl text-gray-400"
      >
        <FontAwesomeIcon icon={faEdit} />
      </button>
  )
}

export default EditButton;