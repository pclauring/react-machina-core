const Card = () => {
	return (
  	<div>
  	  <img src="http://placehold.it/75" />
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div  style={{fontSize: '1.25em', fontWeight: 'bold'}}>Name Here ...</div>
      <div>Company Name Here ...</div>
      </div>
  	</div>
  );
};

ReactDOM.render(<Card />,mountNode);