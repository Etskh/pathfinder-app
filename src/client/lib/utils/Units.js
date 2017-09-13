'use strict';

import { createComposite } from './Core';



const createCount_r = (count, context) => {
  //console.log(`Parsing "${count}"`);
  // If it's a simple number, return it
  if (typeof count === 'number') {
    return createComposite({
      'base': count
    });
  }

  // Maybe it's more complicated...
  else if (typeof count === 'string') {

    // If it's a context variable, just use it
    if (context[count]) {
      let stats = {};
      stats[count] = context[count];
      return createComposite(stats);
    }

    // if it's a number masquerading as a string
    else if (count.match(/^[0-9]+$/)) {
      return createComposite({'base': parseInt(count)});
    }

    // Parse the complicated math
    else {
      // if there's a / it must be "per" or whatever
      if (count.indexOf('/') !== -1) {
        let clauses = count.split('/');

        // should be only two
        if (clauses.length !== 2) {
          throw new Error({text: 'I expected there to only be two clauses', clauses: clauses});
        }

        let stats = {};
        let first = createCount_r(clauses[0].trim(), context);
        let second = createCount_r(clauses[1].trim(), context);

        // Multiply them together
        stats[count] = first.getTotal();
        stats[count] *= second.getTotal();
        return createComposite(stats, first.getUnit() || second.getUnit());
      }

      else {
        // This must have a unit of measure
        let clauses = count.split(' ');
        if (clauses.length !== 2) {
          throw new Error(JSON.stringify({text: 'I expected there to only be two clauses', clauses: clauses}));
        }
        let composite = createCount_r(clauses[0], context);
        composite.setUnit(clauses[1]);
        return composite;
      }
    }
  }
  // It must be an array, so we'll just add them together
  const composite = createComposite();
  count.forEach(count => {
    composite.addComposite(createCount_r(count, context));
  });
  return composite;
};




const targetDefinitions = {
  'creature': 'Definition of a creature',
  'humanoid': 'Humanoid creatures are bipedal',
  'animal': 'Definition of an animal',
};
const distanceConversions = {
  'feet': 0.2,
  'squares': 1,
  'miles': 1056,
};
const timeParseableConversions = {
  'sec': 1 / 6,
  'immediate': 0.1,
  'action': 0.5,
  'standard': 0.6,
  'round': 1,
  'rounds': 1,
  'min': 10,
  'min.': 10,
  'mins': 10,
  'minute': 10,
  'minutes': 10,
  'hr': 600,
  'hr.': 600,
  'hour': 600,
  'hours': 600,
}
const timeConversions = {
  'seconds': timeParseableConversions.sec,
  'rounds': timeParseableConversions.rounds,
  'minutes': timeParseableConversions.min,
  'hours': timeParseableConversions.hr,
};

const getConversions = ( metric, conversions ) => {
  const units = [];
  for( let unit in conversions ) {
    if( metric / conversions[unit] > 0.2 ) {
      units.push([Math.round((metric / conversions[unit])*100)/100 , unit]);
    }
  }
  return units;
}
const getSmallestConversion = ( metric, conversions ) => {
  const allMetrics = getConversions(metric, conversions);
  var smallestMetric = [Infinity, 'infinity'];
  allMetrics.forEach( metric => {
    if(metric[0] < smallestMetric[0] && metric[0] > 0.9999 ) {
      smallestMetric = metric;
    }
  });
  return smallestMetric;
}


const createTarget = (parsedUnits, description, fromString ) => {
  return {
    'type': parsedUnits.getUnit(),
    'count': parsedUnits,
    getType: () => 'Target',
    toString: () => {
      // TODO: Make this part of the translations, not here
      const isPlural = parsedUnits.getTotal() > 1 || parsedUnits.getTotal() == 0;
      return 'up to ' + parsedUnits.getTotal() + ' ' + parsedUnits.getUnit() + (isPlural?'s':'');
    },
    getAll: () => {
      return [
        [parsedUnits.getUnit() + ': ', description],
      ];
    },
    getOriginalString: () => fromString,
  };
};


const createDistance = (composite, scale, fromString ) => {
  const _squares = Math.round(composite.getTotal() * scale);
  return {
    getType: () => 'Distance',
    toString: () => {
      return getSmallestConversion(_squares, distanceConversions).join(' ');
    },
    getAll: () => {
      return getConversions(_squares, distanceConversions);
    },
    getOriginalString: () => 'range: ' + fromString,
  };
};

