const initialState = {
  expanded: false
};

const nav = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV_MENU':
        return { expanded: !state.expanded };
}

  return state || initialState;
}

export default nav;