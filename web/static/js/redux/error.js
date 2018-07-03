export const types = {
  SET_ERROR: "SET_ERROR",
  CLEAR_ERROR: "CLEAR_ERROR",
}

export const actions = {
  clearError: () => ({ type: types.CLEAR_ERROR }),
}

export const reducer = (state = null, action) => {
  switch (action.type) {
    case types.SET_ERROR: {
      return action.error
    }
    case types.CLEAR_ERROR:
      return null
    default:
      return state
  }
}
