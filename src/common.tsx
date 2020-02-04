import * as React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {topPage, page1, page2, page3, page4} from './header';

interface Props{
  name: string,
}
interface State {}

class Common extends React.Component<Props, State> {
  render() {
    return(
      <Router>
      <div className="Common">
        {this.props.name}さん。こんにちは。
      </div>
      <div>
        <Route path='/' exact component={topPage}/>
        <Route path='/page1' exact component={page1}/>
        <Route path='/page2' exact component={page2}/>
        <Route path='/page3' exact component={page3}/>
        <Route path='/page4' exact component={page4}/>
      </div>
      </Router>

    )
  }
}

export default Common;