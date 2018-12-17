const Card = (props) => {
	return (
  	<div>
  	  <img width ="75" src={props.avatar_url}/>
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div  style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
      <div>{props.company}</div>
      </div>
  	</div>
  );
};


class Form extends React.Component {
	state = { userName: '' }

	handleSubmit = (event) => {
  	event.preventDefault();
    //console.log("Event: Submit ", this.state.userName);
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then(resp => {
    //console.log(resp);
    this.props.onSubmit(resp.data);
    });
  };
  
	render () {
  	return (
    		<form onSubmit={this.handleSubmit}>
  		  <input type="text" 
        			// ref={(input) => this.userNameInput = input}
               onChange={(event) => this.setState({ userName: event.target.value})}
        			 placeholder="Github Username" />
  		    <button type="submit">Add Card</button>
  		  </form>
    )};
};

const CardList = (props) => {
  return (
  	<div>
			{props.cards.map(card => <Card {...card} />)}
  	</div>
  );
};

class App extends React.Component {
	state = { cards:  [] };
  
  addNewCard = (cardInfo) => {
  	this.setState(prevState => ({
    	cards: prevState.cards.concat(cardInfo)
    }));
  };
  
	render () {
  	return (
    <div>
      <Form onSubmit={this.addNewCard}/>
      <CardList cards={this.state.cards}/>
    </div>
    )};
};

ReactDOM.render(<App />,mountNode);