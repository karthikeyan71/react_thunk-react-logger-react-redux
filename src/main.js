import React,{Component} from 'react';
import Using from './Pages/using.js';
import {Person} from './Pages/page1';



export default class Main extends Component
{
  render()
  {
    return (
      <div>
        <p className="texter"> rendering the main component </p>
        <Person />
        <Using />
      </div>
    )
  }
}
