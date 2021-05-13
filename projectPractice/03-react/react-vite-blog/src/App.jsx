import React, { useState } from 'react'
import 'antd/dist/antd.min.css'
import './App.css'
import '@/assets/reset.less'
import '@/assets/common.less'
import Index from '@/pages/index'
import List from '@/pages/list/hooks'
import Detail from '@/pages/detail/hooks'
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/list" component={List} />
        <Route path="/detail/:id"  component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default App
