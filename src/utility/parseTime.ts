const parseTime = (char: string): number => { // 10:15 →615
  const [hour, min] = char.split(':').map(elm => parseInt(elm))
  return hour * 60 + min;
}

export default parseTime;