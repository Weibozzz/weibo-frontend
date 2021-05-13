import React, { useState } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'antd/dist/antd.min.css'
import './App.css'
import '@/assets/reset.less'
import '@/assets/common.less'
import rootReducer from '@/store/reducers'
import Index from '@/pages/index'
import List from '@/pages/list/hooks'
import Detail from '@/pages/detail/hooks'
import { Spin } from 'antd'
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);
export const store = createStore(rootReducer)
function App() {
  const [isLoading, setLoading] = useState(false)
  const unsubscribe = store.subscribe(() => {
    const { loading } = store.getState()
    setLoading(loading)
  })
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/list" component={List} />
          <Route path="/detail/:id"  component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      {
        isLoading && (
          <div className='global-loading'>
            <Spin />
          </div>
        )
      }
    </Provider>
  )
}
export default App
