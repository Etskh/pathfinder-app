import * as Fetch from './Fetch';

export const getByName = ( name ) => {
  if ( !name ) {
    return Promise.resolve({
      name: 'Unchosen',
      // empty
      stats: {},
      // other info to just get by
      size: 0,
    });
  }

  return Fetch.fromWeb('race', name).then( output => {
    // TODO: translate result into controller
    return {
      name: 'Chosen',
      stats: {},
      size: 0,
    };
  });
};

export const getAll = ( ) => {
  return Fetch.fromWeb('race', 'all').then( output => {
    return output.races;
  });
}
