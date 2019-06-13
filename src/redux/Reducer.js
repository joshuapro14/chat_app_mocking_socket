
export const initialState = {
  messages : []
}

export const getMessageObject = (message,from,time) => {
  return {
    message : message,
    from : from,
    time : time
  }
}

export const redFn = (state = initialState, action) => {  

  switch (action.type) {
    case 'MESSAGE_RECEIVED':
      let msg = getMessageObject(action.message,action.from,action.time);
      let messages = Object.assign([],state.messages);
      messages.push(msg);
      return Object.assign({} , state, {
          messages : messages
      });
    default:
      return state;
  }
}
