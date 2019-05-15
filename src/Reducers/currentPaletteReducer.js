export const currentPaletteReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PALETTE':
      return action.palette
    case 'TOGGLE_LOCKED':
      return state.map(color => {
        if (color.hex === action.color) {
          return { ...color, locked: !color.locked }
        } else {
          return color
        }
      })
      
    default:
      return state
  }
}

export default currentPaletteReducer