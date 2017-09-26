
export const Spells = {
  getAll: () => {
    const spells = require('./fixtures/spell-out');

    return Promise.resolve(spells);
  },
};
