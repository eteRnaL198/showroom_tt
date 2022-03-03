import React from 'react'
import { useState } from 'react';
import { Header, InputDate, InputTime, InputText, Table, ToggleDisplayButton } from "./component/index";

interface Time {
  collect: string
  discard: string
  end: string
  start: string
}

function App() {
  const [times, setTimes] = useState([] as Time[]);
  const [canEdit, setCanEdit] = useState(true);
  const [date, setDate] = useState('');

  return (
    <div>
      <Header />
      <InputText canEdit={canEdit}/>
      <InputDate canEdit={canEdit} date={date} setDate={setDate} />
      <InputTime canEdit={canEdit} times={times} setTimes={setTimes}/>
      <Table canEdit={canEdit} times={times} setTimes={setTimes}/>
      <ToggleDisplayButton canEdit={canEdit} date={date} times={times} setCanEdit={setCanEdit}/>
    </div>
  );
}

export default App;