const createTime = (composite, scale, fromString) => {
  const _rounds = composite.getTotal() * scale;
  return {
    getType: () => 'Time',
    toString: () => {
      return getSmallestConversion(_rounds, timeConversions).join(' ');
    },
    toRounds: () => _rounds,
    getAll: () => {
      return getConversions(_rounds, timeConversions);
    },
    getOriginalString: () => fromString,
  };
};


const createTouchDistance = () => {
  return {
    getType: () => 'Distance',
    toString: () => {
      return 'touch';
    },
    getAll: () => {
      return [
        ['touch: ','The target must be adjacent to the caster. If the target does not wish to be the recipient, the caster must make a melee touch attack {melee_touch_attack}'],
      ];
    },
    getOriginalString: () => 'range: touch',
  };
}

const createPersonalTarget = () => {
  return {
    'type': 'you',
    'count': 1,
    getType: () => 'Target',
    toString: () => 'personal',
    getAll: () => {
      return [
        ['personal: ', targetDefinitions.personal ],
      ];
    },
    getOriginalString: () => 'creature touched',
  };
}

const createTouchTarget = () => {
  return {
    'type': 'creature',
    'count': 1,
    getType: () => 'Target',
    toString: () => 'creature touched',
    getAll: () => {
      return [
        ['creature: ', targetDefinitions.creature ],
      ];
    },
    getOriginalString: () => 'creature touched',
  };
};


const createConcentrationTime = () => {
  return {
    getTotal: () => 'concentration',
    getType: () => 'Time',
    toString: () => {
      return 'concentration';
    },
    getAll: () => {
      return [
        ['concentration: ','You can maintain the effect as long as your character is concentrating on it. If you are disturbed you need to make a {---} concentration check.'],
      ];
    },
    getOriginalString: () => 'duration: concentration',
  };
};

const createUntilDischargedTime = () => {
  return {
    getTotal: () => 'until discharged',
    getType: () => 'Time',
    toString: () => {
      return 'until discharged';
    },
    getAll: () => {
      return [
        ['until discharged: ','The effect will wait forever until it is triggered, then the spells effect will end.'],
      ];
    },
    getOriginalString: () => 'duration: permanent until discharged',
  };
};

const createInstantaneousTime = () => {
  return {
    getTotal: () => 'instantaneous',
    getType: () => 'Time',
    toString: () => {
      return 'instantaneous';
    },
    getAll: () => {
      return [
        ['instantaneous: ','The ability\'s effect is immediate and dissipates immediately after'],
      ];
    },
    getOriginalString: () => 'duration: instantaneous',
  };
}


export const parseUnit = (input, context) => {
  if (typeof input === 'object' && !input[0]) {
    return input;
  }

  /* Special cases for spell distances: */
  switch(input) {
    case 'creature touched':
      return createTouchTarget();
    case 'personal':
      return createPersonalTarget();
    case 'touch':
      return createTouchDistance();
    case 'close':
      return createDistance(createComposite({
        base: 25 + Math.floor(2.5 * context.caster_level),
      }), distanceConversions.feet, input + ' (25ft + 2.5ft x level)');
    case 'medium':
      return createDistance(createComposite({
        base: 100 + 10 * context.caster_level,
      }), distanceConversions.feet, input + ' (100ft + 10ft x level)');
    case 'long':
      return createDistance(createComposite({
        base: 400 + 40 * context.caster_level,
      }), distanceConversions.feet, input + ' (400ft + 40ft x level)');
    case 'concentration':
      return createConcentrationTime();
    case 'permanent until discharged':
      return createUntilDischargedTime();
    case 'instantaneous':
      return createInstantaneousTime();
  }

  const conversions = {
    'distance': distanceConversions,
    'time': timeParseableConversions,
    'target': targetDefinitions
  };
  const composite = createCount_r(input, context)

  for (let metric in conversions) {
    for (let unit in conversions[metric]) {
      if (composite.getUnit() === unit) {
        let scale = conversions[metric][unit];
        switch (metric) {
          case 'distance':
            return createDistance(composite, scale, input);
          case 'time':
            return createTime(composite, scale, input);
          case 'target':
            return createTarget(composite, scale, input);
        }
      }
    }
  }

  return false;
};

const context = {
  caster_level: 4,
};
//console.log('Testing unit parsing...');
//console.log(parseUnit('long', context));
//console.log(parseUnit('1 creature / caster_level', context));
//console.log(parseUnit('10 min / caster_level', context));
//console.log(parseUnit('10 feet / caster_level', context));
