import { connect } from 'react-redux'
import { Counter } from './components/Counter'
import { mapStateToProps, mapDispatchToProps } from './reducer/counter'
import { configureStore } from './store/configureStore'
import { renderReactRedux } from 'hypernova-react-redux'

let ConnectedMyComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

module.exports = renderReactRedux(
  'MyComponent.js',
  ConnectedMyComponent,
  configureStore
)
