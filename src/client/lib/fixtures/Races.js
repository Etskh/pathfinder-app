
const raceList = [{
  name: 'Goblin',
  size: -1,
  stats: {
    str: -2,
    dex: 4,
    cha: -2,
  }
}];


export const getByName = (name) => {
  const goblin = raceList[0];
  return Promise.resolve(goblin);
};
