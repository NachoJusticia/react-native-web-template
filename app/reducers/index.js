import assign from 'object-assign';

const defaultState = {
  color: '#8ea3ff'
};


export default function reduce(state = defaultState, action) {
  switch (action.type) {
    case 'TOGGLE_COLOR':
      return assign({}, state, {
        color: state.color === '#90ff8c' ? '#8ea3ff' : '#90ff8c'
      });
    default:
      return state;
  }
}
