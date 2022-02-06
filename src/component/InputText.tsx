import { useState } from 'react';

const InputText = () => {
  const [message, setMessage] = useState('');
  const [flag, setFlag] = useState(true);

  return (
    <>
    <div className="flex justify-center my-8">
      {(flag) ? 
        <textarea
          placeholder="メッセージを入力"
          className="border-2 border-grey-400 h-72 p-3 rounded-lg w-4/5"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        :
        <textarea
          placeholder="メッセージを入力"
          className="h-72 p-3 rounded-lg w-4/5 focus:outline-none"
          value={message}
          readOnly
        />
      }
    </div>
    <button
      onClick={() => {setFlag(!flag)}}
    >
      {(flag) ? "true" : "false"}
    </button>
    </>
  )
}

export default InputText;