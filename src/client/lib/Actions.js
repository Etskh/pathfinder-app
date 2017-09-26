const _ = require('lodash');


export const CreateActions = (config) => {

  const actions = [];
  for( let name in config ) {
    actions.push({
      name: name,
      action: config[name],
      listeners: [],
    });
  }

  const getAction = ( actionName ) => {
    const action = _.find(actions, {name: actionName});
    if( !action ) {
      throw new Error('No known action named ' + actionName );
    }
    return action;
  }

  const dispatchAction = (actionName, payload) => {
    const action = getAction(actionName);
    console.log(`ACTION (dispatch): ${action.name}`);

    let newPayloadOrPromise = action.action(payload);
    if( typeof newPayloadOrPromise === 'undefined' ) {
      // If the function didn't do anything,
      // then we just resolve with our payload
      newPayloadOrPromise = Promise.resolve(payload);
    }
    else if ( !newPayloadOrPromise.then ) {
      // If the function isn't a promise, but has value,
      // we'll assume its our new payload
      newPayloadOrPromise = Promise.resolve(newPayloadOrPromise);
    }
    // If the function was a promise, we'll just
    // use whatever that promise returned

    return newPayloadOrPromise.then( payload => {
      action.listeners.forEach( listener => {
        listener.callback(payload);
      });
      return payload;
    });
  }

  const subscribeToAction = (actionName, context, callback) => {
    const action = getAction(actionName);
    console.log(`ACTION (subscribed): ${action.name}`);
    action.listeners.push({
      context: context,
      callback: callback,
    });
  }

  const unsubscribeToAction = (actionName, context) => {
    const action = getAction(actionName);
    console.log(`ACTION (unsubscribed): ${action.name}`);
    _.remove(action.listeners, listener => {
      return listener.context === context;
    })
  }

  return {
    unsubscribe: unsubscribeToAction,
    subscribe: subscribeToAction,
    dispatch: dispatchAction,
    actions: actions,
  };
}
