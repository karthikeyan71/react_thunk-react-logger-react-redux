import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllUser } from '../actions/actioner';

class Using extends Component
{
  render()
  {

    if(this.props.data)
    {
      console.log("Something is sent");
    }
    else {
      console.log("The value is not sent back to the component");
    }

    return (
      <div>
        <p> The User value is {this.props.data} </p>
        <button onClick={()=>this.props.callExternal()}> Action Caller function </button>
      </div>
    );
  }
}

function mapStatesToProps(store)
{
  return {
    data: store.user
  };
}

function mapDispatchToProps(dispatch)
{
  return bindActionCreators({callExternal: getAllUser }, dispatch);
}

export default connect(mapStatesToProps, mapDispatchToProps)(Using);
