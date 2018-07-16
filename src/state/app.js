const initialState = {
  sideDrawerOpen: false,
};

const SIDE_DRAWER_TOGGLE = 'SIDE_DRAWER_TOGGLE';
export const toggleDrawer = open => ({ type: SIDE_DRAWER_TOGGLE, payload: open });

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIDE_DRAWER_TOGGLE:
      return { ...state, sideDrawerOpen: payload };
    default:
      return state;
  }
};