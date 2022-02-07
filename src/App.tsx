import React from 'react';
import { useState } from 'react';
import { Header, InputTime, InputText, Table, EditButton } from "./component/index";

interface Time {
  start: string
  end: string
}

function App() {
  const [times, setTimes] = useState([] as Time[]);
  const [canEdit, setCanEdit] = useState(true);

  return (
    <div>
      <Header />
      <InputText canEdit={canEdit}/>
      <InputTime canEdit={canEdit} times={times} setTimes={setTimes}/>
      <Table canEdit={canEdit} times={times} setTimes={setTimes}/>
      <EditButton canEdit={canEdit} setCanEdit={setCanEdit}/>
    </div>
  );
}

export default App;
