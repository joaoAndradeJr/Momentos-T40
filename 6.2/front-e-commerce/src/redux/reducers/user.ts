import { AnyAction } from 'redux';

const INITIAL_STATE = {
  name: '',
  email: '',
};

const user = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default user;
