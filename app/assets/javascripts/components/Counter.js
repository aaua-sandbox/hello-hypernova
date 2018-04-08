import React from 'react'
import PropTypes from 'prop-types'

export function Counter(props) {
  const {
    count,
    onIncrement,
    onDecrement
  } = props;

  return (
    <div>
      <p>カウント: {count}回</p>
      <button onClick={onIncrement}>++</button>
      <button onClick={onDecrement}>--</button>
    </div>
  )
}
Counter.propTypes = {
  count:       PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}
