
import { CreateActions } from '../lib/Actions';
import { Character } from '../lib/Character';
import * as Fetch from '../lib/Fetch';

export const AppActions = CreateActions({
  begin: (payload) => {
    // empty
  },
  initialize: (payload) => {
    // empty
  },
  setActiveTab: (payload) => {
    if( !payload.activeTab ) {
      console.error('AppActions.setActiveTab requires activeTab to be not null');
      console.error(payload.activeTab);
      return;
    }

    return Fetch.toLocal('activeTab', payload.activeTab).then( activeTab => {
      return {
        activeTab: activeTab,
      }
    })
  },
  setCharacter: (payload) => {
    if( !payload.character ) {
      console.error('AppActions.setCharacter requires character to be not null');
      console.error(payload.character);
    }

    return Character.setActive(payload.character).then( character => {
      return {
        character: character,
      }
    })
  },
});
