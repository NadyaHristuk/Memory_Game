function mix(array) {
  const arr = array.slice(0);
  for (let i = 0; i < array.length; i++) {
    const mixCard = Math.floor(Math.random() * (i + 1));
    const casual = arr[i];
    arr[i] = arr[mixCard];
    arr[mixCard] = casual;
  }
  return arr;
}

export default function generateCards() {
  let id = 0;
  const cards = ['1', '2', '3', '4', '5', '6'].reduce((acc, idx) => {
    acc.push({
      id: id++,
      idx,
      index: id + 5.1,
      overturn: false,
      rival: false,
    });
    acc.push({
      id: id++,
      idx,
      index: id + 5.1,
      overturn: false,
      rival: false,
    });
    return acc;
  }, []);
  return mix(cards);
}
