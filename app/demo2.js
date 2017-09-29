import React from 'react';
function FancyBorder(props){
	return(
		<div className={'asfas'+props.color}>
			{props.children}
		</div>
	);
};
function WelcomeDialog(){
	return(
		<FancyBorder color="blue">
			<h1 className="Dialog-title">welcome</h1>
			<p className="Dialog-message">akfjlkjasfklaj</p>
		</FancyBorder>
	)
};
class Demo2 extends React.Component{
	render(){
		return(
			<div>
				<WelcomeDialog />
			</div>
		)
	}
};
export default Demo2;
