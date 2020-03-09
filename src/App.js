import React from 'react';
import logo from './logo.svg';
import './App.css';
import './header.scss';
import Header from './components/Header';

import Routing from './Routing';
function App() {
  return (
    <div className="App">
      <Header />
{/* <!-- END TOP NAVBAR --> */}



<div data-component="sidebar">
  <div className="sidebar">
  <ul className="list-group flex-column d-inline-block first-menu">
    <li className="list-group-item pl-3 py-2">
      <a href="#"><i className="fa fa-dashboard" aria-hidden="true"><span className="ml-2 align-middle">Reporting</span></i></a>
      
      <ul className="list-group flex-column d-inline-block submenu">
        <li className="list-group-item pl-4">
          <a href="#" className="">Dashboard</a>
          
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow"></span>
            <li className="list-group-item pl-4">
              <a href="#">Home</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">My Sites</a>
            </li>
          </ul>
          
        </li> 
        
        <li className="list-group-item pl-4">
          <a href="">SEO</a>
          
          <ul className="list-group flex-column d-inline-block sub-submenu">
            <span className="arrow" style={{top:"113px"}}></span>
            <li className="list-group-item pl-4">
              <a href="#">Dashboard</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Titles & Metas</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Social</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">XML Sitemaps</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Advanced</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Tools</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Search Console</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Go Premium</a>
            </li>
            <li className="list-group-item pl-4">
              <a href="#">Manual</a>
            </li>
          </ul>
        
        </li>
      </ul>
    </li> 
    
  </ul>
</div>
</div>

<div className="wp-content">
  <div className="container-fluid">
  <Routing />
  </div>
</div>
</div>

  );
}

export default App;
