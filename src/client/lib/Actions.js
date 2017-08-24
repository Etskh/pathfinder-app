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
    action.listeners.forEach( listener => {
      listener.callback(payload);
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
