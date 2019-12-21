export const getDataChangers = store => {
  return {
    doSetLocation: (state, location) => {
      return Object.assign({}, state, { location });
    }
  };
};
