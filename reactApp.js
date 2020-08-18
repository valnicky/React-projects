import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const element = React.createElement('div', {
	className: 'welcome-message',
}, 'hello world');
ReactDOM.render(
	element,
	document.getElementById('root')
	)



class ContactList extends React.Component{
	render() {
		const people = [
			{ name: 'Michael'},
			{ name: 'Ryan'},
			{ name: 'Tyler'}
		]

	return <ol>
		{people.map(person => (
			<li key={person.name}>{person.name}</li>
			))}
	</ol>	
	}
}


ReactDOM.render(
	<ContactList/>,
	document.getElementById('root')
	)