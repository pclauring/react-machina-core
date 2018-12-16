class Button extends React.Component{


    handleClick = () => {
    //this === component instance
   this.props.onClickFunction(this.props.incrementValue);
    };
  
    render() {
      return (
        <button onClick={this.handleClick}>
        +{this.props.incrementValue}
        </button>
        );
      }
    }
    
    const Result = (props) => {
      return (
          <div>{props.counter}</div>
      );
    };
  
  class App extends React.Component{
  // constructor(props){
  // super(props);
  // this.state = { counter : 0 };
  // }
  
  state = { counter : 0 };
  
  incrementCounter = (incrementValue) => {
  this.setState((prevState) => {
        return {
         counter : prevState.counter + incrementValue
        };
      });
  }
  render() {
   return(
   <div>
     <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
     <Button incrementValue={2} onClickFunction={this.incrementCounter}/>
     <Button incrementValue={3} onClickFunction={this.incrementCounter}/>
     <Button incrementValue={4} onClickFunction={this.incrementCounter}/>
     <Result counter={this.state.counter}/>
   </div>
   );
  };
  }
  ReactDOM.render(<App />, mountNode);