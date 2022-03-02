import React from 'react'
import { useState } from 'react';

interface Props {
  canEdit: boolean;
}

const InputText = ({canEdit}: Props) => {
  const [message, setMessage] = useState('');

  return (
    <>
    <div className="flex justify-center my-8">
      {(canEdit) ? 
        <textarea
          placeholder="メッセージを入力"
          className="border-2 border-gray-400 h-60 p-3 rounded-lg w-11/12"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        :
        <textarea
          placeholder="メッセージを入力"
          className="h-60 p-3 rounded-lg w-11/12 focus:outline-none"
          value={message}
          readOnly
        />
      }
    </div>
    </>
  )
}

export default InputText;