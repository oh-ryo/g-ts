import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

const topPage = () => <div><h1>Top Page</h1>ここがトップページです</div>
const page1 = () => <div><h1>page1</h1>1枚目のページです</div>
const page2 = () => <div><h1>page2</h1>2枚目のページです</div>
const page3 = () => <div><h1>page3</h1>3枚目のページです</div>
const page4 = () => <div><h1>page4</h1>4枚目のページです</div>


const Header: React.FC = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to='/'>top</Link></li>
          <li><Link to='/page1'>location1</Link></li>
          <li><Link to='/page2'>location2</Link></li>
          <li><Link to='/page3'>location3</Link></li>
          <li><Link to='/page4'>location4</Link></li>
        </ul>
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

export default Header;