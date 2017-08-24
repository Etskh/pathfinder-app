'use strict';

const _ = require('lodash');

// TODO: add purpose
let _UUID = 0;
export const createUUID = () => {
  return 'uuid-'+ (++_UUID);
}


// TODO: add examples
export const createComposite = (stats, unit, original) => {
  let _unit = unit;
  let _total = 0;
  for (const name in stats) {
      _total += stats[name];
  }
  return {
    getTotal: () => _total,
    getUnit: () => _unit,
    add: (name, stat) => {
      _total += stat;
      stats[name] = stat;
    },
    addComposite: (comp) => {
      _total += comp.getTotal();
      // TODO: add the stats to the stats
      // Set the unit
      if (comp.getUnit()) {
          _unit = comp.getUnit();
      }
    },
    setUnit: (unit) => {
      _unit = unit;
    },
    getStats: () => stats,
  };
};


// TODO: add examples here
export const createConditional = (conditions) => {
  //
  if( !conditions ) {
    return {
      atLeast: {},
      atMost: {},
      has: {},
      checkObject: (object) => {
        return true;
      }
    };
  }

  // Make sure we have all of our objects
  if( !conditions.atLeast ) {
    conditions.atLeast = {};
  }
  if( !conditions.atMost ) {
    conditions.atMost = {};
  }
  if( !conditions.has ) {
    conditions.has = {};
  }

  const getValue = (object, field ) => {
    let objectValue = _.get(object, field);
    // If it's a composite, then get the total of it
    if( objectValue && objectValue.getTotal ) {
      objectValue = objectValue.getTotal();
    }
    return objectValue;
  }

  conditions.checkObject = (object) => {
    //console.log(`Checking character for traits...`);
    for( let field in conditions.atLeast ) {
      let objectValue = getValue(object, field);
      //console.log(`${field} (${objectValue}) < ${conditions.atLeast[field]}`);
      if( objectValue < conditions.atLeast[field]) {
        //console.log('Not high enough!');
        return false;
      }
    }
    for( let field in conditions.atMost ) {
      let objectValue = getValue(object, field);
      //console.log(`${field} (${objectValue}) > ${conditions.atMost[field]}`);
      if( objectValue > conditions.atMost[field]) {
        //console.log('Too high! Won\'t do!');
        return false;
      }
    }


    for( let field in conditions.has ) {
      let objectValue = _.get(object, field);
      if( _.isObjectLike(objectValue)) {
        // If the value is an object, then we can infer that the field
        // is an array - and must contain an object like this one
        //console.log(`Looking for ${JSON.stringify(conditions.has[field])} inside ${JSON.stringify(objectValue)}`);
        if( ! _.find(objectValue, conditions.has[field] )) {
          return false;
        }

      }
      else {
        // Otherwise, it must be a simple value, and we can make sure it's
        // exactly equal to it. If not, DEATH!
        //console.log(`Making sure ${conditions.has[field]} equals ${objectValue}`);
        if ( conditions.has[field] !== objectValue ) {
          //console.log(`It doesnt! Ridiculous!`);
          return false;
        }
      }
    }

    return true;
  }

  return conditions;
}
