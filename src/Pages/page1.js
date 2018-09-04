import React,{ Component } from 'react';

const NewContext = React.createContext();

export class MyProvider extends Component{

  state = {
    name: "karthikeyan",
    age: 23,
    gender: 'male'
  }

  render()
  {

    return (
      <NewContext.Provider value={this.state}>
          {this.props.children}
      </NewContext.Provider>
    );
  }

}

export class Person extends Component
{

  render()
  {
    return (
      <MyProvider>
        <p> Rendering the page1 Component </p>
        <Person0 />
      </MyProvider>
    );
  }

}
export class Person0 extends Component
{

  render()
  {
    return (
      <React.Fragment>
        <Person1 />
      </React.Fragment>
    );
  }

}
export class Person1 extends Component
{

  render()
  {
    return (
      <React.Fragment>
        <Person2 />
      </React.Fragment>
    );
  }

}
export class Person2 extends Component
{

  render()
  {
    return (
      <div>
      <p> Rendering the page5 Component </p>
        <NewContext.Consumer>
        {(context) => (
          <div>
            <p>Name is : {context.name} </p>
          </div>
        )}
        </NewContext.Consumer>
      </div>
    );
  }

}
