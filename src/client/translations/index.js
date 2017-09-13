
const _ = require('lodash');

const english = require('./english');

// count determines plurality, so if the str was "hours", if count == 1, it would return "hour" as the string.
export const getstr = ( str, count ) => {

  // If they don't have the key, return garbage
  if ( ! english[str] ) {
    console.warn('No translation found for "'+ str +'"');
    return '[' + str + ']';
  }

  // If it's an array, it has singular and plural and we should check
  // the count
  if ( _.isArray(english[str]) ) {
    if ( _.isUndefined(count) ) {
      throw new Error('No count included for string "'+ str +'"');
    }
    return count === 1 ? english[str][0] : english[str][1];
  }

  return english[str];
}
