import { AnyAction } from 'redux';
import { UserReducer } from '../../types';

const INITIAL_STATE: UserReducer = {
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
