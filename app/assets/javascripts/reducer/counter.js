const INCREMENT_COUNTER = {
  type: 'INCREMENT_COUNTER'
}
const DECREMENT_COUNTER = {
  type: 'DECREMENT_COUNTER'
}

export function counterReducer(state = { count: 0 }, action) {
  console.log(action.type)
  switch(action.type) {
    case INCREMENT_COUNTER.type:
      console.log('counterReducer: INCREMENT_COUNTER')
      return { count: state.count + 1 }
    case DECREMENT_COUNTER.type:
      console.log('counterReducer: DECREMENT_COUNTER')
      return { count: state.count - 1 }
    default:
      console.log('counterReducer: default')
      return state
  }
}

export function mapStateToProps(state) {
  return { count: state.count }
}

export function mapDispatchToProps(dispatch) {
  return {
    onIncrement() { return dispatch(INCREMENT_COUNTER) },
    onDecrement() { return dispatch(DECREMENT_COUNTER) }
  }
}
